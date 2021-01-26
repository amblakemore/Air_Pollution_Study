// start
var endPoint = "127.0.0.1:5000/api/v1.0/years/2015"
// var endPoint = {"A":1, "B":2};
d3.json(endPoint).then(function(data) {
    console.log(data);
  });
