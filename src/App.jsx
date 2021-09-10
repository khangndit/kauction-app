import React from 'react';
import Header from './pages/MyHeader/Header';
import './shared/themes/reset.css';
import './shared/themes/global.css';
import Category from './pages/MyCategory/Category';
import Products from './pages/MyProducts/Products';
import ProductsFind from './pages/MyProductsFind/ProductsFind';
import Footer from './pages/MyFooter/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/MyProductDetail/ProductDetail';
import { SocketContext, socket } from './shared/socket/socket';

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Header />
        <Category />
        <Switch>
          <Route
            path="http://khangndit.github.io/kauction-app/"
            exact
            component={Products}
          />
          <Route
            path="http://khangndit.github.io/kauction-app/productFind"
            component={ProductsFind}
          />
          <Route
            path="http://khangndit.github.io/kauction-app/productDetail"
            component={ProductDetail}
          />
        </Switch>
        <Footer />
      </Router>
    </SocketContext.Provider>
  );
};

export default App;
