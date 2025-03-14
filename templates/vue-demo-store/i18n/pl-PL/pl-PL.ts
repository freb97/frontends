import account from "../pl-PL/account.json";
import cart from "../pl-PL/cart.json";
import changePassword from "../pl-PL/changePassword.json";
import checkout from "../pl-PL/checkout.json";
import form from "../pl-PL/form.json";
import general from "../pl-PL/general.json";
import listing from "../pl-PL/listing.json";
import newsletter from "../pl-PL/newsletter.json";
import product from "../pl-PL/product.json";
import recoveryPassword from "../pl-PL/recoveryPassword.json";
import validations from "../pl-PL/validations.json";

export default {
  ...account,
  ...form,
  ...changePassword,
  ...recoveryPassword,
  ...checkout,
  ...general,
  ...cart,
  ...listing,
  ...product,
  ...newsletter,
  ...validations,
};
