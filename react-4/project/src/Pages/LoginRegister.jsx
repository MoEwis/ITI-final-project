import React, { useState } from "react";
import { Tab, Tabs, Form, Button, Card } from "react-bootstrap";

const LoginRegister = () => {
  const [key, setKey] = useState("login");
  const [name, setName] = useState("");
  const Login = () => {
    localStorage.setItem("user", name);
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            variant="pills"
            style={{ justifyContent: "center" }}
          >
            <Tab eventKey="login" title="Login" tabClassName="custom-tab">
              <Form>
                <Card.Title
                  className="text-center text-primary"
                  style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Card.Title>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Email address"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mb-3">
                  <a
                    href="#!"
                    className="text-primary"
                    style={{ fontSize: "14px" }}
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  onClick={Login}
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "14px",
                  }}
                >
                  Sign in
                </Button>

                <div className="text-center mt-3">
                  <p>
                    Not a member?{" "}
                    <a href="#" className="text-primary">
                      Register
                    </a>
                  </p>
                </div>
              </Form>
            </Tab>
            <Tab eventKey="register" title="Register" tabClassName="custom-tab">
              <Form>
                <Card.Title
                  className="text-center text-primary"
                  style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Card.Title>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicRepeatPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Repeat password"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Check
                  type="checkbox"
                  label="I have read and agree to the terms"
                  className="mb-3"
                  style={{ fontSize: "14px" }}
                />

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "14px",
                  }}
                >
                  Sign up
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginRegister;
