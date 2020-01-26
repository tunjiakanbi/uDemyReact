'use strict';

console.log("app.js is running");
//JSX is JavaScript XML
var appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};
//  var template = (
//      <div>
//      <h1 id="someid">Indecision App</h1>
//      <p>This is some text</p>
//      </div>
//  );
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { id: 'someid' },
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    )
);
// yarn init
// yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// var template = React.createElement(
//     "h1", 
//     {id: "someid"}, 
//     "This is JSX from app.js");
var appRoot1 = document.getElementById('app1');
var appRoot2 = document.getElementById('app2');
// ReactDOM.render(template, appRoot);
// var userName = 'Tunji Akanbi';
// var userAge = 32;
// var userLocation = "Rosemount MN";

var user = {
    name: 'Tunji Akanbi',
    age: 42,
    location: 'Rosemount, MN'
};
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
var templateTwo =
// <div>
// <h1>{userName}</h1>
// <p>Age: {userAge}</p>
// <p>Location: {userLocation}</p>
// </div>

React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
ReactDOM.render(templateOne, appRoot1);
ReactDOM.render(templateTwo, appRoot2);
console.log("app.js fixed");
