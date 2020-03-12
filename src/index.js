import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Slider from './components/slider/slider';
import TabsMenu from './components/TabsMenu/tabs-menu';
import SliderBlog from './components/slider-blog/SliderBlog';

// JS
import "./js/ToogleListMenu";
import "./js/btnGoingUp";
import "./js/navigation";
import "./js/preloader";
import "./js/toogleHideMenu";

// Bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Component CONSTANS
const slider = document.getElementById("slider");
const dishMenu = document.getElementById("DishMenu");
const sliderBlog = document.getElementById("blog-slider");

ReactDOM.render(<Slider />, slider);
ReactDOM.render(<TabsMenu />, dishMenu);
ReactDOM.render(<SliderBlog />, sliderBlog);