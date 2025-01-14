FE Capstone Project: Currency Converter
Project Overview:
As a frontend developer, your task is to design and implement a Currency Converter application using HTML, CSS, JavaScript, and React (with optional Tailwind CSS).

The application will allow users to convert between different currencies by fetching real-time exchange rates from a public currency API. This project will help you practice integrating external APIs, handling user input, managing state, and building a responsive and visually appealing user interface.

It will simulate a real-world development environment, providing valuable experience in frontend web development and deploying applications to the web.

Functional Requirements:
Fetch Exchange Rates:

Use a public currency API like the ExchangeRate-API to fetch real-time exchange rates.
Store the exchange rates in the application state for quick access and conversions.
Currency Conversion:

Allow users to select two currencies (from and to) from a dropdown list of available currencies.
Provide an input field for users to enter the amount they want to convert.
Display the converted amount in the selected currency.
Exchange Rate Information:

Display the current exchange rate for the selected currency pair.
Optionally, show additional information like the date of the last rate update and historical trends.
Responsive UI Design:

Use Tailwind CSS to create a responsive design that adapts to different screen sizes (e.g., desktop, tablet, mobile).
Ensure that the converter is easy to use on all devices, with a clear layout for the currency selection and input fields.
Error Handling:

Implement error handling for scenarios such as network issues, invalid API responses, or unsupported currencies.
Display user-friendly messages or alerts when errors occur.
Technical Requirements:
Project Setup:

Set up a React project using tools like vite or configure a custom setup.
Install and configure TailwindCSS for styling, or use another CSS framework if preferred.
API Integration:

Sign up for an API key on ExchangeRate-API or another currency service.
Use fetch or axios to request data from the currency API and handle asynchronous data fetching.
Store the fetched exchange rates in the application state and use them for conversion calculations.
User Interface Components:

Create reusable components for currency selection, amount input, and result display, such as CurrencySelector, AmountInput, and ConversionResult.
Design a cohesive layout using Tailwind CSS, ensuring consistency in colors, typography, and spacing.
State Management:

Use React’s state management hooks (useState and useEffect) to handle data fetching, user input, and UI updates.
Optionally, explore more advanced state management tools like Zustand, Redux or mobx-state-tree if the application grows in complexity.
Deployment:

Deploy the completed application on a free hosting platform like Netlify or Vercel.
Ensure the application is accessible and performs well in the deployed environment.
Share the deployment link as part of your project submission.
Stretch Goals (Optional):
Historical Exchange Rates:

Implement a feature that allows users to view historical exchange rates for a selected currency pair over a specified date range.
Favorite Currency Pairs:

Allow users to save their favorite currency pairs for quick access and future conversions.
Multi-Currency Conversion:

Enable users to convert a single amount into multiple currencies at once and display a list of converted amounts.
Currency Rate Alerts:

Implement an alert system that notifies users when a selected currency pair reaches a certain exchange rate.
Dark Mode:

Add a dark mode feature to provide a better user experience in low-light conditions.