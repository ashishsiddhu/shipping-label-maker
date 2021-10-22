### [Live Demo URL]
https://ashishsiddhu.github.io/shipping-label-maker

## SHIPPING LABEL MAKER EXERCISE (REACT)

This application collects shipping information from users and creates shipping labels. Using multiple steps and confirmation. And this is Frontend focused only. 

## Notes
Wizard is main component in this application whose primary responsibility is to receive a series of steps and sequencing through them. Users can move forward or backwards between each steps. On reviewConfirm page, when user click on "Confirm" button then we can can share data to backend using "POST" API.
This app is divided into five steps:

1. Get Sender’s Address
2. Get Receiver’s Address
3. Get Package Weight
4. Get Shipping option (Ground or Priority)
5. Review and Confirm

## Application Features

- React hooks (functional components)
- From Validation
- Progress bar
- Responsive web app
- Submit data using POST API
- Print shipping label


## Frameworks Used

- React 17
- Bootstrap 5
- Enzyme: Unit test

## Instructions On How to Run Application

1. ``Extract zip file``
2. ``cd shipping-label-maker``
3. ``npm install``
4. ``npm start``

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the build folder.

### `npm test`

Used Enzyme to write basic tests cases for App and wizard components.
