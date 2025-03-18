import { calculateInvestmentResults, formatter } from './util/investment';

function App() {
    function handleCalculate() {
        const initialInvestment = Number(document.getElementById('initial-investment').value);
        const annualInvestment = Number(document.getElementById('annual-investment').value);
        const expectedReturn = Number(document.getElementById('expected-return').value);
        const duration = Number(document.getElementById('duration').value);

        const annualData = calculateInvestmentResults({
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration,
        });

        const resultElement = document.getElementById('result').querySelector('tbody');
        resultElement.innerHTML = '';

        annualData.forEach((data) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.year}</td>
                <td>${formatter.format(data.valueEndOfYear)}</td>
                <td>${formatter.format(data.interest)}</td>
                <td>${formatter.format(data.annualInvestment)}</td>
                <td>${formatter.format(data.valueEndOfYear - data.annualInvestment)}</td>
            `;
            resultElement.appendChild(row);
        });
    }

    return (
        <>
            <header id="header">
                <img src="/src/assets/investment-calculator-logo.png" alt="" />
                <h1>React Investment Calculator</h1>
            </header>

            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label htmlFor="initial-investment">Initial Investment:</label>
                        <input type="number" id="initial-investment" onChange={handleCalculate} />
                    </div>

                    <div>
                        <label htmlFor="annual-investment">ANNUAL Investment:</label>
                        <input type="number" id="annual-investment" onChange={handleCalculate} />
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label htmlFor="expected-return">EXPECTED RETURN</label>
                        <input type="number" id="expected-return" onChange={handleCalculate} />
                    </div>

                    <div>
                        <label htmlFor="duration">duration:</label>
                        <input type="number" id="duration" onChange={handleCalculate} />
                    </div>
                </div>
            </div>

            <div id="result" className="center">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Invesment Value</th>
                            <th>Interest(Year)</th>
                            <th>Invested Capital</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </>
    );
}

export default App;
