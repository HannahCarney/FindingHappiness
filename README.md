Finding Happiness
=========

A simple happy or sad sentence generator

* A text is happy if it includes at least 50% more happy words than sad words.
* It’s sad if it contains at least 50% more sad words than happy words.
* Otherwise the classification is unknown.

Heroku (live)
------

[Finding Happiness](http://finding-happiness-generator.herokuapp.com/)

Technologies used
-------

* Javascript
* JQuery
* Node
* Html
* CSS
* Mocha/Chai/Selenium
* JSHint
* Heroku

Requirements
---------

- [x] Back-end service that classifies text as happy, sad  or unknown
- [x] Happy words program looks for: delight, delighted, delightful, happy, glad, joy, joyful, merry, pleasant
- [x] Sad words program looks for: disappointed, miserable, sad, sorrow, unhappy
- [x] Even if any of the words are repeated, count each mention separately
- [x] Include a simple web page for users to enter text and run the service
- [x] Tests

Design Choices
-------

I used Ajax to make GET and POST requests to the server when a user enters their sentence. Ajax allows exchanges of small amounts of data to simulate a mock database. It is possible to then update parts of the web page without reloading the whole page. Single page apps, in my opinion, are becoming very hip and also increase user experience. The interface, in general, is very simple and so it is very clear what the application does. I decided to learn how to use a JQuery scroll function to create a more exciting design. I especially enjoyed finding fonts and colors that work together and manipulating them through CSS. I decided to use chai/mocha/selenium for my test stack, because I feel that the combination allows for maximum test coverage. I used the Nyan mocha cat to make testing a little more fun, as well as JSHint to make sure my formatting and syntax is correct. Lint runs after the tests are run, and only logs messages if it finds any errors.

Install dependencies
----

```sh
npm install
```

Run locally
----

```sh
npm start
```

Visit http://localhost:3000/

Run tests
----

Start Selenium Webdriver

```sh
cd happysentencesjs
$phantomjs --webdriver=4444  
```
Command + T to open a new tab

```sh
npm start
```
Command + T to open a new tab

```sh
make test
```

Me
----
I am [Hannah] from the December 2014 cohort of Makers Academy, London!
[Hannah]:https://github.com/HannahCarney