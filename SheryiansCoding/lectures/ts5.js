// Form Handling, Sessions & Cookies
// ______________________________________________________________
// Notes
// handling backend proceess of FORMS either dat is coming from any frontEnd (library, framework, template engine)
// steps in this lecture
// npm i cookie-parser
// session and cookies
// Sessions and cookies are related but not the same—especially in the backend context.
// Cookies - remember example - you request to server - server ask for login - then give to kind of any string, and with the help of that string you can establish a connection with server to find you required data , if you lost your string/cookie then you need to login again
// cookies (data that is saved on your browser)
//_____________________________________________
// Cookies are stored on the client-side,
// sessions are stored on server side
// Cookies are typically used to store small pieces of data
// Sessions generally last until the user closes the browser or logs out, but the server can define their duration.
// Cookies are generally limited in size (around 4KB).
// sessions are stored on server, so there is no size limitations like cookies.
// cookies are not supposed to be secured
// Sessions are generally considered more secure because the sensitive data is not stored on the client-side.
var express1 = require("express");
var app1 = express1();
// app1.use(express1.json())
// app1.use(express1.urlencoded({extended:true}))
// these two lines are encripting data - remember postman body-json she showed
app1.use(express1.json()); // this will control data from framework
app1.use(express1.urlencoded({ extended: true })); // when we will use axios or fetch
app1.get("/", function (req, res) {
    res.send("cookies and Sessions!");
});
app1.get("/profile", function (req, res) {
    res.send("Profile");
});
app1.listen(3000);
