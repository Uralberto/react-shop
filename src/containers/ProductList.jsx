import React from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import useGetProducts from "../hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";

/* No es la mejor forma de traer una API. Pero para aprender lo nos importa en est clase (useEffect), vamos a trabajar de esta forma*/

const ProductList = () => {
  /* La siguiente pieza de código se va el hook useGetProducts 
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);
*/

  /* useEffect recibe 2 elementos. Una función anónima donde se va a ejecutar nuestro código y un arreglo donde tendremos diferentes elementos o valores que  van a estar escuchando para que la función anónima se ejcute*/

  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
