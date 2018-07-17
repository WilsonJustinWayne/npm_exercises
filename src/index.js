const $ = require('jquery');
const html = `HELLO`;
const sayHello = () => {
    console.log("hello");
    $('#html').html(html);
};
sayHello();

