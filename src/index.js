const $ = require('jquery');
import {sayHello} from "./say-hello.js" ;
const sayHi = () => {
    console.log("hello");
    $('body').css("background-color", "black");
};
sayHello("yo mama");
sayHi();