# Plant Rx 

PlantRx is a very simple React Redux app where you can diagnose what is wrong with your houseplants. Simply select the symptom from the drop down and the diagnosis will appear on the left. Then click the `fetch solutions` button to get suggestions on how to cure your plant. You can then add another symptom to the list and repeat the process creating a list of diagnosis and their respective solutions, or you can click reset and it will clear the page. 

Just make sure to fetch the solution after each symptom you submit.

## Try It Out

PlantRx is deployed on heroku at [PlantRx](https://plant-rx.herokuapp.com/) but if you'd like to run it in development mode head over to these [instructions](#app-configuration)

## Follow Up

I built this application as a way to introduce myself to Redux and using a state-managment tool with React. As such, it's pretty simple by design, but some ideas I might like to implement would be:

- [ ] More symptom/solution options through adding an API that links to a plant knowledge base (right now the symptoms and solutions are all based on my personal knowledge and only cover the basic houseplant issues)

- [ ] Option to select symptoms by pictures as well as words

- [ ] Option to add the plant type to get more effective solutions

## App Configuration

1. CLICK `clone or download` and COPY the link

2. OPEN terminal and run `git clone <link> + (optional <custom-filename-of-your-choosing>)`

3. THEN `cd` into the folder containing the source code 

4. Run `npm install` in the terminal to load all necesary dependencies

5. Once it finishes building the `/node_modules` directory you can go ahead and run

`npm start` (the application runs on localhost:3000 but react start script will prompt you if you need to choose an alternate port)


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
