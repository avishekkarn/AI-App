# AI App

## Overview
This is a React-based AI-powered application built using Vite. The project integrates various APIs to provide intelligent functionalities. The primary goal of this project was to learn and apply API integration in React while leveraging Vite for an optimized development experience.

## Features
- **Fast & Lightweight:** Built with Vite for efficient performance.
- **API Integration:** Fetches and processes data from multiple APIs.
- **Dynamic UI:** React-based component structure for a seamless user experience.
- **State Management:** Uses React hooks for state handling.
- **ESLint Configured:** Ensures code quality and best practices.

## Tech Stack
- **Frontend:** React (Vite)
- **State Management:** React Hooks
- **Styling:** CSS/Styled Components
- **Linting:** ESLint
- **Build Tool:** Vite

## API Integration & Learnings
This project helped in understanding:
1. **Fetching Data in React**
   - Using `fetch` and `axios` for API requests.
   - Handling async/await and error cases.
2. **Managing API Responses**
   - Parsing JSON responses efficiently.
   - Updating the UI dynamically based on API data.
3. **Environment Variables**
   - Storing API keys securely using `.env` files.
   - Accessing environment variables in Vite using `import.meta.env.VITE_API_KEY`.
4. **Performance Optimization**
   - Implementing caching strategies.
   - Using useEffect dependencies correctly to avoid redundant API calls.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ai-app.git
   cd ai-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Build for production:
   ```sh
   npm run build
   ```
5. Preview the production build:
   ```sh
   npm run preview
   ```

## Deployment Guide
- **To Netlify:**
  - Drag and drop the `dist/` folder to Netlify.
  - Configure `vite.config.js` with correct base path if needed.
- **To Vercel:**
  - Install Vercel CLI: `npm install -g vercel`
  - Deploy using `vercel` command.
- **To GitHub Pages:**
  - Install `gh-pages`: `npm install gh-pages`
  - Add `"deploy": "gh-pages -d dist"` in scripts.
  - Run `npm run build` followed by `npm run deploy`.

## Contributing
Feel free to fork this repo, make improvements, and submit a pull request!

## License
This project is licensed under the MIT License.

