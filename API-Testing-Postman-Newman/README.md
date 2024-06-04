# API-testing-with-Postman-Newman
This project contains the development of step 3 of the technical test. API Testing on https://petstore.swagger.io/,

## System requirements
- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture. 

## Aplications to install
- install postman https://www.postman.com/downloads/ or use it from the navigator just installing postman agent

- install Newman https://www.npmjs.com/package/newman#using-newman-with-the-postman-api

```sh
# install newman :
npm install -g newman
```
- install Newman HTML-Reports https://www.postman.com/downloads/ or use it from the navigator just installing postman agent

```sh
# install Newman HTML Reporter:
npm install -g newman-reporter-htmlextra
```
## Considerations
- This project was imported from the https://petstore.swagger.io/ API
- feel free to run it from the postman console by importing the Swagger Petstore.postman_collection.json file found in this project folder or through the CLI using the newman tool


## To get started
#### Using Postman
- Enter the postman console and import the file .JSON that contains the collection. after that execute the colecction. more information visit https://learning.postman.com/docs/introduction/overview/

#### Using Newman

```sh
# Go to your command console and navigate to the project folder and execute :
newman run Swagger\ Petstore.postman_collection.json
```
- this will execute the tests and generate a detailed execution report from the command console

#### Generate a HTML reports from newman.

```sh
# To generate HTML report run:
newman run Swagger\ Petstore.postman_collection.json -r htmlextra
```
```sh
# To generate HTML report on a specific route run:
newman run Swagger\ Petstore.postman_collection.json -r htmlextra --reporter-htmlextra-export [specific route]
```
