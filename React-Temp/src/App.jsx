import React , {useEffect} from "react";
import {Helmet} from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import Home from './pages/Home'
import CreateItem from './pages/CreateItem'
import ConnectWallet from './pages/ConnectWallet'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Profile from './pages/Profile'
import ShopGrid from './pages/ShopGrid'
import ShopGrid2 from './pages/ShopGrid2'
import ShopGrid3 from './pages/ShopGrid3'
import ShopDetails from './pages/ShopDetails'
import Activity from './pages/Activity'
import HelpCenter from './pages/HelpCenter'
import Authors from './pages/Authors'
import Login from './pages/Login'
import Signup from './pages/Signup'

import HomeDemo1 from './template/HomeDemo1'
import HomeDemo2 from './template/HomeDemo2'
import HomeDemo3 from './template/HomeDemo3'

import 'aos/dist/aos.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  useEffect(() => {
    document.body.classList.add('light-version')
  },[])

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);


  useEffect(() => {
    const script = document.createElement('script');

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    
    	<div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            NFT Marketplace
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" /> 
          {/*<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />*/}
          
        </Helmet>
  			<Switch>
          <Route path="/" exact component={Home} />
           <Route path="/create-item" component={CreateItem} /> 
           <Route path="/shop-grid" component={ShopGrid} />
           <Route path="/shop-grid-2" component={ShopGrid2} />
           <Route path="/shop-grid-3" component={ShopGrid3} />
           <Route path="/shop-details" component={ShopDetails} />
           <Route path="/activity" component={Activity} />
           <Route path="/help-center" component={HelpCenter} />
           <Route path="/connect-wallet" component={ConnectWallet} /> 
           <Route path="/blog" component={Blog} /> 
           <Route path="/blog-details" component={BlogDetails} />
           <Route path="/authors" component={Authors} />
           <Route path="/profile" component={Profile} /> 
           <Route path="/login" component={Login} />
           <Route path="/signup" component={Signup} />
          <Route path="/index-1" component={HomeDemo1} />
          <Route path="/index-2" component={HomeDemo2} />
          <Route path="/index-3" component={HomeDemo3} />
  			</Switch>
	    </div>    
  );
}

export default App;