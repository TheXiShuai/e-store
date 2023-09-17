import React, { useState, useEffect } from "react";
import "./App.css";
import Category from "./components/Category";
import { getCategories, getProducts } from "./fetcher";


function App() {
  const [categories, setCategories] = useState({errorMessage:'',data:[]});
  const [products, setProducts] = useState({errorMessage:'',data:[]});


  useEffect(() => {
const fetchData = async() =>{
  const resObject = await getCategories();
  setCategories(resObject);

}
fetchData();

  }, []);

  const handleCategoryClick = id => {
    const fetchData = async() =>{
      const resObject = await getProducts(id);
      setProducts(resObject);
    }
fetchData();
  };

  const renderCategories = () => {
    return categories.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        title={c.title}
        onCategoryClick={() => handleCategoryClick(c.id)}
      />
    ));
  };

  const renderProducts = () => {
    return products.data.map((p) => <div>{p.title}</div>);
  };

  return (
    <>
      <header>My store</header>

      <section>
        {categories.errorMessage && <div>Error:{categories.errorMessage}</div>}
        <nav>{categories.data && renderCategories()}</nav>

        <article>
        {products.errorMessage && <div>Error:{products.errorMessage}</div>}
          <h1>Products</h1>
          {products && renderProducts()}
        </article>
      </section>

      <footer>footer</footer>
    </>
  );
}
export default App;
