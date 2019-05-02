import { displayNumberAsDollarString, displayNumberAsPercentage, getTipAmountFor, getTotalAmountFor } from './math';

let pctToggles = document.querySelectorAll('.pctToggle');
const billAmountInput = document.getElementById('billAmountInput') as HTMLInputElement;
const tipPercentDiv = document.getElementById('tipAmountDiv') as HTMLInputElement;

export function runApp() {
    let currentPctToggle = 1;
    pctToggles.forEach((sq: HTMLInputElement) => {
        sq.addEventListener('click', pctToggleClick);
    })
    billAmountInput.addEventListener('input', amountChanged)

}

function amountChanged() {
    console.log('Amount changed');
    const inputValue: number = parseFloat(billAmountInput.value);
    if (inputValue < 0) {
        console.log('That is an invalid amount');
        billAmountInput.classList.add('invalidAmount');
        //let amountDiv = document.getElementById('amountDiv') as HTMLDivElement;
        //amountDiv.classList.add('invalidAmount');
    }
    else {
        billAmountInput.classList.remove('invalidAmount');
    }
    updateValueList();
}

function pctToggleClick() {
    let that = this as HTMLLabelElement;
    if (that.classList.contains('active')) {
        return;
    }
    pctToggles.forEach((toggle: HTMLLabelElement) => {
        if (toggle === that) {
            tipPercentDiv.setAttribute('data-percentage', toggle.getAttribute('data-percentage').valueOf());
            toggle.classList.add('active');
        }
        else toggle.classList.remove('active');
    })
    updateValueList();
}

function updateValueList() {
    const billAmountValue: number = parseFloat(billAmountInput.value);
    const tipAmountAsNumber = parseFloat(tipPercentDiv.getAttribute('data-percentage').valueOf());
    setBillAmount(billAmountValue);
    setTipPercentage(billAmountValue, tipAmountAsNumber);
    setTipAmount(billAmountValue, tipAmountAsNumber);
    setTotalToBePaidAmount(billAmountValue, tipAmountAsNumber);
}


function setBillAmount(billAmount: number) {
    let billAmountElement = document.getElementById('billAmount') as HTMLLIElement;
    const prefixText = 'Bill Amount: '
    if (billAmount > 0) {
        billAmountElement.innerText = prefixText + displayNumberAsDollarString(billAmount);
    }
    else {
        billAmountElement.innerText = prefixText;
    }
}

function setTipPercentage(billAmount: number, tipAmountAsNumber: number) {
    let tipPercentageElement = document.getElementById('tipPercentage') as HTMLLIElement;
    const prefixText = 'Tip Percentage: ';
    if (billAmount > 0) {
        tipPercentageElement.innerText = prefixText + displayNumberAsPercentage(tipAmountAsNumber);
    }
    else {
        tipPercentageElement.innerText = prefixText;
    }
}

function setTipAmount(billAmount: number, tipAmountAsNumber: number) {
    let amountToTipElement = document.getElementById('amountToTip') as HTMLLIElement;
    const prefixText = 'Amount of Tip: '
    if (billAmount > 0) {

        amountToTipElement.innerText = prefixText + displayNumberAsDollarString(getTipAmountFor(tipAmountAsNumber, billAmount));
    }
    else {
        amountToTipElement.innerText = prefixText;
    }
}

function setTotalToBePaidAmount(billAmount: number, tipAmountAsNumber: number) {
    let totalToBePaidElement = document.getElementById('totalToBePaid') as HTMLLIElement;
    const prefixText = 'Total to be Paid: '
    if (billAmount > 0) {
        totalToBePaidElement.innerText = prefixText + displayNumberAsDollarString(getTotalAmountFor(tipAmountAsNumber, billAmount));
    }
    else {
        totalToBePaidElement.innerText = prefixText;
    }
}
