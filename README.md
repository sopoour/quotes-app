# quotes-app

Features:
* Multi-Page SPA (single-page-application) using React Router
* Pages: all quotes, add a new quote, detail page for each quote
* The list of quotes can be sorted asc and desc using query parameters
* each quote has a separate detail page (dynamically created) where you see the quote in a nicer formatting and can add a comment
* You can add a comment and see the list of comments within each quote
* All of the quotes and comments are stored in Firebase and fetched/posted via useHttp custom hook

Using all different components and methods provided by `react-router-dom`:
* Link, NavLink, Route, Redirect
* Nested Route and routes with unique ID for detail pages
* 404 page routing
* useHistory, useLocation, useParams & useRouteMatch to change and access URL's information

