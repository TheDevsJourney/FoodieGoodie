import React from "react";
import { Link } from "react-router-dom";

function Home({ onSubmit }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw"
      }}
    >
      <div style={{ height: "100%", width: "100%" }} className="bgImg" />
      <div style={{ position: "absolute", textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>
          Welcome!
          <br />
          Search For All of Your Favorite Recipes.
        </h1>
        <br />
        <div
          style={{
            backgroundColor: "#e16120",
            display: "inline-block",
            padding: "15px 25px",
            cursor: "pointer"
          }}
        >
          <Link
            to="/recipes"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => {
              onSubmit("");
            }}
          >
            Find Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
