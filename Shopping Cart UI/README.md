# redux-saga-cart
A fully-functional shopping cart built with Redux Saga using Yield

## About
redux-saga-cart is a fully functional, non-trivial demo application meant to help intermediate and advanced users understand and use Redux Saga.
This project is the finished product that is built in the Pluralsight course redux-saga. (Link coming soon)
While running and studying this project is useful to anyone, it is strongly recommended that you build it while watching the Pluralsight course.

## Installation

1. Clone and install the server application

2. Clone and install the application
`git@github.com:danielstern/redux-saga-cart.git && cd redux-saga-cart && npm install`

3. Install the babel CLI
`npm install -g babel babel-cli`

## Usage
1. Start the application with `npm start`
2. Open the url `http://localhost:3000`

## Troubleshooting
### The application hangs on load
Make sure the demo server is running on the correct port (`8081`). Make sure the permissions on your computer allow communication between the ports `3000` and `8081`. 


### I don't see anything / I see the wrong thing when navigating to `http://localhost:8080`
Make sure that the port `3000` is available before running `npm start`

### I get an error when running `npm start`
Make sure you're running the latest version of `node`. Make sure the following dependencies are installed globally as not all OS's respect global dependencies:
npm install babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react babel-regenerator-runtime webpack webpack-dev-middleware webpack-hot-middleware webpack-dev-server
