# FIFA World Cup 2026 Countdown

A modern and responsive web application that provides a countdown to the FIFA World Cup 2026™, hosted by the United States, Mexico, and Canada. This unofficial timer features a landing page with information about the host nations and a newsletter subscription.

## 🚀 Features

- **Real-time Countdown**: A dynamic timer counting down to June 11, 2026, tracking days, hours, minutes, and seconds.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views using SCSS mixins.
- **Host Nations Highlights**: Sections dedicated to the three host countries with custom cards and imagery.
- **Interactive UI**: Responsive navigation menu and smooth scroll indicators.
- **Newsletter Signup**: A custom-styled subscription form for updates.

## 🛠️ Tech Stack

- **Frontend**: HTML5, SCSS (Sass).
- **Bundler**: [Parcel](https://parceljs.org/) (handles asset compilation, Sass transformation, and optimization).
- **JavaScript**: Vanilla JS for countdown logic and menu toggling.
- **Image Optimization**: `sharp` integration for high-performance image processing.
- **Typography**: Google Fonts (Lexend) and Material Symbols Outlined.

## 📂 Project Structure

- `src/index.html`: Main HTML structure.
- `src/scripts/main.js`: Countdown logic and UI interactions.
- `src/styles/`: Organized SCSS files including variables, layout components (header, hero, nations, etc.), and the main entry point.
- `src/images/`: Visual assets for the hero section and host nations.

## 🌐 Web

- Link on [Vercel](https://world-cup-timer.vercel.app/)

## 🔧 Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```
    This runs the project at `http://localhost:1234`.

3.  **Build for production**:
    ```bash
    npm run build
    ```
    This generates an optimized version of the site in the `dist` folder.

## 📜 License

This project is licensed under the **ISC License**.

---
*Disclaimer: This is an unofficial countdown project. "FIFA", "World Cup", and official logos are trademarks of the Fédération Internationale de Football Association.*