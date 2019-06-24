:doc:`Home </index>` | :doc:`Express </express/index>` | \
:doc:`Routing </express/routing/index>`

simple-route_
=============

.. _simple-route: ../../../code-examples/express/routing/simple-route

Minimal use of express.Router
-----------------------------

This shows a minimal implementation of a route using the express.Router class. In this case the router module is /routes/express/routing/simple-route.js

.. literalinclude:: ../../../../routes/express/routing/simple-route.js
    :linenos:
    :language: javascript

Inside the app.js file we need to require the module using: ``const expressRoutingSimpleRouteRouter = require('./routes/express/routing/simple-route');`` and mount the module on a path using ``app.use('/code-examples/express/routing/simple-route', expressRoutingSimpleRouteRouter');``

Notice that the handler function for this route does not render a file from the views directory. It uses res.send() to send output directly.
