describe("BMICalculator", function() {
   var claculator;
   var person;
   var imperial_person;


   beforeEach(function() {
      person = new Person({weight: 75, height: 185});
      calculator = new BMICalculator();
      imperial_person = new Person({weight: 165, height: 6});
   });

   it("calculates BMI for a person using metric method", function() {
      calculator.metric_bmi(person);
      expect(person.bmiValue).toEqual(21.91);
   });

   it("calculate BMI for a person using imperial method", function() {
      calculator.imperial_bmi(imperial_person);
      expect(imperial_person.bmiValue).toEqual(22.38);
   });
});
