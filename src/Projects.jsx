import { useState } from 'react';
import styles from './Projects.module.css';


function Projects(props) {
    // State: tracks whether this card has been liked
    const [liked, setLiked] = useState(false);

    return(
        <div className={styles.project}>
            {/* Props: image/alt/title/description received from parent (App.jsx) */}
            <img className={styles.image} src={props.image} alt={props.alt}></img>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            {/* Event handling: click toggles liked state (arrow function) */}
            <button className={styles.likeButton} onClick={() => setLiked(!liked)}>
                {liked ? '♥ Liked' : '♡ Like'}
            </button>
        </div>
    );
}

export default Projects;