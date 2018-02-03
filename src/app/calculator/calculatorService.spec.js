describe('Test', function() {
    
    beforeEach(angular.mock.module('angularApp'));

    it('should calculate simple interest', inject(function(calculatorService){ 
        expect( calculatorService.calculateSimpleAmount(1000, 0.08, 1)).toEqual(1080);
        expect( calculatorService.calculateSimpleAmount(50, 0.08, 1)).toEqual(54);
        expect( calculatorService.calculateSimpleAmount(123, 0.20, 1)).toEqual(147.6);
        expect( calculatorService.calculateSimpleAmount(150, 0.13, 15)).toEqual(442.5);
    }));

    it('calculate simple interest should only calculate if numbers', inject(function(calculatorService){ 
        expect( calculatorService.calculateSimpleAmount('1000', 0.08, 1)).toEqual(0);
        expect( calculatorService.calculateSimpleAmount(1000, '0.08', '1')).toEqual(0);
        expect( calculatorService.calculateSimpleAmount('1000', '0.08', '1')).toEqual(0);
        expect( calculatorService.calculateSimpleAmount('1000', '0.08', '1')).toEqual(0);
        expect( calculatorService.calculateSimpleAmount(true, undefined, 2)).toEqual(0);
    }));
    

    it('should calculate compound interest', inject(function(calculatorService){
        expect( calculatorService.calculateCompoundAmount(1000, 8, 5, 1)).toEqual(1469.3280768000004);
        expect( calculatorService.calculateCompoundAmount(150, 13, 15, 1)).toEqual(938.140556654591);
        expect( calculatorService.calculateCompoundAmount(500, 20, 10, 2)).toEqual(3363.7499746628046);
        expect( calculatorService.calculateCompoundAmount(80, 15, 5, 12)).toEqual(168.57450775609914);
    }));


    it('should calculate compound interest only if numbers', inject(function(calculatorService){
        expect( calculatorService.calculateCompoundAmount('1000', 8, 5, 1)).toEqual(0);
        expect( calculatorService.calculateCompoundAmount(150, '13', 15, 1)).toEqual(0);
        expect( calculatorService.calculateCompoundAmount(500, 20, '10', 2)).toEqual(0);
        expect( calculatorService.calculateCompoundAmount(false, null, undefined, 2)).toEqual(0);
    }));
});