const $ = require('jquery');
const html = `HELLO`;
const sayHello = () => {
    console.log("hello");
    $('body').css("background", "black");
};
sayHello();