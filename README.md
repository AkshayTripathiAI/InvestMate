# InvestMate

A React investment calculator that projects year-by-year growth from an initial investment, yearly contributions and an expected return rate.

Built as a practice project while learning React.

![InvestMate screenshot](./screenshots/InvestMate.png)

## Features

- Four labelled inputs: initial investment, annual investment, expected return (%) and duration (years), plus a button to reset to the example values
- Summary cards for final value, total invested and total interest
- Results table updates live as you type, showing for each year: investment value, interest for the year, total interest and invested capital
- A bar behind each year's value shows how much is invested capital versus interest earned
- Values formatted as USD
- Clear validation messages: amounts and return can't be negative (zero is allowed), at least one investment amount must be above zero, and duration must be a whole number of years from 1 to 100
- Responsive layout; the table scrolls horizontally on narrow screens

## Tech stack

- React 18
- Vite 4
- Deployed to GitHub Pages from the `gh-pages` branch (`base: '/InvestMate/'` in `vite.config.js`)

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/AkshayTripathiAI/InvestMate.git
cd InvestMate
npm install
npm run dev
```

Then open the URL Vite prints (by default http://localhost:5173).

Other scripts: `npm run build`, `npm run preview`.

## Project structure

```
src/
  index.jsx              # entry point
  App.jsx                # input state and validation
  components/
    Header.jsx
    UserInput.jsx        # controlled number inputs
    Results.jsx          # summary cards + results table
  util/investment.js     # yearly calculation + currency formatter
```

## License

MIT - see [LICENSE](LICENSE).
