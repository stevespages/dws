:doc:`Home </index>` | :doc:`Express <../index>`

Create an Express App
=====================

With `npm` and `node` installed on your computer you can create a minimal `express` app like this:

.. code::

   mkdir my-app
   cd my-app
   npm init -y
   npm install express

Use a text editor, such as `Vim`, to create a file called `app.js` in the root of the project (that means directly inside the my-app directory). Put the following contents in `app.js`:

.. code::

   const express = require('express');

   const app = express();
   
   app.get('/example', function(req, res) {
   
      res.send('Hello World!');

   });
   
   app.listen(3000);

Now run the app from your terminal with the command ``node app.js``. Open a browser window and navigate to `www.localhost:3000/example`. You should see 'Hello World!

app.Method(PATH, HANDLER)
-------------------------

In the app we created we use the `get` method of the `app` object. This means that if an http get request is made to the value for PATH (in this case /example) then the function supplied as the HANDLER argument will be called. In this case the function returns an http response with 'Hello World!' in the body to the browser. This is achieved with the res.send() method.

The function we use as a handler contains the arguments req and res which are abbreviations of `request` and `response`. These objects are created by express when handling an http request and preparing the response.

Use a variable in HANDLER
-------------------------

The HANDLER function is where the response to a request is built. It can make database queries or get data from APIs. It can transform the data using the javascript language. We used res.send() to send a response directly from the HANDLER to the browser. Very often res.render() is used. This passes data to an HTML template which then displays the data within the template and it is this that is sent as HTML in the http response.

As a very simple example of elaborating the HANDLER function we can introduce some javascript code with variables in it to our simple express app:

.. code::

   const express = require('express');

   const app = express();

   app.get('/example', function (req, res) {
     let firstName = 'Brian'
     let output = 'Hello '
     output += firstName
     res.send(output)
   });

   app.listen(3000);

Chaining with next()
--------------------

It may be inconvenient for all the code required to process an http request to be inside one HANDLER function. In the example below the pattern is app.METHOD(PATH, HANDLER_1, HANDLER_2, HANDLER_3, HANDLER_4) where each HANDLER is a seperate function. The term next refers to the next function in the chain. So the first function has next as one of its arguments and this refers to the argument coming after it. The argument is used as the last statement in each function ensuring that the next function is indeed called.

.. code::

   const express = require('express')
   const app = express()
   const port =3000
   
   app.get('/example',
     function (req, res, next) { ... next() },
     function (req, res, next) { ... next() },
     function (req, res, next) { ... next() },
     function (req, res, next) {
       res.send('Hello')
     }
   )
   
   app.listen(port, () => console.log(`app listening on port ${port}`))

In the code below we assign variables to the Request object in each of the middleware functions and display them to the browser in the final function in the chain. Note that the final function has been given ‘next‘ as one of its arguments even though it does not need it because it is the last argument.

So, we can now encapsulate different functionality into different middleware functions and still have the results from them available to send to the browser at the end of the middleware chain. An example of several database queries is shown below:

.. code::

   const express = require('express')
   const app = express()
   const port =3000
   
   app.get('/example',
     function (req, res, next) {
       let query1 = 'one '
       req.query1 = query1
       next()
     },
     function (req, res, next) {
       let query2 = 'two '
       req.query2 = query2
       next()
     },
     function (req, res, next) {
       let query3 = 'three'
       req.query3 = query3
       next()
     },
     function (req, res, next) {
       res.send('Hello ' + req.query1 + req.query2 + req.query3)
     }
   )
   
   app.listen(port, () => console.log(`app listening on port ${port}`))

We could have saved some typing by assigning the values directly to the Request object like this:

.. code::

   const express = require('express')
   const app = express()
   const port =3000
   
   app.get('/example',
     function (req, res, next) {
       req.query1 = 'one '
       next()
     },
     function (req, res, next) {
       req.query2 = 'two '
       next()
     },
     function (req, res, next) {
       req.query3 = 'three '
       next() },
     function (req, res, next) {
       res.send('Hello ' + req.query1 + req.query2 + req.query3)
     }
   )
   
   app.listen(port, () => console.log(`listening on port ${port}`))
