import ProductPopularCard from "../components/ProductPopularCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-stretch gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 sm:gap-4 mt-16">
        {products.map((product) => (
          <ProductPopularCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
