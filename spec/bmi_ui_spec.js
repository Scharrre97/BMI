describe('BMI_UI - index.html', function() {
   beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#weight').val('75');
      $('#height').val('185');
      $('#calculate').trigger('click');
   });

   xit("displays BMI Value", function() {
      expect($('#motherfuckers').text()).toBe('Your BMI is 21.91');
   });

   it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Normal');
   });
});
