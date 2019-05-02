
export function displayNumberAsDollarString(n: number){
    return `\$${n.toFixed(2)}`;
}

export function displayNumberAsPercentage(n: number){
    return `${n.toFixed(0)}%`
}

export function getTipAmountFor(tipPercentAsNumber: number, billAmount: number){
    return billAmount*(tipPercentAsNumber*.01);
}

export function getTotalAmountFor(tipPercentAsNumber: number, billAmount: number) {
    const tipAmount = getTipAmountFor(tipPercentAsNumber, billAmount);
    return billAmount+tipAmount;
}