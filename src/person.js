function Person(attr) {
   this.weight = attr.weight;
   this.height = attr.height;
   this.unit = attr.unit;
}

   Person.prototype.calculate_bmi = function() {
      calculator = new BMICalculator();
      if (this.unit == "Metric") {
         calculator.metric_bmi(this);
      } else {
         calculator.imperial_bmi(this);
   }
};
