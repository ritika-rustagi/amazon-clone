// import logo from './logo.svg';
import React ,{useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function App() {

  const [{basket}, dispatch] =useStateValue();

  //piece of code which runs based on a given condition
  //useEffect <<<<<Powerful

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        //then user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user:null
        })
      }
    });
    return () =>{
      //all cleanup operations go here
      unsubscribe();
    }
  }, [])

  // console.log(user);

return (
  <Router> 
  <div className="App">
    <Switch>
      <Route path="/checkout">
      <Header />
        <Checkout />
      </Route>
      <Route path="/login">
        <Login />
        {/* <h1>Login Page</h1> */}
      </Route>
      {/* //this is default route */}
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  </div>
  </Router>

);
}



export default App;
