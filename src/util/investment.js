// 이 함수는 JS 객체를 인수로 받습니다
// 객체는 다음 속성을 포함해야 합니다
// - initialInvestment: 초기 투자 금액
// - annualInvestment: 매년 투자하는 금액
// - expectedReturn: 예상 연간 수익률
// - duration: 투자 기간 (년 단위)
export function calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1, // 연도 식별자
            interest: interestEarnedInYear, // 해당 연도에 발생한 이자 금액
            valueEndOfYear: investmentValue, // 해당 연도 말 투자 가치
            annualInvestment: annualInvestment, // 해당 연도에 추가된 투자 금액
        });
    }

    return annualData;
}

// 브라우저에서 제공하는 Intl API를 사용하여 포매터 객체를 생성합니다
// 이 객체는 "format()" 메서드를 제공하며, 숫자를 통화 형식으로 변환하는 데 사용됩니다
// 사용 예시: formatter.format(1000) => "$1,000" 반환
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
