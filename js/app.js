var app = angular.module('Universidad',[ ]);

app.controller('profesorCtrl',function($scope){

    $scope.profesor = profesorData;   
    $scope.editar = {};
    $scope.mostrarcaja = false;


    $scope.editarProfesor = function(){
        $scope.mostrarcaja = true;
        angular.copy($scope.profesor,$scope.editar);
    }

    $scope.guardarCambio = function(){
        angular.copy($scope.editar,$scope.profesor);
        $scope.editar = {};
        $scope.mostrarcaja = false;
    }

    $scope.cancelarCambios = function(){
        $scope.editar = {};
        $scope.mostrarcaja = false;
    }
});


var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}