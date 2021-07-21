import React from "react";
import "./styles.css";
import BascetWithGoods from "./Components/BasketWithGoods/";
import Container from "./Components/Ui/Container";
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <>
    <Container>
     <BascetWithGoods/>
    </Container>
    <ToastContainer position="top-left" autoClose={2000} />
    </>
  );
};

export default App;
