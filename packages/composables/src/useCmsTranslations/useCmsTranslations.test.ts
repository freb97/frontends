import { describe, expect, it } from "vitest";
import { useCmsTranslations } from "#imports";
import { useSetup } from "../_test";

describe("useCmsTranslations", () => {
  it("injection", async () => {
    const { vm } = await useSetup(useCmsTranslations);
    expect(vm).toEqual({});
  });
});
