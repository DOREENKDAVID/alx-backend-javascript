# Modern javascript
# ES6 Basics


## Learning Objectives

What ES6 is
New features introduced in ES6
The difference between a constant and a variable
Block-scoped variables
Arrow functions and function parameters default to them
Rest and spread function parameters
String templating in ES6
Object creation and their properties in ES6
Iterators and for-of loops

Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
Add the files below to your project directory

package.json
Click here to show/hide file contents

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

babel.config.js
Click here to show/hide file contents

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

.eslintrc.js
Click here to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

Finally…
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.



## Tasks
0. Const or let?
Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let


1. Block Scope
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

2. Arrow functions
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

3. Parameter defaults
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

4. Rest parameter syntax for functions
Modify the following function to return the number of arguments passed to it using the rest parameter syntax

5. The wonders of spread syntax
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

6. Take advantage of template literals
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

7. Object property value shorthand syntax
Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.

8. No need to create empty objects before adding in properties
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

9. ES6 method properties
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

10. For...of Loops
Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

11. Iterator
Write a function named createEmployeesObject that will receive two arguments:

departmentName (String)
employees (Array of Strings)

12. Let's create a report object
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

13. Iterating through report objects
Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.

This function will return an iterator to go through every employee in every department.

14. Iterate through object
Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
