# 🎬 MovieDux

MovieDux is a modern, responsive React web application for discovering and managing your favorite movies. Users can browse a curated movie list, filter by genre and rating, search by title, and maintain a personal watchlist—all with a clean, intuitive UI.

## 🚀 Features

- **Movie Discovery:** Browse a visually engaging grid of movies with images, genres, and ratings.
- **Search & Filter:** Instantly search by title, filter by genre (Action, Fantasy, Drama, Horror), and filter by rating (Good, Ok, Bad).
- **Watchlist:** Add or remove movies from your personal watchlist with a single click.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Persistent UI:** Smooth navigation using React Router, with a consistent header and footer.
- **Fallback Images:** Automatic fallback to a default image if a movie poster is missing.

## 🛠️ Tech Stack

- **React** (with Hooks)
- **React Router DOM** for navigation
- **CSS** for custom styling
- **Jest & React Testing Library** for unit testing

## 📂 Project Structure

- `src/components/` — Modular React components (Header, Footer, MovieCard, MoviesGrid, WatchList)
- `public/movies.json` — Static movie data
- `public/images/` — Movie poster images

## 📝 Key Notes for Recruiters

- **Component-Driven:** The app is built with reusable, maintainable components.
- **State Management:** Uses React hooks (`useState`, `useEffect`) for state and side effects.
- **Accessibility:** Semantic HTML and accessible form controls.
- **Error Handling:** Graceful fallback for missing images.
- **Scalable:** Easily extendable to fetch movies from an API or add authentication.
- **Testing:** Includes a sample test and is set up for further unit testing.

## 📸 Screenshots

![MovieDux Home](public/movieDux.png)
*Home page with movie grid and filters*

## 🏁 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
2. **Run the app:**
    ```sh
    npm start

   Open http://localhost:3000 in your browser.

4. Demo Link: https://film-flare-eosin.vercel.app/

