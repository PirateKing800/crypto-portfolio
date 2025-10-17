# Crypto Portfolio Tracker

This is a minimal static web application that displays a list of cryptocurrencies from a local `portfolio.json` file. For each cryptocurrency, it shows the name, symbol, and current price.

## Features

- Loads portfolio data dynamically from the provided `portfolio.json` file.
- Displays cryptocurrencies in a clean, responsive list.
- Formats prices in USD currency.

## Files Included

- `index.html` - Main HTML page with container for the crypto list.
- `style.css` - Basic styling for readability and responsiveness.
- `script.js` - JavaScript that loads and renders portfolio data.
- `portfolio.json` - The data file with crypto portfolio details (provided).

## Usage

1. Place all files, including `portfolio.json`, in the same folder.
2. Open `index.html` in a modern web browser (e.g., Chrome, Firefox).
3. The cryptocurrency list will load and be displayed automatically.

## Notes

- The app expects `portfolio.json` to be a JSON array with objects that have at least `name`, `symbol`, and `currentPrice` or `price` properties.
- If the data fails to load or is empty, a message will be shown in the list area.

## Example portfolio.json structure

json
[
  {
    "name": "Bitcoin",
    "symbol": "BTC",
    "currentPrice": 30000
  },
  {
    "name": "Ethereum",
    "symbol": "ETH",
    "currentPrice": 2000
  }
]


---

Built as per project brief to dynamically load and display cryptocurrencies with name, symbol, and price.