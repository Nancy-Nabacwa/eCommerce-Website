import React from "react";
import './index.css'
import { useGetProducts } from "./hooks/useGetProducts";
import ProductCard from "../Atoms/ProductCard";
import Footer from "../Footer";

 const Products =()=>{
    const {products,error,loading} = useGetProducts();
    return(
        <div>
            <h1 className="featured-heading">Featured Products</h1>
            <div className="products-container">
            {loading && <h2>Loading products ...</h2>}
            {error && <h2>{error}</h2>}
            {products.length > 0 ? products.map((product) =>(
                <ProductCard 
                key = {product.id}
                title = {`${product.title}`}
                image = {product.image}
                price = {product.price}

        
                />
            )):!loading && <h2>No Products Found</h2>}
            </div>

            <Footer/>
           
        </div>
    )
}
export default Products;
