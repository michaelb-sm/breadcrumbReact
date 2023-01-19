# Breadcrumbing in React
This project contains a simple local server with a react app to display a breadcrumb trail for a given directory structure.

## Installation
This app is only designed to be hosted locally. To install the proper packages, you must have node installed (v16.17.0 or greater).

After cloning the repo, you must install the node modules for both the `client` and `server`. Navigate into each directory separately and run
```
npm install
```

## Running the App
Both the server and client are meant to be hosted locally. To start the server, navigate into the `server` folder and run:
```
npm start
```
The backend server runs on port 8000.

Then, to run the client, navigate to the `client` folder and again, run:
```
npm start
```
A window should open in your browser of choice and display the app.

## Changing the Directory Structure
If you wish to test the app with different directory structures, you may set your own in `breadcrumbReact/server.directory.js`. Set the `root` variable to your new structure and restart the server. 