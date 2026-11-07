import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const { initialInvestment } = input;

  const rows = resultsData.map((yearData) => {
    const investedCapital =
      initialInvestment + yearData.annualInvestment * yearData.year;
    return {
      ...yearData,
      investedCapital,
      totalInterest: yearData.valueEndOfYear - investedCapital,
    };
  });

  const finalYear = rows[rows.length - 1];
  const maxValue = finalYear.valueEndOfYear || 1;

  return (
    <section id="results">
      <div id="summary">
        <p>
          <span className="summary-label">Final value</span>
          <span className="summary-value">
            {formatter.format(finalYear.valueEndOfYear)}
          </span>
        </p>
        <p>
          <span className="summary-label">Total invested</span>
          <span className="summary-value">
            {formatter.format(finalYear.investedCapital)}
          </span>
        </p>
        <p>
          <span className="summary-label">Total interest</span>
          <span className="summary-value">
            {formatter.format(finalYear.totalInterest)}
          </span>
        </p>
      </div>

      <div className="table-wrapper">
        <table id="result">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Investment Value</th>
              <th scope="col">Interest (Year)</th>
              <th scope="col">Total Interest</th>
              <th scope="col">Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td
                  className="value-cell"
                  style={{
                    "--capital": `${(row.investedCapital / maxValue) * 100}%`,
                    "--value": `${(row.valueEndOfYear / maxValue) * 100}%`,
                  }}
                >
                  {formatter.format(row.valueEndOfYear)}
                </td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(row.totalInterest)}</td>
                <td>{formatter.format(row.investedCapital)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
