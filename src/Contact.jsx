import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    // State: controlled form fields + whether the form was submitted
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    // Event handling: keeps form state in sync on every keystroke (arrow function)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Event handling: form submit (arrow function)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    if (sent) {
        return (
            <div className={styles.contact}>
                <h1 className={styles.title}>Contact Me</h1>
                <p className={styles.confirmation}>Thanks {form.name}, I'll get back to you!</p>
            </div>
        );
    }

    return(
        <div className={styles.contact}>
            <h1 className={styles.title}>Contact Me</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                <input className={styles.input} name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                <textarea className={styles.input} name="message" value={form.message} onChange={handleChange} placeholder="Message" required></textarea>
                <button className={styles.submit} type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;