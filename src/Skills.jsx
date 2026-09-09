import styles from './Skills.module.css';

function Skills(props) {
    return(
        <div className={styles.skill}>
            {/* Props: image/alt received from parent (App.jsx) */}
            <img className={styles.icon} src={props.image} alt={props.alt}></img>
        </div>
    );
}

export default Skills;