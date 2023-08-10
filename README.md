# Single-Resource-Project-Steam-Store

Collaborators: Akira Brown and Naomi Pate

Trello Board: [Single Resource Project](https://trello.com/invite/b/mr31x05m/ATTI71bb9782a388b4c7ec45f6aa95c615c5DB5E661D/single-resource-project)
Back end Repo: [Single Resource Project Back end Repo](https://github.com/naomipate/Project-Single-Resource-Steam-Store/tree/main/Steam-Store-back-end)
Back end Render Deploy: [Backend Deploy VGSales](https://project-single-resource-steam-store.onrender.com)
Front end Render Deploy: [Single Resource Project VGSales](https://singleresourcevgsales.netlify.app/)

Originally this was going to be a copy of the steam store but the data is too complicated to work with at this time so we changed to videogame sales instead.
There is a barchart showing an overall view of the sales data on each page. Pagination was used to make the data a little easier to get through and keep the website fast. There is also a search bar where you can type the name or partial name of a videogame and get back all results that match that criteria. Creating a game can be done through the 'New Game' button in the upper right corner. If you want to view more details on a game simply click anywhere in the area of the game and it will take you to an individual game page where you can go back to the previous page, edit the game sale data, and even delete the game sale data from the website.

## Technologies Used 

### (Frontend)
-React
-Bootstrap
-Chartjs

### Backend
Express
-Postgres
-Cors
-Morgan

## Commands (Backend)
1. npm run db:init
2. npm run db:seed
3. npm run dev
