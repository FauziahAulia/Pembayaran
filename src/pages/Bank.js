import React from "react";
//import material
import { Container } from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";

export default function Transfer() {
  return (
    <div>
      <Container>
        <Link to="/transfer">
          <Navbar>Ke Rekening Bank</Navbar>
        </Link>
      </Container>
    </div>
  );
}
