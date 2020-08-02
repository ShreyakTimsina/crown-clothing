import React, { Component } from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.content";

import ShopPage from "./pages/shop/shop.component";
import { Route } from "react-router-dom";

import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
