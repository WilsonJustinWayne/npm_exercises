const $ = require('jquery');
const sayHello = () => {
    console.log("hello");
    $('body').css("background-color", "black");
};
sayHello();