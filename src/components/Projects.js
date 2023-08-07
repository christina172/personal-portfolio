import { useState } from "react";

import hiddenObjectGame from "./images/hidden-object-game.png";
import shoppingCart from "./images/shopping-cart.png";
import restaurantPage from "./images/reatsaurant-page.png";
import weatherApp from "./images/weather-app.png";
import memoryGame from "./images/memory-game.png";
import battleshipGame from "./images/battleship-game.png";
import calculator from "./images/calculator.png";
import inventoryApplication from "./images/inventory-application.png";
import membersOnly from "./images/members-only.png";

import Card from "./Card";

function Projects() {
    const [projects, setProjects] = useState([
        {
            name: "Members Only Message App",
            description: "This is a project for practicing creating and authenticating users and giving them different permissions. The app is created with the help of Express Application Generator. It uses a MongoDB database and ejs view engine. The authentication is done using the express-session, passport.js (local strategy) and express-flash middleware. Users' passwords are hashed with bcryptjs. The app has responsive design. Hosted on render.",
            screenshot: membersOnly,
            linkToGitHub: "https://github.com/christina172/members-only",
            livePreview: "https://members-only-75bu.onrender.com/members-only",
        },
        {
            name: "Inventory Application",
            description: "This is my first serious backend project. The app is created with the help of Express Application Generator. It uses a MongoDB database. The app includes forms to add, update and delete documents and uses PUG view engine to create views for pages displaying category and item lists, details, forms and the home page. The app has responsive design. This is my first project using Bootstrap. Hosted on render.",
            screenshot: inventoryApplication,
            linkToGitHub: "https://github.com/christina172/inventory-application",
            livePreview: "https://inventory-application-kp94.onrender.com",
        },
        {
            name: "Shopping Cart",
            description: "The website has two pages: Home and Shop. On the Shop page customers can choose how many items they want to buy and add them to cart. The quantity of the products in the cart and the total sum are displayed on a sticky bar. This Project uses React Router and includes React Tests.",
            screenshot: shoppingCart,
            linkToGitHub: "https://github.com/christina172/shopping-cart",
            livePreview: "https://christina172.github.io/shopping-cart",
        },
        {
            name: "Memory Game",
            description: "This is a React project to use functional components and hooks. The memory game has 12 cards, that change their order every time you click. Your task is to click each card only once.",
            screenshot: memoryGame,
            linkToGitHub: "https://github.com/christina172/memory-game",
            livePreview: "https://christina172.github.io/memory-game/",
        },
        {
            name: "Weather App",
            description: "This Weather App shows current weather in a city. The data is fetched from OpenWeatherApp. This is a project to learn asynchronous JavaScript and APIs. The color of the search result heading depends on the current temperature in the requested city. There is a button to toggle displaying the data in Fahrenheit or Celsius. The app has responsive design.",
            screenshot: weatherApp,
            linkToGitHub: "https://github.com/christina172/weather-app",
            livePreview: "https://christina172.github.io/weather-app/",
        },
        {
            name: "Hidden Object Game",
            description: "The player needs to find 14 hidden objects by clicking on them and choosing their names from the dropdown menu. Found objects have a green border around them. When the player has found all items, he can submit his result. This project uses Firebase to store the best scores in Cloud Firestore.",
            screenshot: hiddenObjectGame,
            linkToGitHub: "https://github.com/christina172/hidden-object-game",
            livePreview: "https://christina172.github.io/hidden-object-game",
        },
        {
            name: "Battleship Game",
            description: "This is a battleship game to play against the computer (not smart - attacks randomly). This project has tests (jest) for classes from the logic module (TDD practice).",
            screenshot: battleshipGame,
            linkToGitHub: "https://github.com/christina172/battleship",
            livePreview: "https://christina172.github.io/battleship/",
        },
        {
            name: "Restaurant Page",
            description: "My first project using webpack. This is a restaurant page that uses tabbed browsing to access the Home, Contact and Menu pages. Everything is build with JavaScript DOM Manipulation. Every tab's content is in a separate module.",
            screenshot: restaurantPage,
            linkToGitHub: "https://github.com/christina172/restaurant-page",
            livePreview: "https://christina172.github.io/restaurant-page/",
        },
        {
            name: "Calculator",
            description: "This is a simple fully functioning calculator. It is the final project in the Odin Project Foundations Course (JavaScript Basics Section).",
            screenshot: calculator,
            linkToGitHub: "https://github.com/christina172/calculator",
            livePreview: "https://christina172.github.io/calculator/",
        },
    ]);
    return (
        <section className="projects">
            <h2>My work</h2>
            <div className="projects-container">
                {projects.map((project) => {
                    return (
                        <Card key={project.name} project={project} />
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;