# Decodelabs-Internship-projet2

# Account Registration Form
 
A responsive account registration form built with HTML, Bootstrap 5, and vanilla JavaScript. Includes client-side validation with SweetAlert2 popup feedback.
 
---
 
## Features
 
- Responsive layout using Bootstrap 5
- Collapsible navbar with mobile hamburger menu
- Form validation that prevents submission if any field is empty
- SweetAlert2 error popup for a polished user experience
---
 
## Project Structure
 
```
project/
├── index.html        # Main HTML file with form markup
├── responsive.css    # Custom styles
└── responsive.js     # Form validation logic
```
 
---
 
## Dependencies
 
All dependencies are loaded via CDN — no installation required.
 
| Library | Version | Purpose |
|---|---|---|
| Bootstrap CSS | 5.3.3 | Layout, navbar, form styling |
| Bootstrap JS | 5.3.3 | Navbar toggle (collapse) behavior |
| SweetAlert2 | 11 | Styled error alert popup |
 
---
 
## How It Works
 
### HTML (`index.html`)
 
- A `<header>` contains a Bootstrap dark navbar with a collapsible side menu linking to `#home`, `#about`, `#services`, and `#contact`.
- A `<main>` section holds the registration form with the id `accountForm`.
- The form collects:
  - **First Name** — text input
  - **Last Name** — text input
  - **Password** — password input
  - **Gender** — radio buttons (Female / Male)
- A **Submit** button triggers validation on click.
### JavaScript (`responsive.js`)
 
On form submission:
 
1. All `text`, `email`, and `password` inputs are queried.
2. Each input's `.value` is checked — if any field is empty after trimming whitespace, a flag is set.
3. If the flag is true, `e.preventDefault()` stops the form from submitting and a SweetAlert2 error modal is shown:
```js
Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "One of the fields is empty. Please check your details!",
    confirmButtonColor: "#ffc107"
});
```
 
4. If all fields are filled, the form submits normally.
---
 
## Usage
 
1. Open `index.html` in any modern browser.
2. Fill in all form fields and click **Submit**.
3. If any field is empty, an error popup will appear.
4. Once all fields are filled, the form will proceed with submission.
---
 
## Known Limitations
 
- The gender radio buttons are not validated (a gender is always pre-selected).
- There is no email field in the current form, though the JS selector includes `input[type="email"]` for forward compatibility.
- No server-side handling is implemented — this is a front-end-only form.
---
 
## Customization
 
| What to change | Where |
|---|---|
| Form fields | `index.html` — add/remove `<input>` elements inside the form |
| Validation logic | `responsive.js` — extend the `inputFields` selector or add custom checks |
| Styles | `responsive.css` — override Bootstrap defaults |
| Alert appearance | `responsive.js` — modify the `Swal.fire()` options |
 
