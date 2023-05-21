import woman1 from "./images/woman-blue-1-400.png";
import woman2 from "./images/woman-blue-2-400.png";
import woman3 from "./images/woman-blue-2-300.png";
import github from "./images/github-142-svgrepo-com.svg";

function About() {
    return (
        <section className="about">
            <div className="background"></div>
            <div className="about-content">
                <picture>
                    <source media="(max-width: 1000px)" srcSet={woman3} />
                    <source media="(max-width: 1155px)" srcSet={woman2} />
                    <img className="profile-picture" src={woman1} alt="profile" />
                    <h1>Christina172</h1>
                </picture>
                <div className="about-text">
                    <h2>About me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin dignissim nisi, at consectetur metus efficitur nec. Praesent mattis hendrerit velit, in elementum orci consequat sed. Ut placerat in mauris id dapibus. Donec velit magna, congue at tincidunt id, vehicula quis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin consequat quam tortor, id ornare lacus luctus eget. Donec vitae eros vel nisi aliquet consequat. Vestibulum et dignissim purus. Proin a eros dignissim, sagittis orci vel, laoreet felis. Aliquam et auctor mauris. Phasellus accumsan, nisl eget ultrices porta, mi turpis lobortis risus, ac porttitor libero tellus ac est.</p>
                    <div className="about-links">
                        <a href="https://github.com/christina172"><img className="github" src={github} alt="github profile" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

// Изображение <a href="https://pixabay.com/ru/users/roverhate-1759589/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1353825">Ronny Overhate</a> с сайта <a href="https://pixabay.com/ru//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1353825">Pixabay</a>