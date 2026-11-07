import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const MAX_DURATION = 100;

const DEFAULT_INPUT = {
  initialInvestment: "10000",
  annualInvestment: "1200",
  expectedReturn: "6",
  duration: "10",
};

// Inputs are kept as the raw strings typed by the user (so a field can be
// cleared while editing) and converted to numbers here.
function parseInput(rawInput) {
  return {
    initialInvestment: Number(rawInput.initialInvestment),
    annualInvestment: Number(rawInput.annualInvestment),
    expectedReturn: Number(rawInput.expectedReturn),
    duration: Number(rawInput.duration),
  };
}

function validate(rawInput, input) {
  const errors = [];
  if (Object.values(rawInput).some((value) => value.trim() === "")) {
    errors.push("Please fill in all four fields.");
    return errors;
  }
  if (!Object.values(input).every(Number.isFinite)) {
    errors.push("Please enter valid numbers.");
    return errors;
  }
  if (input.initialInvestment < 0 || input.annualInvestment < 0) {
    errors.push("Investment amounts can't be negative.");
  } else if (input.initialInvestment === 0 && input.annualInvestment === 0) {
    errors.push("Enter an initial or annual investment greater than zero.");
  }
  if (input.expectedReturn < 0) {
    errors.push("Expected return can't be negative.");
  }
  if (
    !Number.isInteger(input.duration) ||
    input.duration < 1 ||
    input.duration > MAX_DURATION
  ) {
    errors.push(
      `Duration must be a whole number of years between 1 and ${MAX_DURATION}.`,
    );
  }
  return errors;
}

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_INPUT);

  const parsedInput = parseInput(userInput);
  const errors = validate(userInput, parsedInput);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  }

  function handleReset() {
    setUserInput(DEFAULT_INPUT);
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onChange={handleChange}
        onReset={handleReset}
      />
      {errors.length > 0 ? (
        <div className="center errors" role="alert">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : (
        <Results input={parsedInput} />
      )}
      <footer id="footer">
        Projections are estimates with a constant annual return.{" "}
        <a
          href="https://github.com/AkshayTripathiAI/InvestMate"
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub
        </a>
      </footer>
    </>
  );
}

export default App;
