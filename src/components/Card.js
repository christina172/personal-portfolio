import link from "./images/external-link-svgrepo-com.svg";
import github from "./images/github-142-svgrepo-com.svg";

function Card(props) {
    return (
        <div className="card">
            <img className="project-screenshot" src={props.project.screenshot} alt={`${props.project.name} project screenshot`} />
            <div className="project-info">
                <div className="project-header">
                    <h3>{props.project.name}</h3>
                    <div className="project-links">
                        <a href={props.project.linkToGitHub}><img className="github" src={github} alt={`${props.project.name} github page`} /></a>
                        <a href={props.project.livePreview}><img className="link-icon" src={link} alt={`${props.project.name} live preview`} /></a>
                    </div>
                </div>
                <p className="project-description">{props.project.description}</p>
            </div>
        </div>
    );
}

export default Card;