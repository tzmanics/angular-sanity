const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="product"] | order(title asc)';
  const products = await sanity.fetch(query).then((results) => {
    const allProducts = results.map((product) => {
      const output = {
        id: product.slug.current,
        name: product.title,
        url: `${process.env.URL}/.netlify/functions/getProducts`,
        price: product.defaultProductVariant.price,
        description: product.blurb,
        body: blocksToHtml({ blocks: product.body }),
      };

      const image =
        product.defaultProductVariant.images &&
        product.defaultProductVariant.images.length > 0
          ? product.defaultProductVariant.images[0].asset._ref
          : null;

      if (image) {
        output.image = imageUrlBuilder(sanity).image(image).url();
      }
      return output;
    });
    console.log(allProducts);
    return allProducts;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  };
};
