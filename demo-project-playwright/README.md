# dualboot-automation-with-playwright
TThis project contains the development of step 2 of the technical test. Automation project for https://www.demoblaze.com/index.html

## System requirements
- Node.js 18+. in this project -> v21.7.1
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.
- (IDE) Visual Studio Code 
- Extensión 'Playwright Test for VSCode' for Visual Studio Code (Opcional)

## Considerations
- #### The section “Modification of the user's personal data” was impossible to perform because the platform does not have the aforementioned module.
- I automated items that were not included in the items to be developed with the intention of increasing the coverage of the tests.
- The design pattern used was POM (page object model)
- This project will run with chromium, firefox and webkit engines, if you want to modify this, you can do it in the project's [playwright.config.ts file in the array - project[].
- For more information and consfigurations visit https://playwright.dev/docs/intro

## To get started
#### Clone this project, install dependencies and install playwright.
```sh
# Type git clone, and then paste the repo's URL:
git clone [url-repo]
```

```sh
# To install project dependencies run:
npm install
```

```sh
# To install playwright run:
npx playwright install
```

#### Execute all the test or Step by Step.

```sh
# To execute all the tests run:
npx playwright test -g '@full'
```
```sh
# To Verify creation of new user run:
npx playwright test -g '@verifySignup'
```
```sh
# To Verify login run:
npx playwright test -g '@verifyLogin'
```

```sh
# To Verify purchase a product run:
npx playwright test -g '@purchaseProduct'
```

```sh
# To verify categories run:
npx playwright test -g '@verifyCategories'
```

```sh
# To verify Products run:
npx playwright test -g '@verifyProducts'
```


```sh
# To verify log in with wrong credentials run:
npx playwright test -g '@verifyLoginWrong'
```

#### Generate a HTML reports.

```sh
# To open HTML report run:
npx playwright show-report
```