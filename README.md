<h1 align="center" style="color: #ea2328">
  Couchbase Technical Test 💾
</h1>

<p align="center" style="font-size: 1.2rem;">
  Write a function in JavaScript which will take a phone number of arbitrary length and will print out all possible mnemonics.
</p>
<p align="center" style="font-size: 1.2rem;">
  Create a single page web application to demo the function using a JavaScript framework.
</p>

<hr />

This application was produced to tackle the 5 main goals outlined in the specification:

- Write a function in JavaScript which will take a phone number of arbitrary length and will print out all possible mnemonics.
- Provide a keypad that users can press to enter a number.
- The number entered should have a maximum length of 6 digits.
- Display for the number entered and the function output i.e. the possible mnemonics.
- Reset button so users can enter a new number into the keypad.

The code provided attempts to fulfill all tasks as well as adding a few extra features in an effort to provide a better user experience. A collection of planned features that didn't make it into the current build can likely be found on the [**issues tab of the github repo**][is].

[is]: https://github.com/Shubwub/couchbase-ui/issues
[at]: https://atomicdesign.bradfrost.com/chapter-2/
[r]: https://redux.js.org/
[c]: https://www.cypress.io/
[aa]: https://www.w3.org/WAI/WCAG2AAA-Conformance.html
[m]: https://mochajs.org/

- ## 📋 Requirements

  The requirements for running this application locally are the same as any standard `create-react-app` react application, of course with additional dependancies provided by npm. The currently supported browsers are Firefox and Chrome.

- ## 🎉 Installation and setup

  Once this repository is cloned, dependencies must be met through:

  ```bash
    npm i
  ```

  A local development server can then be spun up through

  ```bash
    npm start
  ```

- ## 📖 Documentation

  - ### 🚧 Structure

    Functional components should be used where possible due to their reduced compile size and the phasing out of class-components by the react development team.
    The project also tries to follow an [**atomic**][at] component structure. The basic idea being to split components into organisms, molecules and atoms. organisms being made of many molecules, and molecules being made of many atoms.

  - ### ⚙️ Redux

    App-wide state management is done through [**Redux**][r]. The structure of which is as follows:

    ```JSON
      "keypad": {
        "number": "number",
        "mnemonics": "string[]"
      },
      "status": {
        "warning": "boolean",
      }
    ```

    Data stored under `keypad` should refer to anything related to the actual on-screen data of the application. The `number` being the number entered in the keypad, and `mnemonics` being the listt of mnemonics returned from submitting the number.

    The `status` object is for the general status of the application. At the moment only populated with a `warning` boolean for wether the 6-digit warning needs to be shown, but in the future would include things like error and loading states.

  - ### 🏷️ !Typescript

    This project **does not** uses TypeScript. This was done in an effort to better align the codebase with what is primarily used on the UI at couchbase. Preferrably Angular would be used as the javascript framework - however due to limited time, react was chosen for its familiarity.

  - ### ♿ Accessibility

    Accessibility for this project should be kept to at least a [**AA standard**][aa] (In compliance with the W3C Web Content Accessibility Guidelines) as best as posssible. aXe-react has been installed as a means of complying with these standards. Current warning can be viewed from the console when the application is being ran in development mode.

  - ### 🐶 Husky
    Husky pre-commit hooks are used to ensure breaking or poor-quality code is not commited to the git repo. The pre-commit hook script can be found in `.husky/_/pre-commit`. This script will run the cypress tests as well as linting all js files.

- ## 🧪 Testing

  This project uses [**Cypress**][c] and [**mocha**][m] for it's testing. Cypress was chosen as it's what's most familiar and better reflects a user journey through an application. On the other hand, mocha was implemented as a way to explicitely run unit tests for the mnemonic generating function.

  Tests can be found in `/cypress/integration`. Elements should be selected using data-name attributes. This is the apporach recommended by Cypress as it's least intrusive to the DOM.

  To run the test suite enter:

  ```bash
    npm test
  ```
