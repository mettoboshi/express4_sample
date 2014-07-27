describe("test", function() {
  var request = require('request');

  it("test1", function(done) {
    request("http://localhost:3000/users/1", function(error, response, body){
      expect(body).toEqual("1");
      done();
    });
  });
  
  it("test2", function(done) {
    request("http://localhost:3000/users/1", function(error, response, body){
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  
});
