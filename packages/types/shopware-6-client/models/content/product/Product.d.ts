import { ProductMedia } from "./ProductMedia";
import { Tax } from "../../system/tax/Tax";
import { Unit } from "../../system/unit/Unit";
import { ProductReview } from "./ProductReview";
import { ListingPrice } from "../../framework/pricing/ListingPrice";
import { Price } from "../../framework/pricing/Price";
import { CalculatedPrice } from "../../checkout/cart/price/CalculatedPrice";
import { ProductPrice } from "./ProductPrice";
import { PropertyGroup } from "../property/PropertyGroup";
import { DeliveryTime } from "../../checkout/delivery/DeliveryTime";
import { ProductManufacturer } from "./ProductManufacturer";
import { ProductTranslation } from "./ProductTranslation";
import { ProductConfiguratorSetting } from "./ProductConfiguratorSetting";
import { PropertyGroupOption } from "../property/PropertyGroupOption";
import { Category } from "../category/Category";
import { Tag } from "../../system/tag/Tag";
import { CustomField } from "../../common/CustomField";
import { SeoUrl } from "../navigation/Navigation";
import { CmsPage } from "../cms/CmsPage";

export type CrossSelling = {
  apiAlias: "cross_selling_element";
  crossSelling: {
    name: String;
    position: number;
    sortBy: string;
    sortDirection: string;
    limit: number;
    active: boolean;
    productId: string;
    product: null | Product;
    productStreamId: null | string;
    type: string;
    assignedProducts: Product[];
    translations: unknown;
    _uniqueIdentifier: string;
    versionId: null | string;
    translated: unknown;
    createdAt: Date;
    updatedAt: null | Date;
    extensions: unknown;
    id: string;
    productVersionId: string;
    apiAlias: string;
  };
  products: Product[];
  streamId: string;
  total: number;
};

/**
 * @public
 */
export type Product = {
  calculatedCheapestPrice: CalculatedPrice;
  calculatedListingPrice: ListingPrice;
  calculatedPrices: CalculatedPrice[];
  calculatedPrice: CalculatedPrice;
  configuratorSettings: ProductConfiguratorSetting[] | null;
  sortedProperties: PropertyGroup[] | null;
  isNew: boolean;
  parentId: string | null;
  childCount: number;
  autoIncrement: number;
  taxId: string | null;
  manufacturerId: string | null;
  unitId: string | null;
  active: boolean;
  displayGroup: string;
  price: Price[] | null;
  manufacturerNumber: string | null;
  ean: string | null;
  productNumber: string;
  stock: number;
  availableStock: number | null;
  available: boolean;
  deliveryTimeId: string | null;
  deliveryTime: DeliveryTime;
  restockTime: number;
  isCloseout: boolean | null;
  purchaseSteps: number | null;
  maxPurchase: number | null;
  minPurchase: number | null;
  purchaseUnit: number | null;
  referenceUnit: number | null;
  shippingFree: boolean | null;
  purchasePrice: number | null;
  markAsTopseller: boolean | null;
  weight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  releaseDate: Date;
  categoryTree: [] | null;
  optionIds?: string[];
  propertyIds: [] | null;
  additionalText?: string | null;
  name: string | null;
  keywords: string | null;
  description: string | null;
  metaTitle: string | null;
  packUnit: string | null;
  tax: Tax;
  manufacturer: ProductManufacturer | null;
  unit: Unit | null;
  prices: ProductPrice[];
  listingPrices: ListingPrice[] | null;
  cover: ProductMedia;
  parent: Product;
  children: Product[];
  media: ProductMedia[];
  translations: ProductTranslation[];
  categories: Category[];
  tags: Tag[];
  properties: PropertyGroupOption[] | null;
  options: PropertyGroupOption[] | PropertyGroupOptionCart[];
  categoriesRo: Category[] | null;
  coverId: string | null;
  customFields: CustomField[];
  tagIds: [] | null;
  productReviews: ProductReview[] | null;
  ratingAverage: number | null;
  extensions: [];
  id: string;
  parentVersionId: string;
  productManufacturerVersionId: string;
  seoUrls: SeoUrl[] | null;
  translated: {
    name: string | null;
    description: string;
  };
  productMediaVersiond?: null;
  crossSellings: CrossSelling[];
  cmsPage: null | CmsPage;
  apiAlias: "product";
};
