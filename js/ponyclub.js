var app = angular.module("poneyApp", []);

app.controller("ListController", function($http, $log) {
  var controller = this;
  controller.poneys = [];
  $http.get("https://ponies-nbwns.c9users.io/ponies")
  //reussi
  .then(function(response){
    $log.log("success", response.data);
    controller.poneys = response.data;
    
    $log.searchValue="";
  })
  //erreur
  .catch(function(){
    $log.log("error")
  })
  /*$http.post("https://ponies-nbwns.c9users.io/ponies",
  {
      description : horse.description,
      name : horse.name
    }
  )

  .then(function(response){
    $log.log("success", response.data);
  })*/
});


/*https://ponies-nbwns.c9users.io/pony
 controller.addPoney= function () {
        controller.poneys.push({ text: controller.namePoney, done: false });
        controller.description = '';
    };*/