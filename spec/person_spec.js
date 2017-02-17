describe("Person", function() {
   var person;


   beforeEach(function() {
      person = new Person({weight: 75, height: 185, unit: "Metric"});
      imperial_person = new Person({weight: 165, height: 6, unit: "Imperial"})
   });

   it("should have weight of 75", function() {
      expect(person.weight).toEqual(75);
   });

   it("should have height of 185", function() {
      expect(person.height).toEqual(185);
   });

   it("should calculate BMI value", function() {
      person.calculate_bmi();
      expect(person.bmiValue).toEqual(21.91);
   });

   it("unit should be metric", function() {
      expect(person.unit).toEqual("Metric");
   });

   it("should have weight of 165", function() {
      expect(imperial_person.weight).toEqual(165);
   });

   it("should have height of 6 inches", function() {
      expect(imperial_person.height).toEqual(6);
   });

   it("should calculate imperial BMI value", function() {
      imperial_person.calculate_bmi();
      expect(imperial_person.bmiValue).toEqual(22.38);
   });

   it("should have a BMI Message", function() {
      person.calculate_bmi();
      expect(person.bmiMessage).toEqual("Normal");
   });
});
