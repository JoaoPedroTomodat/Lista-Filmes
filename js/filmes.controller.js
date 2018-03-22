angular.module("Filmes").controller("FilmesController", function ($scope){
    $scope.titulo = "Filmes que já Assisti";
    $scope.filmes = [
        {
            id: "123",
            titulo: "Deadpool",
            ano: 2016,
            produtora: "fox",
            sinopse: "sinopse",
            cartaz: "imagem",
        }
    ];

    $scope.novoFilme = {};

    $scope.removerFilme = function(id) {
        angular.forEach($scope.filmes, function(filme, i){
            if(filme.id == id){
                $scope.filmes.splice(i, 1);
            }
         });
    }

    $scope.adicionarFilme = function(){
        var filme = angular.copy($scope.novoFilme);
        filme.id = Date.now();
        $scope.filmes.push(filme);

        $scope.novoFilme = {};
    }
});