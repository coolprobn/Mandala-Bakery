

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from "./components/login/login";
import Register from "./components/register/register";
import Product from "./components/product/products";
import ProductItem from "./components/product/productItem";
import Test from "./components/test";
import Cake from "./components/product/cake/cake";
import Cookie from "./components/product/cookie/cookie";
import {Drawer} from "./router/Drawer";
import Home from "./components/home/home";
import {HomeStack} from "./router/homeStack";

export default class App extends Component {
  render() {
    return (
        <Drawer/>
    );
  }
}
