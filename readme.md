# Playwright (TS binding) + Cucumber (BDD)
For Polestar Project created Test Cases using Cucumber approach(BDD) with POM Design Pattern in TypeScript

## Features
- Cucumber Approach
- Page object model
- Parallel Execution
- Reading data from json / enum files
- Getting Environment deatils from .env file
- Sample report


## Project structure
.github -> yml file to execute the tests in GitHub Actions
src -> Contains all the features & Typescript code
test-results -> Contains all the reports related file

## Reports
- Default Cucumber report
- Logs
- Screenshots of failure

Get Started
Setup:
- Clone or download the project
- Extract and open in the VS-Code
- npm i to install the dependencies
- npx playwright install to install the browsers
- npm run test to execute the tests
To run a particular test change
  
  ```
  paths : [
            "src/test/feature/"
         ]             
Use tags to run a specific or collection of specs

```
npm run test 
```
***Folder structure***

src\pages ->   All the page (UI screen)
                                        
src\test\features-> write your features here 

src\test\steps ->  Your step definitions goes here 

src\hooks\hooks.ts -> Browser setup and teardown logic 

src\hooks\pageFixture.ts -> Simple way to share the page objects to steps 

src\helper\env -> Multiple environments are handled 

src\helper\types -> To get environment code suggestions

cucumber-report.html  -> To generate the report

config/cucumber.js -> One file to do all the magic

package.json -> Contains all the dependencies
