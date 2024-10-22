import React from "react";
import "./Home.css";
import ProductsHome from "../components/ProductsHome";
import About from "../components/About";
import InfO from "../components/InfO";

const Home = () => {
  return (
    <>
      <div className="background">
        <div className="overlay"></div>
        <div className="content">
          <div className="container">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dolorum id culpa sapiente reprehenderit ullam ab perferendis
              voluptate aut quidem possimus magnam, maxime soluta facilis omnis.
            </p>
            <button className="btn btn-secondary">Read More</button>
          </div>
        </div>
      </div>
      <ProductsHome></ProductsHome>
      <InfO></InfO>
      <About></About>
    </>
  );
};

export default Home;
