import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const woocommerce = () => {
  return new WooCommerceRestApi({
    url: process.env.WC_URL!,
    consumerKey: process.env.WC_CONSUMER_KEY!,
    consumerSecret: process.env.WC_CONSUMER_SECRET!,
    version: "wc/v3",
  });
};

export default woocommerce();
