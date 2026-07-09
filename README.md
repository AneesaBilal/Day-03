# Day 03
README

Assignment: Middleware, Error Handling & CORS

Overview

This assignment demonstrates the implementation of middleware, custom middleware, error handling, and CORS in an Express.js application.

Screenshots

Screenshot 1 – CORS

This screenshot shows the implementation of Cross-Origin Resource Sharing (CORS) in the Express application. CORS allows the server to accept requests from different origins, enabling secure communication between the frontend and backend.

Screenshot 2 – Error Handling

This screenshot demonstrates the error handling mechanism implemented in the application. It includes handling of invalid routes and server errors, ensuring that users receive meaningful error responses instead of the application crashing.

Screenshot 3 – Middleware Types

This screenshot illustrates the different types of middleware available in Express.js:

Application Middleware:** Executes for all requests or specific routes within the application.
Route Middleware:** Executes only for specific routes.
Built-in Middleware:** Middleware provided by Express, such as `express.json()` and `express.static()`.

Screenshot 4 – Custom Middleware

This screenshot shows a custom middleware created by the developer. The middleware performs additional processing before passing the request to the next middleware or route handler using the `next()` function.

Screenshot 5 – Project Execution

This screenshot shows the successful execution of the Express application, confirming that the middleware, CORS configuration, and error handling are working as expected.

Conclusion

The assignment successfully demonstrates the use of Express.js middleware, including application, route, built-in, and custom middleware, along with CORS configuration and centralized error handling. These concepts help build secure, organized, and maintainable backend applications.
