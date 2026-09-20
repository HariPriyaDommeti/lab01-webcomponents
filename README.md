# Lab 01 | Building a UI with Web Components

## Course
IS-5500-11

## Project
`lab01-webcomponents`

## What this submission demonstrates

- Four custom Web Components:
  - `<app-header>`
  - `<user-card>`
  - `<stats-panel>`
  - `<app-footer>`
- Components are implemented as JavaScript classes extending `HTMLElement`.
- Shadow DOM is used to encapsulate component markup and styling.
- Dynamic attributes are used to pass data into components.
- CSS Grid is used for the main two-column layout.
- Responsive CSS is included for smaller screens.
- Cohesion is maintained by giving each component one focused responsibility.
- Components are open for extension through attributes rather than requiring changes to the component classes.

## Folder structure

```text
lab01-webcomponents/
├── index.html
├── style.css
├── app.js
├── README.md
└── components/
    ├── app-header.js
    ├── user-card.js
    ├── stats-panel.js
    └── app-footer.js
```

## How to run

Because ES modules are used, open the project through a local web server.

### VS Code

1. Open the `lab01-webcomponents` folder.
2. Install/use the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Alternatively, from the project directory run:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Design principles demonstrated

### Cohesion & Coupling
Each component has a single purpose. For example, `user-card` is responsible for presenting user information and does not control application-level navigation.

### Open/Closed Principle
The components can be configured or extended through HTML attributes such as `name`, `role`, `department`, and `status` without modifying their class definitions.

### Usability
The interface uses readable typography, consistent spacing, clear visual hierarchy, responsive layout, accessible labels, and simple navigation-free presentation.

### Dynamic Data
The `app.js` file creates components dynamically and passes data using attributes:

```html
<user-card
  name="Ava Johnson"
  role="Product Designer"
  department="Design"
  initials="AJ"
  status="Available">
</user-card>
```
