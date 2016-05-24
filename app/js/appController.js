(function() {
	'use strict';

	function AdminCtrl($scope, $jgcLayout) {

		$scope.itemenu = [{
			title: 'Dashboard',
			sref: 'sis.dashboard'
		},{
			title: 'Licencias',
			sref: 'sis.licencias'
		}];


		$scope.changePrincipalWest = function() {
			$jgcLayout.getInstance('layout_principal').changeToogleWest();
		}


	}
	angular
		.module('Admin')
		.controller('AdminCtrl', [
			'$scope', '$jgcLayout',
			AdminCtrl
		]);


})();