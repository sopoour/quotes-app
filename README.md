# quotes-app

Features:
* Multi-Page SPA (single-page-application) using React Router
* Pages: all quotes, add a new quote, detail page for each quote
* The list of quotes can be sorted asc and desc using query parameters
* each quote has a separate detail page (dynamically created) where you see the quote in a nicer formatting and can add a comment
* You can add a comment and see the list of comments within each quote
* All of the quotes and comments are stored in Firebase and fetched/posted via useHttp custom hook

Using all different components and methods provided by `react-router-dom` in v5:
* Link, NavLink, Route, Redirect, Prompt
* Nested Route and routes with unique ID for detail pages
* 404 page routing
* useHistory, useLocation, useParams & useRouteMatch to change and access URL's information

The branch `reaact-router-v6-update` shows the project in v6 with following changes:
* Different use of Route & using Navigate instead of Redirect component
* Replacing Switch with Routes
* Making necessary changes to nested Route (wrapping it in Route and using the `/*` annotation)
* Replacing useHistory with useNavigate and use it respectively differently
* No need of useRouteMatch anymore since the paths of nested Route and Link are now relative to its parent
* Removed the usage of Prompt since it is no longer supported

