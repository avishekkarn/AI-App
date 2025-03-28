# AI App

## Live Demo
[AI App on Vercel](https://ai-app-lyart.vercel.app/)

## Overview
AI App is a React-based AI-powered application built using Vite. This project integrates AI API functionalities to process and display intelligent responses dynamically. The main goal was to learn and implement API integration in React, optimize performance with Vite, and deploy the app seamlessly on Render and Vercel.

## Features
- Fast and optimized with Vite
- AI integration for generating intelligent responses
- Dynamic UI with a React component-based structure
- State management using React Context API and Hooks
- Modern and responsive design with CSS
- Code quality ensured with ESLint

## Tech Stack
- Frontend: React (Vite)
- State Management: React Context API, Hooks
- Styling: CSS/Styled Components
- Linting: ESLint
- Build Tool: Vite
- Deployment: Render, Vercel

## API Integration and Learnings
This project helped in understanding:
### Fetching Data in React
- Using fetch and axios for API requests
- Handling async/await and error scenarios

### Managing API Responses
- Parsing JSON responses efficiently
- Updating the UI dynamically based on API data

### Performance Optimization
- Caching API responses for faster results
- Using useEffect dependencies correctly to avoid redundant API calls

### Deployment Issues and Fixes
- Render worked immediately, but Vercel required:
  - Case-sensitive file imports (Context.jsx vs. context.jsx)
  - Correct Vite base path (base: './' in vite.config.js)
  - Proper publish directory set to dist in Vercel settings

## Installation and Setup
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
5. Preview production build:
   ```sh
   npm run preview
   ```

## Deployment Guide
### Deploy on Vercel
1. Go to Vercel and import the GitHub repository
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Set Base Path in Vite (`vite.config.js`):
   ```js
   export default defineConfig({
     plugins: [react()],
     base: './',
   });
   ```
5. Deploy and troubleshoot issues:
   - If assets do not load, check base path configuration
   - If Context.jsx error occurs, ensure correct case-sensitive imports
   - If Vercel cache causes issues, redeploy with cache cleared

### Deploy on Render
1. Go to Render, create a new Static Site, and connect the GitHub repository
2. Build Command: `npm install; npm run build`
3. Publish Directory: `dist`
4. Deploy and enable automatic updates on GitHub pushes

## Contributing
Feel free to fork this repository, suggest improvements, and submit a pull request.

## License
This project is licensed under the MIT License.

## Next Steps
- Improve UI animations and transitions
- Enhance AI response accuracy with better API calls
- Optimize performance with memoization and lazy loading

[Try it live on Vercel](https://ai-app-lyart.vercel.app/)

