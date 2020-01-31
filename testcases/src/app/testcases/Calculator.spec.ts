import { Calculator } from "./Calculator"

// test suites/group
// xdescribe("Testing function calc1 of Calculator", ()=>{
describe("Testing function calc1 of Calculator", ()=>{

    beforeAll(()=>{
        // will execute once before the test cases are executed in a test suite
    }) 

    beforeEach(()=>{
        // will execute before each test in a test suite
    })

    
    
    afterAll(()=>{
         // will execute once after all the test cases are executed in a test suite
    })
    
    afterEach(()=>{
        // will execute after each test in a test suite
    })

    // add test cases
    // xit('Testing calc1 for negative values', ()=>{
    it('Testing calc1 for negative values', ()=>{    
        // test code
        let calc = new Calculator();
        let response = calc.calc1(-5);
        // expect(<real value>).matchers(<Expected value>);
        expect(response).toBe(0);
    })

    it('Testing calc1 for positive values', ()=>{
        let calc = new Calculator();
        let response = calc.calc1(5);
        // expect(<real value>).matchers(<Expected value>);
        expect(response).toBe(6);
    })

})
describe("testing function calc2 of calculator",()=>{
    it('testing calc2 for square root of num',()=>{
        let calci = new Calculator();
        let response = calci.calc2(25);
        expect(response).toBe(5);
    })

    it('testing calc2 for square root of num',()=>{
        let calci = new Calculator();
        let response = calci.calc2(9);
        expect(response).toBe(3);
    })
})