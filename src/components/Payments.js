import React from "react";
import jaye from "../assets/jaye.png";

export default function Payments() {
	return (
    <div className="payments" style={{ background: "#ffe9e7" }}>
      <div className="payments__content">
        <div className="payment">
          <h1>
            Free forever for your <span>salary payment</span>
          </h1>
        </div>

        <div className="payment">
          <img alt="payment" src={jaye} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "0 120px",
          marginTop: "-100px",
        }}
      >
        <p style={{ marginBottom: "15px", fontWeight: "500" }}>
          Subscribe to Eazilife today
        </p>
        <div className="flex aic jcc" style={{}}>
          <img
            style={{ maxWidth: "190px" }}
            src={require(".././assets/Screenshot_20230818-171016.png")}
          />
          <img
            style={{ maxWidth: "190px", margin: "0 20px" }}
            src={require(".././assets/Screenshot_20230818-171022.png")}
          />
        </div>
      </div>
    </div>
  );
}
