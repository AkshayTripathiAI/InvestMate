# InvestMate

A React investment calculator that projects year-by-year growth from an initial investment, yearly contributions and an expected return rate.

Built as a practice project while learning React.

![InvestMate screenshot](./screenshots/InvestMate.png)

## Features

- Four inputs: initial investment, annual investment, expected return (%) and duration (years)
- Results table updates live as you type, showing for each year: investment value, interest for the year, total interest and invested capital
- Values formatted as USD
- The table is hidden and a message is shown unless all inputs are greater than zero

## Tech stack

- React 18
- Vite 4

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
    Results.jsx          # results table
  util/investment.js     # yearly calculation + currency formatter
```

## License

MIT - see [LICENSE](LICENSE).
