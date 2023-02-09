import axios from "axios";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "./errorboundary";

const fetchProduct = async () => {
  try {
    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export default function ProductPage() {
  return (
    <>
      <h1>Suspense Example</h1>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading....</p>}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

function ProductList() {
  const { data } = useQuery("fetchProduct", fetchProduct, {
    retry: false,
    suspense: true,
    useErrorBoundary: true,
  });

  return (
    <>
      {data.data.slice(0, 10).map((item, index) => (
        <div key={item.id}>
          <p>{index + 1}</p>
          <img
            width={"60px"}
            height={"60px"}
            src={item.api_featured_image}
            alt={item.name}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
