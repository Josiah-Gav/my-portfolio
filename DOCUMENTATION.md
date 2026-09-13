# Documenting My First React Application

**Name:** Kim Josiah Gavino
**Project:** Personal Portfolio Website
**Stack:** React 19 + Vite
**Repository folder:** `kimjosiah-portfolio`

---

## 1. Project Overview

A one page personal portfolio website made with React and Vite. It has a hero intro, a grid of
my skills, a list of my projects, and a contact form. The navbar links jump to each section
instead of loading a new page.

The app is built from five components, all put together in `src/App.jsx`:

| Component | File | Responsibility |
|---|---|---|
| `Header` | `src/Header.jsx` | Navigation bar, theme toggle, hero section (name, role, photo, social icons) |
| `Skills` | `src/Skills.jsx` | One skill tile, repeated for each technology |
| `Projects` | `src/Projects.jsx` | One project card with a Like button, repeated for each project |
| `Contact` | `src/Contact.jsx` | Contact form with live input tracking and a submitted state |
| `Footer` | `src/Footer.jsx` | Copyright line |

### How to run it

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

---

## 2. Screenshot Checklist

Take these screenshots first, save them in a `screenshots/` folder inside the project, then
put them where the placeholders show up later in this document.

### Application screenshots (from the browser)

| # | Filename | What to capture |
|---|---|---|
| 1 | `app-full-page.png` | The whole page scrolled to the top (hero + navbar visible) |
| 2 | `app-skills.png` | The "My Skills" section showing the grid of technology icons |
| 3 | `app-projects.png` | The "My Projects" section showing the project cards |
| 4 | `app-like-before.png` | A project card **before** clicking Like (button reads `♡ Like`) |
| 5 | `app-like-after.png` | The same card **after** clicking Like (button reads `♥ Liked`) |
| 6 | `app-contact-form.png` | The contact form with your name/email/message typed in |
| 7 | `app-contact-sent.png` | The form after pressing Send (shows "Thanks *name*, I'll get back to you!") |
| 8 | `app-dark-mode.png` | The page in dark mode |
| 9 | `app-light-mode.png` | The page in light mode (click the sun icon in the navbar) |

### Source code screenshots (from VS Code)

For each concept below, open the file in VS Code, select the lines listed, and screenshot the
editor. Keep the **filename tab** visible in the shot so it is clear which file the code came
from.

| # | Filename | File to open | Lines to highlight |
|---|---|---|---|
| 10 | `code-props-parent.png` | `src/App.jsx` | 57–74 |
| 11 | `code-props-child.png` | `src/Skills.jsx` | 1–12 (whole file) |
| 12 | `code-state-projects.png` | `src/Projects.jsx` | 5–19 |
| 13 | `code-state-contact.png` | `src/Contact.jsx` | 4–18 |
| 14 | `code-arrow-functions.png` | `src/Contact.jsx` | 9–18 |
| 15 | `code-event-handling.png` | `src/Contact.jsx` | 29–38 |
| 16 | `code-css-modules-jsx.png` | `src/Projects.jsx` | 1–21 |
| 17 | `code-css-modules-css.png` | `src/Projects.module.css` | 1–15 |

> **Tip:** In VS Code you can hide the sidebar with `Ctrl + B` for a cleaner screenshot.

---

## 3. Required Concepts

Each section below has **the code**, **a short explanation**, and **which screenshots to
insert**.

---

### 3.1 Props: Passing data from a parent component to a child component

**Parent, `src/App.jsx` (lines 57–74)**

```jsx
<div className={styles.section} id="skills">
  <h2 className={styles.sectionTitle}>My Skills</h2>
  {/* Arrow function in .map(); props (image/alt) passed down to Skills */}
  <div className={styles.skillsList}>
    {skillsList.map((skill) => (
      <Skills key={skill.alt} image={skill.image} alt={skill.alt}/>
    ))}
  </div>
</div>
<div className={styles.section} id="projects">
  <h2 className={styles.sectionTitle}>My Projects</h2>
  {/* Arrow function in .map(); props (image/alt/title/description) passed down to Projects */}
  <div className={styles.projectsList}>
    {projectsList.map((project) => (
      <Projects key={project.title} image={project.image} alt={project.alt} title={project.title} description={project.description}/>
    ))}
  </div>
</div>
```

**Child, `src/Skills.jsx` (whole file)**

```jsx
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
```

**Child, `src/Projects.jsx` (props usage)**

```jsx
<img className={styles.image} src={props.image} alt={props.alt}></img>
<h3 className={styles.title}>{props.title}</h3>
<p className={styles.description}>{props.description}</p>
```

**Description**

`App.jsx` holds the content in two arrays and passes it down as **props**, which are custom
attributes on the JSX tag. `Skills` gets `image` and `alt`. `Projects` also gets `title` and
`description`. The child reads them as `props.image`, `props.title`, and so on.

Because the same component is reused with different props, one `Skills` draws 12 tiles and one
`Projects` draws 4 cards. Props only go parent to child, so the child never changes them.

Props can carry functions too: `App.jsx` passes `onToggleTheme` to `Header`.

**Insert screenshots:** `code-props-parent.png`, `code-props-child.png`, `app-skills.png`,
`app-projects.png`

---

### 3.2 State: Managing and updating data inside a component

**`src/Projects.jsx` (lines 5–19)**

```jsx
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
```

**`src/Contact.jsx` (lines 4–18)**

```jsx
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
```

**`src/App.jsx` (lines 47–52), state for the light/dark theme**

```jsx
function App() {
  // State: current color theme, toggled from the nav
  const [theme, setTheme] = useState('dark');

  // Event handling: flips between 'dark' and 'light' (arrow function)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
```

**Description**

**State** is data a component owns and can change while the app runs. `useState` gives back the
current value and a function to update it. Calling that function re-renders the component.

- **`Projects.jsx`**: `liked` starts as `false` and the button flips it. Each card is its own
  copy of the component, so each keeps its **own** `liked` value.
- **`Contact.jsx`**: `form` holds the three fields in one object, `sent` remembers if it was
  submitted. When `sent` turns `true`, the component shows a thank you message instead.
- **`App.jsx`**: `theme` is `'dark'` or `'light'` and controls the colors of the whole page.

**Insert screenshots:** `code-state-projects.png`, `code-state-contact.png`,
`app-like-before.png`, `app-like-after.png`, `app-dark-mode.png`, `app-light-mode.png`

---

### 3.3 Arrow Functions: Using arrow function syntax

**`src/Contact.jsx` (lines 9–18), event handlers written as arrow functions**

```jsx
// Event handling: keeps form state in sync on every keystroke (arrow function)
const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

// Event handling: form submit (arrow function)
const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
};
```

**`src/Projects.jsx` (line 16), inline arrow function as a click handler**

```jsx
<button className={styles.likeButton} onClick={() => setLiked(!liked)}>
    {liked ? '♥ Liked' : '♡ Like'}
</button>
```

**`src/App.jsx` (lines 52, 61–63, 70–72), arrow functions in state updates and `.map()`**

```jsx
const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
```

```jsx
{skillsList.map((skill) => (
  <Skills key={skill.alt} image={skill.image} alt={skill.alt}/>
))}
```

```jsx
{projectsList.map((project) => (
  <Projects key={project.title} image={project.image} alt={project.alt} title={project.title} description={project.description}/>
))}
```

**Description**

Arrow functions (`=>`) are a shorter way to write functions. I use them in two spots:

1. **Event handlers.** `handleChange`, `handleSubmit`, and `toggleTheme` are arrow functions in
   `const` variables. The Like button uses an inline one, `() => setLiked(!liked)`. It has to
   be wrapped, because `onClick={setLiked(!liked)}` would run right away during rendering
   instead of waiting for the click.
2. **`.map()` callbacks.** `skillsList.map((skill) => (...))` turns each object into a JSX
   element, which is how a list of data becomes a list of components. The `key` prop lets React
   keep track of each item.

`toggleTheme` uses the short form: with no curly braces, the value returns on its own.

**Insert screenshot:** `code-arrow-functions.png`

---

### 3.4 Event Handling: Reacting to what the user does

**`src/Contact.jsx` (lines 29–38), `onChange` and `onSubmit`**

```jsx
return(
    <div className={styles.contact} id="contact">
        <h1 className={styles.title}>Contact Me</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input className={styles.input} name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <textarea className={styles.input} name="message" value={form.message} onChange={handleChange} placeholder="Message" required></textarea>
            <button className={styles.submit} type="submit">Send</button>
        </form>
    </div>
);
```

**`src/Contact.jsx` (lines 20–27), what happens after the submit event**

```jsx
if (sent) {
    return (
        <div className={styles.contact} id="contact">
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.confirmation}>Thanks {form.name}, I'll get back to you!</p>
        </div>
    );
}
```

**`src/Projects.jsx` (line 16), `onClick`**

```jsx
<button className={styles.likeButton} onClick={() => setLiked(!liked)}>
    {liked ? '♥ Liked' : '♡ Like'}
</button>
```

**`src/Header.jsx` (line 16), `onClick` using a function received through props**

```jsx
<button className={styles.themeButton} aria-label={props.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} type="button" onClick={props.onToggleTheme}>
```

**Description**

Event handling is how the app responds to the user. Three event types are used here:

- **`onChange` (typing).** `value={form.name}` makes each input a *controlled input*, so React
  decides what text shows based on state. Without `onChange` the typing would look broken.
  `handleChange` reads `e.target.value` and `e.target.name`, so one handler covers all three
  fields.
- **`onSubmit` (sending the form).** It sits on the `<form>`, so it fires on a **Send** click or
  on Enter. `e.preventDefault()` stops the page reload, and `setSent(true)` swaps the form for
  a thank you message using the name from state.
- **`onClick` (clicking).** Used by the Like button and the theme button. The theme button shows
  props and events together: the function lives in `App.jsx` but the click happens in `Header`.

**Insert screenshots:** `code-event-handling.png`, `app-contact-form.png`, `app-contact-sent.png`

---

### 3.5 Modular CSS: Styling with CSS Modules

**`src/Projects.jsx` (lines 1–21), importing and using the module**

```jsx
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
```

**`src/Projects.module.css` (lines 1–15)**

```css
.project {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.image {
  width: 100%;
  border-radius: 6px;
}
```

**`src/Skills.module.css` (whole file)**

```css
.skill {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  width: 96px;
  height: 96px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.icon {
  width: 40px;
  height: 40px;
}
```

**Description**

Every component has its own `.module.css` file, imported as an object
(`import styles from './Projects.module.css'`) and used as `className={styles.project}`.

At build time Vite renames each class to something unique (`.project` becomes
`_project_1a2b3_1`), so the styles stay **scoped to the component that imported them**. That is
why `Projects.module.css` and `Contact.module.css` can both have a `.title` class without
breaking each other.

One CSS module per component:

| Component | Stylesheet |
|---|---|
| `App.jsx` | `App.module.css` |
| `Header.jsx` | `Header.module.css` |
| `Skills.jsx` | `Skills.module.css` |
| `Projects.jsx` | `Projects.module.css` |
| `Contact.jsx` | `Contact.module.css` |
| `Footer.jsx` | `Footer.module.css` |

The colors are CSS variables set once in `App.module.css` and inherited by the other modules,
which is how one piece of state switches the whole page between dark and light:

```css
.app {
  --bg: #18181b;
  --surface: #232326;
  --text: #f5f5f0;
  --muted: #ada9a3;
  --border: #2e2e32;
  --accent: #e8622c;
  ...
}

.app[data-theme='light'] {
  --bg: #faf8f5;
  --surface: #ffffff;
  --text: #1f1b16;
  --muted: #6b6258;
  --border: #e8e1d8;
}
```

**Insert screenshots:** `code-css-modules-jsx.png`, `code-css-modules-css.png`,
`app-dark-mode.png`, `app-light-mode.png`

---

## 4. Summary

| Concept | Where it is used |
|---|---|
| **Props** | `App.jsx` passes `image`/`alt` to `Skills`, and `image`/`alt`/`title`/`description` to `Projects`; it also passes `theme` and `onToggleTheme` to `Header` |
| **State** | `liked` in `Projects.jsx`, `form` and `sent` in `Contact.jsx`, `theme` in `App.jsx`, all made with `useState` |
| **Arrow Functions** | `handleChange`, `handleSubmit`, `toggleTheme`, the inline `onClick={() => setLiked(!liked)}`, and the `.map()` callbacks in `App.jsx` |
| **Event Handling** | `onChange` on all form inputs, `onSubmit` on the form, `onClick` on the Like button and the theme toggle |
| **Modular CSS** | Six `.module.css` files, one per component, imported as `styles` and used with `className={styles.x}` |

---

## 5. File Structure

```
kimjosiah-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              entry point, mounts App into #root
    ├── App.jsx               puts all components together, holds theme state and content data
    ├── App.module.css
    ├── Header.jsx            navbar + hero
    ├── Header.module.css
    ├── Skills.jsx            one skill tile (reused through props)
    ├── Skills.module.css
    ├── Projects.jsx          one project card with Like state
    ├── Projects.module.css
    ├── Contact.jsx           contact form with controlled inputs
    ├── Contact.module.css
    ├── Footer.jsx            copyright
    ├── Footer.module.css
    ├── index.css             small global reset + smooth scrolling
    └── assets/
        ├── icons/            technology and project images
        └── me/               profile photo
```
