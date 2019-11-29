import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
// import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import UserList  from '../Users/UserList';
import UserItem  from '../Users/UserItem';
import Messages from '../CreateProduct/CreateProduct';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import PizzaPage from '../Dish/pizza';
import Test from '../TEST/index'
import Slideshow from '../CreateSlideShow/slideshow';
const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      {/*<Route exact path={ROUTES.LANDING} component={LandingPage} />*/}
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.USER} component={UserList}/>
      <Route path={ROUTES.CREATE} component={Messages}/>
      <Route path={ROUTES.PIZZA} component={PizzaPage}/>
      <Route path={ROUTES.TEST} component={Test}/>
      <Route path={ROUTES.SLIDE} component={Slideshow}/>
      <Route path={ROUTES.USERITEM} component={UserItem}/>

    </div>
  </Router>
);

export default withAuthentication(App);
