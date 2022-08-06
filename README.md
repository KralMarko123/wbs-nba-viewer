# Web Based Systems NBA Player Viewer

> A Simple `React.js` application made using the [SparqlTransformer](https://github.com/D2KLab/sparql-transformer) package. Done for course purposes, main objective was to use a library in-code to traverse through an RDF database in order to create a web app.

## Author: Marko Markovikj

You can find a link to the live app [here.](https://kralmarko123.github.io/wbs-nba-viewer/)

---

### Structure:

This section covers the main aspects of the application. This includes:

- Which services are being used to fetch data to populate the frontend and which components are responsible for the same
- A short summary of the styling approach
- What type of testing is included and what do the tests cover

#### Services & Components:

The most notable part of the entire app is the `SparqlFactory.jsx` file. It has two calls which fetch data from the [dbpedia](src\constants\constants.jsx) endpoint using the package mentioned in the beginning. The first one uses the **_GET_ALL_PLAYERS_** query defined in the `queries.jsx` file. It is a JSON object with properties that are transformed into a SPARQL query accordingly.

This is possible due to the **SparqlTransformer** package. You can find out more about how it works [here.](https://www.youtube.com/watch?v=lafGyk9VBlI&t=2499s)

The `Home.jsx` page is responsible for rendering and handling the data received. It waits for the request to be completed and then fills out the page using the `PlayerCard.jsx` component. It feeds the properties from each of the objects within the resulting array from the request into the card component.

Furthermore, a bit of logic is added here to set a session storage item with the results so that when the user reloads the page or comes back to it whilst in the same tab he/she does not have to wait for the data to be refetched. Loader animations and some placeholder images are used here as well whilst the data is being fetched to give the user an overall better experience.

The page also contains some filtering inputs so as to enable users find a player they might be looking for. If there are such players matching their criteria, the results are filtered accordingly. The logic behind these elements and the way they maintain state can be found in the `Header.jsx` and `CustomSelect.jsx` files.

The `Details.jsx` page is responsible for rendering and handling the data received by the **_GET_PLAYER_** query. This page is rendered when a user clicks on a certain player's card. The page is given an _id_ which is passed into the query. Then the page waits for the additional details for that _id_ to be received and renders it accordingly.

Additionally, it also sets a session storage item whenever a certain player's details page is visited for the first time. This decreases wait time when going from one details page to another.

Each page is unique due to the _id_ passed and the React's `BrowserRouter`. If for some reason a player's id is invalid or the user enters a nonexistent route the `NotFound.jsx` page is rendered.

#### Styling:

Not much to cover here. The styling consists of plain CSS with some variables for the colors used to have some sort of consistency. Only thing of note here is the fact that a healthy amount of time was dedicated into making the app responsive to different screens for a better user experience. All the styles for the different pages/components are located in the [styles directory](src\styles).

#### Testing:

Since the app is small in size and the logic behind it is not as complex, a decision was made to only cover some e2e scenarios. The framework used for this is a cool and pretty recent tool that the author studied awhile back, **_Cypress_**. There are a few tests that are pretty self-explanatory. In general, they cover the default state of the app, the results shown when applying filters and if the content from the home page matches the one displayed on the details page for different players. You can check them out [here.](cypress\e2e\tests.js)

---

## Stack:

| React | CSS | Cypress |
| ----- | --- | ------- |
