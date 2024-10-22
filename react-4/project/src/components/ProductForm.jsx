import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();
  let { id } = useParams();

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/products/${id}`);
      const product = response.data;
      setProductName(product.name);
      setProductPrice(product.price);
      setProductQuantity(product.quantity);
      setProductImage(product.image);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (id !== "0") {
      getProductDetails();
    }
  }, []);

  let productHandler = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice || !productQuantity || !productImage) {
      setError("All fields are required.");
      return;
    }

    setError("");

    const product = {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      image: productImage,
    };

    try {
      if (id === "0") {
        await axios.post("http://localhost:3005/products", product);
      } else {
        await axios.put(`http://localhost:3005/products/${id}`, product);
      }

      navigate("/products");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh", backgroundColor: "#f8f9fa" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <Card.Title
            className="text-center text-primary"
            style={{
              fontSize: "28px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {id === "0" ? "Add New Video Games" : "Edit Video Games"}
          </Card.Title>
          <Form onSubmit={productHandler}>
            <Form.Group controlId="formProductName">
              <Form.Control
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                name="name"
                type="text"
                placeholder="Product Name"
                style={{ borderRadius: "8px", marginBottom: "15px" }}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Control
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                name="price"
                type="number"
                placeholder="Product Price"
                style={{ borderRadius: "8px", marginBottom: "15px" }}
              />
            </Form.Group>
            <Form.Group controlId="formProductQuantity">
              <Form.Control
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                name="quantity"
                type="number"
                placeholder="Product Quantity"
                style={{ borderRadius: "8px", marginBottom: "15px" }}
              />
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Control
                onChange={handleImageChange}
                name="image"
                type="file"
                accept="image/*"
                style={{ borderRadius: "8px", marginBottom: "20px" }}
              />
            </Form.Group>
            {productImage && (
              <div className="mb-3">
                <img
                  src={productImage}
                  alt="Product Preview"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
            <Button
              className="w-100"
              variant="success"
              type="submit"
              style={{ borderRadius: "8px" }}
            >
              {id === "0" ? "Add New Video Games" : "Edit Video Games"}
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Link
              to="/products"
              className="btn btn-outline-primary w-100 mt-3"
              style={{ borderRadius: "8px" }}
            >
              Back To Games
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductForm;
