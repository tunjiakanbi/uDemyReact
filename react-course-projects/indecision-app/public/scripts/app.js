console.log("app.js is running");
//JSX is JavaScript XML
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "h1", 
    {id: "someid"}, 
    "This is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);