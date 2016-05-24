(function() {
    'use strict';


    /**
     * Main Controller for the Angular Material Starter App
     */
    function LicenciasCtrl($scope, licenciasService,$stateParams) {

        //console.log($stateParams.ida);
        //console.log($stateParams.idb);

        if($stateParams.ida!="" && $stateParams.idb!=""){
            licenciasService.getItemById($stateParams.ida,$stateParams.idb).then(function(item){
                
                mostrarubicacion(item);
            },function(){
                console.log('error al buscar');
            });
        }

        
        $scope.item={show:false};

        $scope.txtbuscar='';

        $scope.buscando=false;
      

        $scope.licencias=[];

        licenciasService.getList().then(function(rpta){
            //console.log(rpta);
            $scope.licencias=rpta;
        });


        function mostrarubicacion(item){
            //console.log(item);
            //$scope.txtbuscar=item.ubicacion;


            $scope.item=item;
            $scope.item.show=true;
            $scope.buscando=false;

        }



        $scope.mostrarUbicacion=mostrarubicacion;


        $scope.$watch('txtbuscar', function(newValue, oldValue) {
            $scope.item={show:false};
            if(typeof newValue == "string"){
                $scope.buscando=(newValue.length==0)? false: true;
            }
            
        });


    }
    angular.module('Admin.Licencias')
        .controller('LicenciasCtrl', [
             '$scope','licenciasService','$stateParams',
            LicenciasCtrl
        ]);



})();


(function() {
    'use strict';

    /**
     * Main Controller for the Angular Material Starter App
     */
    function LicenciasMapaCtrl($scope, licenciasService) {

        licenciasService.getDataMap().then(function(rpta){

            //console.log(rpta);
            $scope.map = {
                options: {
                        mapType: 'normal',
                        zoomLevel: 15,
                        //useMapTypeControl: true,
                        showTip: true,
                        icons:licenciasService.getDataMaker()
                    },
                    data: rpta
                }
        });
    }

    angular.module('Admin.Licencias')
        .controller('LicenciasMapaCtrl', [
            '$scope', 'licenciasService',
            LicenciasMapaCtrl
        ]);



})();



(function() {
    'use strict';

    /**
     * Main Controller for the Angular Material Starter App
     */
    function LicenciasEstadisticaCtrl($scope, licenciasService) {

        licenciasService.getDataEstadistica().then(function(rpta){
            $scope.estadistica = {
                options: {
                    title: 'Licencias de edificación :',
                    //backgroundColor:'red'
                    //width: '290',
                    //height: '200'
                },
                data: rpta
            }
            
        });
    }

    angular.module('Admin.Licencias')
        .controller('LicenciasEstadisticaCtrl', [
            '$scope', 'licenciasService',
            LicenciasEstadisticaCtrl
        ]);



})();

