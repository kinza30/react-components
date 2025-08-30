React Components Library – Demo

This is a **React Components Library Demo Project** showcasing reusable components such as **Button, Card, and Modal**.  
The project demonstrates how to implement and test different component variants, toggle states, and accessibility features.

---

## Features

- Reusable **Button component** with support for:
  - Variants (Primary, Outline, Danger, Disabled)
  - Sizes (Small, Medium, Large)
  - Full-width toggle
- **Card component** with header, body, and footer structure.
- **Modal component** with overlay, ESC key handling, and accessibility support.

---

## Project Structure

src/
│── App.jsx
│── index.js
│── App.css
│── components/
│ ├── Button.jsx
│ ├── Card.jsx
│ └── Modal.jsx

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/react-components-demo.git
   cd react-components-demo
   ```
2. Install dependencies:
   npm install

3. Start the development server:
   npm start

## Usage

    Click Outline button → toggles outline on all cards.

    Click Danger button → toggles button size (small/medium).

    Click Full-width button → toggles width (normal/full).

    Click Disabled button → shows disabled state.

    Click Open Modal → opens an accessible modal (close with ESC or overlay click).

## Demo Video

    A short screen recording (3–4 minutes) is attached separately to demonstrate:
    Running the app
    Button functionality (toggle states)
    Card layout
    Modal opening and closing
