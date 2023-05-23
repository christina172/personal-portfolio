import { useState } from "react";

import hiddenObjectGame from "./images/hidden-object-game.png";
import shoppingCart from "./images/shopping-cart.png";
import restaurantPage from "./images/reatsaurant-page.png";
import weatherApp from "./images/weather-app.png";
import memoryGame from "./images/memory-game.png";
import battleshipGame from "./images/battleship-game.png";

import Card from "./Card";

function Projects() {
    const [projects, setProjects] = useState([
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