# React-App-Practice

## A Solution for an intro to React lesson based on the following mock-up.

![React](https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png)

# [Create React App](https://facebook.github.io/create-react-app)

![](my-blog-1.png)

## Start Here

Inside this repo, run the following command to create a new react app:

```sh
npx create-react-app my-blog
```

> `npx` is a tool for running JavaScript npm modules that are intended for use as commands.

Use `npm start` to start a server that will serve your new React application:

```bash
cd my-blog
npm start
```

You can view the app at `http://localhost:3000`

> Note: If you ever need to stop the server, you can hit `ctrl-c` in the terminal window.

Your job will be to implement the following:

1. A Header component
2. A Post component
3. A Footer component

Your App component will have three children: Header, Post, and the Footer component.
The App component will call the Post component with props: title and description.
If you finish early have your App component render multiple Posts.

**Required**

- Your app should resemble the mockup as closely as possible.

**Tips:**

- Use http://generator.lorem-ipsum.info/_latin to generate bogus text, useful for mockups.
- Use Flexbox

**Bonus**

- Create a `Comment` component that the `Post` component calls
  - Pass in a "comment" prop into the `Post` component that gets passed down into the `Comment` component
  - Use the lorem-ipsum generator to create static text for the comment prop

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
