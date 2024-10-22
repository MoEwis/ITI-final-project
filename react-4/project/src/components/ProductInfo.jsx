import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/products/${id}`);
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  if (!productData) {
    return <div className="text-center p-5">Loading...</div>;
  }

  return (
    <div
      className="p-5"
      style={{ minHeight: "75vh", backgroundColor: "#e9ecef" }}
    >
      <div className="container">
        <Card
          bg="light"
          text="dark"
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Card.Header
            as="h4"
            className="bg-primary text-white"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            Games Details
          </Card.Header>
          <Card.Body>
            {productData.image && (
              <div className="mb-3 text-center">
                <img
                  src={productData.image}
                  alt={productData.name}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
            )}
            <Card.Text className="mb-3">
              <div className="mt-2">
                <strong>Product Name:</strong> {productData.name}
              </div>
              <div className="mt-2">
                <strong>Product Price:</strong> {productData.price}
              </div>
              <div className="mt-2">
                <strong>Product Quantity:</strong> {productData.quantity}
              </div>
            </Card.Text>
            <div className="mt-4">
              <i className="bi bi-star-fill text-warning m-lg-1"></i>
              <i className="bi bi-star-fill text-warning m-lg-1"></i>
              <i className="bi bi-star-fill text-warning m-lg-1"></i>
              <i className="bi bi-star-fill text-warning m-lg-1"></i>
              <i className="bi bi-star-fill text-warning m-lg-1"></i>
            </div>
            <Link to="/products" className="btn btn-primary mt-3">
              Back To Video Games
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductInfo;
