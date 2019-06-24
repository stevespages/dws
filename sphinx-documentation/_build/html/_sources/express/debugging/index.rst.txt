:doc:`Home </index>` | :doc:`Express <../express>`


Debugging
=========

console.log()
-------------

It can be very helpful to display data from your programs in the console. We may not know what sort of data structure a query result is. One way to find out is to include a ``console.log()`` statement in our code. This will be logged to the console when we refresh the browser. Here we use ``console.log(row)`` to clarify the result from a database query.

We can make a database query using the `sqlite3` module's .get() method. We have named our database object `db` so the query is made with the statement ``db.get(sql, (err, row) => { console.log(row) });``. The `sql` variable contains the actual `SQL` code we want to run.

Th `db.get()` method takes a callback function. In this case the function just has one statement which sends the `row` argument to the console where we can inspect it. The `db.get` method invokes the callback after it has queried the database. It supplies two arguments. These are err, and row. We could call them anything but the method intends the first argument to represent any error encountered while attempting to make the database query. If there was not an error this argument will be be assigned the `null` value. The second argument is for the result of a successful database query. We have called it `row`. 

.. code::

   const express = require('express')
   const app = express()
   const sqlite3 = require('sqlite3').verbose()
   const port =3000
   
   let db = new sqlite3.Database('music.db')
   
   app.get('/example', function (req, res, next) {
     let sql = `SELECT * FROM musicians`
     db.get(sql, (err, row) => {
       console.log(row)
     })
       let output = 'His name is '
       output += row.firsName + row.lastName + '!'
       res.send(output)
   })
   
   app.listen(port, () => console.log(`app listening on port ${port}`))

When this is run the output to the browser is the same but in the console we see:

.. code::

   Example app listening on port 3000
   { id: 1, firstName: 'Brian', lastName: 'Eno' }

Now we can see `row` in the console it becomes obvious that it is an object. Also we can see the structure of the object. This will make it much easier to use the object correctly as we develop the code to use the data object in our `HANDLER` function.

