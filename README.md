# Full Name Display

A small React app that collects a first and last name through an uncontrolled form, sanitizes the input as you type, and displays the combined name on submit.

## Features

- **Letters-only input** — any character that isn't a letter (including spaces, numbers, and symbols) is stripped in real time as you type
- **Uncontrolled inputs** via `useRef`, so typing causes zero re-renders — the DOM manages the value directly until submission
- **State updates only when needed** — the full name is read from both refs and pushed into state on submit, which is the one moment the UI actually needs to update
- **Native required-field validation** via the HTML `required` attribute

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm start
```

Opens the app at `http://localhost:3000`.

## Project Structure

```
src/
  App.js     # Form logic and full name display
  App.css    # Styles
```

## How It Works

### Uncontrolled inputs

Both fields use `ref` instead of `value` + `onChange`, so React never tracks their value in state while typing. The DOM handles the text directly — faster when you only care about the value at one specific moment, which here is form submission.

```jsx
const firstNameRef = useRef();
const lastNameRef = useRef();

function submitHandler(event) {
  event.preventDefault();
  setFullName(`${firstNameRef.current.value} ${lastNameRef.current.value}`);
}
```

### Input sanitization

Every keystroke (and paste) runs through a regex that removes anything that isn't a letter:

```js
function blockSpecialChars(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '');
}
```

This runs before React re-renders, so disallowed characters never visibly appear on screen — they're removed instantly rather than flashing and disappearing.

## Customization

| Want to...                                                | Change the regex to...                                                                  |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Allow spaces (e.g. "Van Der Berg")                        | `/[^a-zA-Z\s]/g`                                                                        |
| Allow hyphens/apostrophes (e.g. "O'Brien", "Smith-Jones") | `/[^a-zA-Z\s'-]/g`                                                                      |
| Show an error instead of silently stripping               | Validate on submit/blur and render an error message instead of sanitizing on `onChange` |

## License

MIT
