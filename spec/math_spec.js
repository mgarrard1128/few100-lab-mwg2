import { displayNumberAsDollarString, displayNumberAsPercentage, getTipAmountFor, getTotalAmountFor } from '../src/math';


describe('formatting', () => {

    it('displays a whole number as a dollar amount', () => {
        expect(displayNumberAsDollarString(12)).toBe('$12.00');
    });

    it('displays a decimal less 1 as a dollar amount', () => {
        expect(displayNumberAsDollarString(.03)).toBe('$0.03');
    });
    
    it('displays a decimal greater than 1 as a dollar amount', () => {
        expect(displayNumberAsDollarString(11.03)).toBe('$11.03');
    });
    
    it('displays a decimal to 5 digits as a dollar amount', () => {
        expect(displayNumberAsDollarString(11.031435)).toBe('$11.03');
    });

    it('displays a whole number as a percent', () => {
        expect(displayNumberAsPercentage(12)).toBe('12%')
    });

    it('displays a decimal less than one as a percent', () => {
        expect(displayNumberAsPercentage(.06)).toBe('0%')
    });
    
    it('displays a decimal greater than one as a percent', () => {
        expect(displayNumberAsPercentage(2.2)).toBe('2%')
    });
    
}); 

describe('Tip calculations', () => {
    
    it('gets the tip amount', () => {
        expect(getTipAmountFor(12, 100)).toBe(12)
    });

    it('gets the total amount including tip', () => {
        expect(getTotalAmountFor(12, 100)).toBe(112)
    });
});

