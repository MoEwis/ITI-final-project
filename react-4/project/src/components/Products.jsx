import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [iconState, setIconState] = useState({});

  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3005/products");
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3005/products/${productId}`);
      setProductData((prevData) =>
        prevData.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const changeIcon = (productId) => {
    setIconState((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div className="products p-5 m-3">
      <div className="container">
        <div className="product-header d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">Video Games</h1>
          <Link to="/products/0/edit" className="btn btn-success">
            <i className="bi bi-plus-circle-fill"></i> Add New Video Games
          </Link>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {productData.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Name:</strong>
                    {product.name}
                  </Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price}
                    <br />
                    <strong>Quantity:</strong> {product.quantity}
                  </Card.Text>
                  <div className="d-flex justify-content-between flex-column gap-2">
                    <Link
                      to={`/products/${product.id}/edit`}
                      className="btn btn-primary"
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </Link>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-warning"
                    >
                      <i className="bi bi-eye"></i> View
                    </Link>
                    <Button
                      className="bg-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </Button>
                    <Button
                      className="bg-success"
                      onClick={() => changeIcon(product.id)}
                    >
                      <i
                        className={
                          iconState[product.id]
                            ? "bi bi-bag-check"
                            : "bi bi-cart-plus bg"
                        }
                      ></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
