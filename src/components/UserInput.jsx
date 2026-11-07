const FIELDS = [
  [
    { id: "initialInvestment", label: "Initial Investment ($)", step: "100" },
    { id: "annualInvestment", label: "Annual Investment ($)", step: "100" },
  ],
  [
    { id: "expectedReturn", label: "Expected Return (%)", step: "0.1" },
    { id: "duration", label: "Duration (years)", step: "1" },
  ],
];

export default function UserInput({ onChange, onReset, userInput }) {
  return (
    <section id="user-input">
      {FIELDS.map((group, groupIndex) => (
        <div className="input-group" key={groupIndex}>
          {group.map((field) => (
            <p key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                type="number"
                inputMode="decimal"
                min="0"
                step={field.step}
                value={userInput[field.id]}
                onChange={(event) => onChange(field.id, event.target.value)}
                required
              />
            </p>
          ))}
        </div>
      ))}
      <p className="reset-row">
        <button type="button" onClick={onReset}>
          Reset to example values
        </button>
      </p>
    </section>
  );
}

// Two-way binding: the inputs show the state and report every change back.
