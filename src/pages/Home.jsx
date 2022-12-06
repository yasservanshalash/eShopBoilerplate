import React from "react";
import "./Home.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img from "../assets/homebanner.jpg"


function Home() {
  return (
    <div>
      <CssBaseline />
      <img src={img} alt="homebanner" className="homebanner"/>
      <Container>
        <div>
          <h1>Title</h1>
          <p>Price: $20</p>
          <p>Description: lorem ipsum dolor sit amet.</p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
