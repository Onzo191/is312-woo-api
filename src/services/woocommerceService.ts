import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const createWooCommerceInstance = () => {
  return new WooCommerceRestApi({
    url: process.env.WC_URL!,
    consumerKey: process.env.WC_CONSUMER_KEY!,
    consumerSecret: process.env.WC_CONSUMER_SECRET!,
    version: "wc/v3",
  });
};
