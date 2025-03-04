# Currency Converter Using React.js

This project is a simple currency converter application built using React.js. It allows users to convert amounts between different currencies using live exchange rates.

## Features

- Convert between multiple currencies
- Swap between the "From" and "To" currencies
- Real-time exchange rate updates

# Main Files in Currency Converter Project

The project is organized into several key files and directories. Here’s a breakdown of the main files:

## `src/App.jsx`

- **Description:** Main application component.
- **Functionality:** 
  - Manages state for `amount`, `from`, `to`, and `convertedAmount`.
  - Handles the currency conversion logic.
  - Contains `swapfunc` to swap currency values.
  - Contains `submit` function to calculate the converted amount.

## `src/components/InputBox.js`

- **Description:** Component for rendering input fields and currency selection dropdowns.
- **Props:**
  - `label`: Label for the input box.
  - `amount`: Amount to be converted.
  - `selectedCurrency`: Currently selected currency.
  - `onAmountChange`: Function to handle amount change.
  - `onCurrencyChange`: Function to handle currency change.
  - `currencyOptions`: Available currency options.
  - `amountDisabled`: Boolean to disable amount input.

## `src/hooks/useCurrencyhook.js`

- **Description:** Custom hook for fetching currency exchange rates.
- **Functionality:** 
  - Fetches live exchange rates.
  - Returns an object with currency codes as keys and their respective exchange rates as values.


## `src/main.jsx`

- **Description:** Entry point of the React application.
- **Functionality:** Renders the `App` component into the DOM.

## Project Structure


- **src/**: Contains source code.
  - **components/**: Contains reusable components.
  - **hooks/**: Contains custom hooks.
  - **App.jsx**: Main application file.
  - **main.jsx**: Entry point of the application.

Understanding these main files will help you navigate and modify the project effectively.

# How to Clone and Start the Project

Follow these steps to set up and run the Currency Converter application on your local machine.

## Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)

## Steps

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/itzshubu/Currency-Converter-Using-React.js.git
# CurrencyMate
