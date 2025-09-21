## Project
The BlankfactorAutomation project was created to demonstrate the automation testing skills of Hernan Jose Malave Montero, who is interested in becoming a part of Blankfactor company.

## Characteristics
This project has the following key features:<br>
Programming Language: javaScript<br>
Automation Framework: Playwright<br>
Design Pattern: POM (Page Object Model)<br>
Note: This project was designed to be executed on Windows OS and macOS, with Chrome as the default browser.

## Project Structure


blankfactorautomation/<br>
│── features/             
│── step_definitions/     
│── pages/                 
│── reports/              
│── cucumber.js             
│── package.json<br>
│── .gitignore

Manual_Test/<br>

**File List:**  
- **retirement_and_wealth_section.feature:** Contains the BDD (Behavior-Driven Development) features for the project.<br>
- **contact.page.js, home.page.js, retirement_and_wealth.page.js:** These files represent the page objects where methods and elements are declared, following the POM architecture.<br>
- **hooks.js:** Defines the global hooks used in the test execution lifecycle.
- **retirement_and_wealth.steps.js:** Contains the step definitions that map the Gherkin steps from
  retirement_and_wealth_section.feature to executable Playwright code.
- **cucumber.js:** Configuration file for Cucumber. Defines the default options used during test execution, such as the location of feature files,
  step definitions, and any formatters or reporters to be used.
- **eslint.config.mjs / .eslintrc.json:** ESLint configuration files. These files define the static code analysis rules to ensure code quality,
  consistency, and adherence to best practices across the project.
- **generate-report.js:** Script to generate the HTML test report. It processes the JSON output from Cucumber and produces a user-friendly
  report with execution results, metadata, and evidence of failures.
- **.gitignore:** Specifies which files and directories should be ignored by Git to avoid unnecessary clutter in the repository.<br>


## execution
**steps to run project :**  
1. git clone https://github.com/hmalave17/BlankfactorAutomation.git<br>
2. cd BlankfactorAutomation/BlankfactorAutomation<br>
3. open gitbash console
4. run npm install
5. npx playwright install
6. Run the tests:
- **Git Bash:** BROWSER=chrome HEADLESS=false npx cucumber-js
- **PowerShell (Windows):** $env:BROWSER="chrome"; $env:HEADLESS="false"; npx cucumber-js


**Browser options**<br>
- **chrome** runs with Chromium/Chrome (default)<br>
- **edge** runs with Chromium/Edge<br>
- **firefox** runs with Firefox<br>
- **webkit** runs with WebKit (Safari engine)<br>

**Note:**
- **HEADLESS=false** browser visible<br>
- **HEADLESS=true** browser no visible





