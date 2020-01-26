"use strict";

console.log("app.js is running");
//JSX is JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "someid" },
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some text"
    )
);
// yarn init
// yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// var template = React.createElement(
//     "h1", 
//     {id: "someid"}, 
//     "This is JSX from app.js");
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// var userName = 'Tunji Akanbi';
// var userAge = 32;
// var userLocation = "Rosemount MN";

var user = {
    name: 'Tunji Akanbi',
    age: 42,
    location: 'Rosemount, MN'
};
var templateTwo =
// <div>
// <h1>{userName}</h1>
// <p>Age: {userAge}</p>
// <p>Location: {userLocation}</p>
// </div>

React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

ReactDOM.render(templateTwo, appRoot);
console.log("app.js fixed");
