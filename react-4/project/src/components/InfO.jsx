// import React from "react";
// import imgM from "../img//portrait-man-cartoon-style.jpg";
// const InfO = () => {
//   return (
//     <div className="card h-100 ">
//       <div className="container d-flex ">
//         <div className="imgI w-50">
//           <img className="w-100 h-100" src={imgM} alt="" />
//         </div>
//         <div className="infoI">
//           <h2>ewis</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//             ratione saepe. Neque eligendi placeat dolores optio error? Non harum
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfO;

import React from "react";
import imgM from "../img/portrait-man-cartoon-style.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/InfO.css";
const InfO = () => {
  return (
    <div className="info-container">
      <h1 className="text-center text-white mb-5">Customer Reviews</h1>
      <div className="container">
        <div className="row justify-content-center">
          {[...Array(3)].map((_, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card shadow-sm h-100"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)", // ظل أبيض
                }}
              >
                <div className="d-flex" style={{ height: "100%" }}>
                  <div style={{ width: "50%", overflow: "hidden" }}>
                    <img
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        borderRadius: "10px 0 0 10px",
                      }}
                      src={imgM}
                      alt="Customer Portrait"
                    />
                  </div>
                  <div style={{ width: "50%" }}>
                    <div
                      className="card-body d-flex flex-column justify-content-center"
                      style={{ padding: "1rem" }}
                    >
                      <h4
                        className="card-title text-primary"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        Customer
                      </h4>
                      <p
                        className="card-text"
                        style={{ margin: "0", fontSize: "0.9rem" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo, ratione saepe. Neque eligendi placeat dolores
                        optio error? Non harum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfO;
