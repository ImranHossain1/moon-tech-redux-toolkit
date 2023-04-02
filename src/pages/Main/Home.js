import React from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, error, isError } = useGetProductsQuery();
  const products = data?.data;
  console.log(products);
  // const activeClass = "text-white  bg-indigo-500 border-white";
  // let content;
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }
  /*   if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (filter.stock || filter.brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  } */
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold  `}
          // onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold `}
          // onClick={() => dispatch(toggleBrands("amd"))}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold `}
          // onClick={() => dispatch(toggleBrands("intel"))}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
