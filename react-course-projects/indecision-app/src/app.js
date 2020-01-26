console.log("app.js is running");
//JSX is JavaScript XML
 var template = <p>This is JSX from app.js</p>;
// yarn init
// yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// var template = React.createElement(
//     "h1", 
//     {id: "someid"}, 
//     "This is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);