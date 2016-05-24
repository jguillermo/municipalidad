<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>


<?php
$fila = 1;


		$values="";
if (($gestor = fopen("../datos/licencia_de_edificacion.csv", "r")) !== FALSE) {
    while (($datos = fgetcsv($gestor, 1000, ",")) !== FALSE) {
    	//var_dump($datos);exit();
    	if($fila!=1){
        	//foreach ($datos as $key => $value) {
        	//	$rowValue="";
           	//	foreach ($row as $val) {
           	//	  $valf=str_replace("'", "\\'",$val );
           	//	  $rowValue.="'{$valf}',";
           	//	}
           	//	$rowValue=rtrim($rowValue,",");
           	//	$values.="({$rowValue}),";
        	//}

        if(!isset($datos[12])) {
            var_dump($datos);exit();
        }

    	$fec_emision=$datos[0];
        $n_resolucion=$datos[1];
        $fec_ingreso_exp=$datos[2];
        $n_exp=$datos[3];
        $propietario=utf8_encode($datos[4]);
        $ubicacion=utf8_encode($datos[5]);
        $cod_catastro=$datos[12];

        
        
        $tipo=0;

    	if(trim($datos[6])!='') {
    		$tipo=1;
    	}elseif(trim($datos[7])!=''){
    		$tipo=2;
    	}elseif(trim($datos[8])!=''){
    		$tipo=3;
    	}elseif(trim($datos[9])!=''){
    		$tipo=4;
    	}elseif(trim($datos[10])!=''){
    		$tipo=5;
    	}elseif(trim($datos[11])!=''){
    		$tipo=6;
    	}elseif(trim($datos[12])!=''){
    		$tipo=7;
    	}

        	$values.="(
        '{$fec_emision}',
        '{$n_resolucion}',
        '{$fec_ingreso_exp}',
        '{$n_exp}',
        '{$propietario}',
        '{$ubicacion}',
        '{$cod_catastro}',
        '{$tipo}'
        ),";

    	}
		$fila++;
    }
    fclose($gestor);



        
        
      
       
        $values=rtrim($values,",");
        
        
        echo $sql="TRUNCATE TABLE  `jj-licencia-edi`;
        INSERT INTO `wread`.`jj-licencia-edi`(`fec_emision`,
             `n_resolucion`,
             `fec_ingreso_exp`,
             `n_exp`,
             `propietario`,
             `ubicacion`,
             `cod_catastro`,
             `tipo`)VALUES $values ;
        
        ";

}




        
        
        
	?>
</body>
</html>
