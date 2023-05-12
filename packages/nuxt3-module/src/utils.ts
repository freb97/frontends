import { Nuxt } from "@nuxt/schema";
import { resolve, dirname } from "path";
import { fileURLToPath } from "node:url";
import { promises as fs, constants as FS_CONSTANTS } from "node:fs";
import packageJson from "package-json-parser";

type DEPENDENCY = "@shopware-pwa/api-client" | "@shopware-pwa/composables-next";

const distDir = dirname(fileURLToPath(import.meta.url));
const pkgDir = resolve(distDir, "..");
const pkgModulesDir = resolve(pkgDir, "./node_modules");

export async function isDependencyInstalledLocally(
  rootDir: string,
  dependency: DEPENDENCY
) {
  try {
    const projectPackageJsonPath = resolve(rootDir, "package.json");
    const packageJsonDefinition = packageJson.json(projectPackageJsonPath);
    if (
      packageJsonDefinition?.dependencies?.[dependency] ||
      packageJsonDefinition?.devDependencies?.[dependency]
    ) {
      return true;
    }
  } catch (error) {
    console.error("nuxt3-module: unable to check local dependencies");
  }
  return false;
}

export async function isExists(path: string) {
  try {
    await fs.access(path, FS_CONSTANTS.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

export async function resolveOwnDependency(dependency: DEPENDENCY, nuxt: Nuxt) {
  const { rootDir, workspaceDir } = nuxt.options;
  const modulePath = `${dependency}/dist/index.mjs`;

  const targets = [
    resolve(rootDir, "node_modules", modulePath),
    resolve(pkgModulesDir, modulePath),
    resolve(workspaceDir, "node_modules", modulePath),
  ];

  for (const target of targets) {
    if (await isExists(target)) {
      return target;
    }
  }
}