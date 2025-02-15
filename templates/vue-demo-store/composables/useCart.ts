import { useCartFunction as swUseCart } from "@shopware/composables";
import type { Schemas } from "#shopware";

const _useCart = (): UseCartReturn => {
  const useCartData: UseCartReturn = swUseCart();

  /**
   * Example on how to override the default `refreshCart` method
   *
   * @param {Schemas["Cart"]} newCart
   * @returns
   */
  async function refreshCart(
    newCart?: Schemas["Cart"],
  ): Promise<Schemas["Cart"]> {
    return useCartData.refreshCart(newCart);
  }

  return {
    ...useCartData,
    refreshCart,
  };
};

export const useCart = createSharedComposable(_useCart);
