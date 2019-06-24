:doc:`Home </index>` | :doc:`Express <../index>`

Routing
=======

Routes and the handlers associated with them can be defined in `app.js`. This could lead to a very large `app.js` file. We can use the `express.Router` class to create a `router` instance in a module. The `router` object can include middleware and many routes. It can be thought of as a "mini-app". Typically the `router` object is created as a module. That means the code for it is in seperate file from the `main` file which is `app.js` in our case. A Code Example is given here of a `router` with one route in it and no middleware.

Code Example: :doc:`simple-route <./code-examples/simple-route>`
