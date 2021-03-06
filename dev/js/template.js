(function() {angular.module('Admin.template', []).run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('/app/views/dashboard/index%20-%20copia.html',
    "<jgc-card>imagen de portada</jgc-card><div class=row><div class=\"col-xs-6 col-sm-6\"><jgc-card><div class=card-link><a href=\"\" data-ui-sref=sis.licencias-mapa>Licencias</a></div></jgc-card></div></div>"
  );


  $templateCache.put('/app/views/dashboard/index.html',
    "<style>.pantalla-dasboard{\r" +
    "\n" +
    "\tbackground-image: url(\"img/expo/msi_1.jpg\");\r" +
    "\n" +
    "\tbackground-repeat: repeat-x;\r" +
    "\n" +
    "\twidth: 100%;\r" +
    "\n" +
    "\theight: 100%;\r" +
    "\n" +
    "\tposition: relative;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".botonera-principal{\r" +
    "\n" +
    "\tposition: absolute;\r" +
    "\n" +
    "\ttop: 250px;\r" +
    "\n" +
    "\twidth: 100%\r" +
    "\n" +
    "}\r" +
    "\n" +
    "#pantalla-principal > div{\r" +
    "\n" +
    "\theight: 100%;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".pantalla-dasboard div.titulo{\r" +
    "\n" +
    "\tposition: absolute;\r" +
    "\n" +
    "    top: 20px;\r" +
    "\n" +
    "    color: #178635;\r" +
    "\n" +
    "    font-size: 3em;\r" +
    "\n" +
    "    width: 100%;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".pantalla-dasboard .jgc-card .card-btn a {\r" +
    "\n" +
    "    padding: 11px 11px 11px 11px!important;\r" +
    "\n" +
    "}</style><div class=pantalla-dasboard><div class=\"titulo text-center\">SAN ISIDRO</div><div class=botonera-principal><div class=row><div class=\"col-xs-offset-5 col-xs-6\"><jgc-card><div class=card-link><a href=\"\" data-ui-sref=sis.licencias-mapa>Licencias</a></div></jgc-card></div></div><div class=row><div class=\"col-xs-offset-5 col-xs-6\"><jgc-card><div class=card-link><a href=\"\" data-ui-sref=sis.licencias-mapa>Fiscalización</a></div></jgc-card></div></div><div class=row><div class=\"col-xs-offset-5 col-xs-6\"><jgc-card><div class=card-link><a href=\"\" data-ui-sref=sis.licencias-mapa>Presupuesto</a></div></jgc-card></div></div><div class=row><div class=\"col-xs-offset-5 col-xs-6\"><jgc-card><div class=card-link><a href=\"\" data-ui-sref=sis.licencias-mapa>Obras</a></div></jgc-card></div></div><div class=row><div class=\"col-xs-offset-5 col-xs-6\"><jgc-card><div class=card-link><a href=\"\" data-ui-sref=sis.licencias-mapa>Cultura</a></div></jgc-card></div></div></div></div>"
  );


  $templateCache.put('/app/views/licencias/buscar.html',
    "<jgc-tool-bar class=primary><div class=pull-left><div class=btn-tool-bar><a href=\"\" data-ui-sref=sis.dashboard class=\"btn btn-default\"><i class=material-icons>&#xE88A;</i></a></div><div class=title-tool-bar>Licencias</div></div></jgc-tool-bar><jgc-card><jgc-menu-horizontal><div class=jgc-mh-item><a href=\"\" data-ui-sref=sis.licencias-mapa>Mapa</a></div><div class=\"jgc-mh-item active\">Buscar</div><div class=jgc-mh-item><a href=\"\" data-ui-sref=sis.licencias-estadistica>Estadística</a></div></jgc-menu-horizontal></jgc-card><div class=jgc-card><div class=card-section><div class=\"row row-condensed\"><div class=col-xs-12><div><input placeholder=\"buscar por direccíon o negocio\" ng-model=txtbuscar class=form-control></div><div class=jg-label-info>Por ejemplo puedes buscar (Joyeria, Florería, Automotores, ...)</div></div></div></div></div><div class=jgc-card ng-if=\"!item.show && buscando\"><ul class=card-list><li class=item ng-repeat=\"licencia in licencias | filter:txtbuscar | limitTo:5\"><a href=\"\" ng-click=mostrarUbicacion(licencia)><div class=row><div class=col-xs-12>{{licencia.ubicacion}}</div><div class=\"col-xs-12 small\">{{licencia.propietario}}</div><div class=\"col-xs-6 small\">{{licencia.nom_empresa}}</div><div class=\"col-xs-6 small\">{{licencia.giro}}</div></div></a></li></ul></div><div class=jgc-card ng-if=item.show><div ng-if=\"item.tlic=='1'\"><table class=table><tr><td>Propietario</td><td>{{item.propietario}}</td></tr><tr><td>Ubicación</td><td>{{item.ubicacion}}</td></tr><tr><td>Fecha de Emision</td><td>{{item.fec_emision}}</td></tr><tr><td>Nº de expediente</td><td>{{item.n_exp}}</td></tr><tr><td>Tipo</td><td>{{item.tipo | licenciasTipoFilter }}</td></tr></table></div><div ng-if=\"item.tlic=='2'\"><table class=table><tr><td>Empresa</td><td>{{item.nom_empresa}}</td></tr><tr><td>Giro</td><td>{{item.giro}}</td></tr><tr><td>Dirección</td><td>{{item.ubicacion}}</td></tr><tr><td>Fecha de licencia</td><td>{{item.fec_lic}}</td></tr><tr><td>Nº de expediente</td><td>{{item.nro_exp}}</td></tr></table></div></div><div class=jgc-card ng-if=item.show><div jgc-block=\"\" jg-block-type=2><jgc-google-chart-map lat=item.lat lng=item.long name={{item.ubicacion}} responsive=\"\"></jgc-google-chart-map></div></div>"
  );


  $templateCache.put('/app/views/licencias/estadistica.html',
    "<jgc-tool-bar class=primary><div class=pull-left><div class=btn-tool-bar><a href=\"\" data-ui-sref=sis.dashboard class=\"btn btn-default\"><i class=material-icons>&#xE88A;</i></a></div><div class=title-tool-bar>Licencias</div></div></jgc-tool-bar><jgc-card><jgc-menu-horizontal><div class=jgc-mh-item><a href=\"\" data-ui-sref=sis.licencias-mapa>Mapa</a></div><div class=jgc-mh-item><a href=\"\" data-ui-sref=sis.licencias>Buscar</a></div><div class=\"jgc-mh-item active\">Estadística</div></jgc-menu-horizontal></jgc-card><jgc-card><jgc-google-chart type=PieChart options=estadistica.options data=estadistica.data responsive></jgc-google-chart></jgc-card>"
  );


  $templateCache.put('/app/views/licencias/mapa.html',
    "<jgc-tool-bar class=primary><div class=pull-left><div class=btn-tool-bar><a href=\"\" data-ui-sref=sis.dashboard class=\"btn btn-default\"><i class=material-icons>&#xE88A;</i></a></div><div class=title-tool-bar>Licencias</div></div></jgc-tool-bar><jgc-card><jgc-menu-horizontal><div class=\"jgc-mh-item active\">Mapa</div><div class=jgc-mh-item><a href=\"\" data-ui-sref=sis.licencias>Buscar</a></div><div class=jgc-mh-item><a href=\"\" data-ui-sref=sis.licencias-estadistica>Estadística</a></div></jgc-menu-horizontal></jgc-card><jgc-card><jgc-google-chart type=Map options=map.options data=map.data></jgc-google-chart></jgc-card>"
  );


  $templateCache.put('/app/views/sis/layout-admin.html',
    "<jgc-layout jgt-component-id=layout_principal id=pantalla-principal><jgc-layout-west><jgc-tool-bar class=primary><div class=pull-left><div class=\"btn-tool-bar visible-xs-block\"><button class=\"btn btn-default\" ng-click=changePrincipalWest()><i class=material-icons>menu</i></button></div><div class=title-tool-bar>GETMIN</div></div></jgc-tool-bar><jgc-menu items=itemenu></jgc-menu></jgc-layout-west><jgc-layout-center class=jgt-fill><div class=\"content container-fluid jgt-fill\" style=padding-top:0><div ui-view class=jgt-fill></div></div></jgc-layout-center></jgc-layout>"
  );
}]);})();