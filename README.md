# React Router Series

Will be broken up into a series of parts:

1. The absolute basics
  - Goes through how routing works in react-router at a high level (basically reiterate the docs here) and write your first route
2. Multiple Routes
  - Builds on the foundation of the first episode and creates a multiroute application with sections as colors
  - Should make a "wallpaper" component for this that you can just feed a color and it will be 100% height and width of parent
  - Possibly include NotFoundRoute and DefaultRoute (think I could fit these in possibly)
3. Nested Nested Routes
  - Build a more complex nested route framework inside of one of the routes in episode #2
4. More about RouteHandler
  - Chat about `willTransitionTo`, `willTransitionFrom` and their use cases
5. Authentication

# Topics

- Components
  - `NotFoundRoute`, gets called whenever no children of the parent Route match the url. You can place it anywhere you need a "context-aware" catch for misplaced urls
  - `DefaultRoute`, gets called when the parent route's path matches exactly (cousin of NotFoundRoute)
  - `Link`, think of links as anchor tags for your application. They know the names of all the routes in your application and they also know exactly how to get to them.
  - `Route`, default way of declaring routes
    - `name`, has to be unique, referred to be `Link`'s and transition methods
    - `path`, if left blank then the path is by default the name, if no name it will default to "/"
    - `handler`, the component to be rendered when the route is active
    - `children`, routes can be nested!
  - `RouteHandler`, renders the handler of the route at the level of the route heirarchy in which it is used
