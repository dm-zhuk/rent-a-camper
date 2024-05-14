Test task
Your task is to create an application for a company that provides camper van rental services in Ukraine.
The application consists of 3 pages:
1. Home page with a general description of services provided by the company. Stylization and design at your discretion.
2. A page containing a catalog of campers of various configurations, which the user can filter by location, equipment and type
3. A page with ads that have been added to favorites by the user
The appearance of the application should consist of navigation (design at your discretion) and view area.

Technical task
1. In accordance with the layout, implement a card announcing the rental of a camper.
2. 4 ads should be rendered on the first page of the catalog, and the rest of them - after clicking on the Load more button.
3. If you click on the button in the form of a "heart" on the ad card, it should be added to the list of favorites, and the color of the button should change.
4. When updating the page, the final result of the user's actions should be recorded. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.
5. In case of repeated clicking on the button in the form of a "heart", the ad should be removed from the list of favorites, and the color of the button should change to its original state.
6. If you click on the Show more button, a modal window should open with detailed information about the camper.
7. The modal window should be closed by clicking on the button in the form of a "cross", by clicking on the backdrop and pressing the Esc key.
8. The modal window contains information about the features of the camper and reviews about it. Drawing information should depend on the state of the active tab.
9. The modal window also contains a form for booking a camper, consisting of the fields name, email, booking date and comment. The fields name, email, and booking date are required to be filled in and must be checked for the validity of the entered values.
10. The rental price must be written in one value (for example, 8000). In the UI - displayed with a comma (8000.00).

To work with the list of ads, create your own custom backend for development using the UI service https://mockapi.io/. Create an adverts resource. Use the resource constructor and describe the ad object as described below.

Advert
1. Create an advert in Mockapi with the following fields: _id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews (see screenshot below). You can take ads.json to populate the collection
2. You can choose the image of the camper yourself.
3. The database should contain at least 13 ads with different meanings (at your discretion). Implemented pagination, where one pagination page should contain 4 ads.
Create routing using React Router
The application must have the following routes:
* “/” - home page with a general description of services provided by the company
* "/catalog" - a page containing a catalog of campers of various configurations
* “/favorites” - a page with announcements (design at your discretion) that have been added to favorites by the user
If the user came from a route that does not exist, he must be redirected to the home page.
Add filtering
1. Text input, if the value of which is available, the user should be shown an ad with campers located in the corresponding location
2. Checkboxes with the appropriate equipment - show ads with campers containing the selected equipment
3. Radio buttons with types of campers - show ads with campers belonging to the corresponding type

Performance criteria
* The layout is fixed in rh, semantic and valid
* No errors in the browser console
* Redux required
* The Axios library is used for queries
* The work is done on native JS using a bundler (Vite, Parcel, etc.) or on React
* Interactivity works according to the specification
* The code is formatted and uncommented
* The repository should be described in README.md
* The project is deployed (for example, on github pages or netlify.com)

Delivery format:
* Two links: to the source files and the working page on GitHub Pages or netlify.com
* Attached repository file in zip format
