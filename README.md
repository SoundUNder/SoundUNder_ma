# SoundUNder FrontEnd mobile component

Front End mobile component of the SoundUNder system, written in ReactNative, using expo to bundle in dev environment.

## Requirements

To install this project, a 16+ version of Node is required (Just in case, this project was created with Node 18).\

Also, if you will develop using a phone, install the ExpoGo App

## Install

### `npm install`

Installs the required dependencies to be able to run the project.

## Run
### `npm start`

Once the required dependencies are installed, runs the app in the development mode.\

If using phone: expo app and scan the QR that the command generates and **make sure to be connected to the same network both in your phone and in your computer**.

## Connect properly with gateway

To be able to properly connect with api gateway when developing on phone, go to:

### `app/_layout.jsx`

and modify the following line:
### `uri: 'http://{yourPCsIPGoesHere}:4000/graphql'`


