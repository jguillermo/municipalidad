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
if (($gestor = fopen("../datos/licencia_de_funcionamiento.csv", "r")) !== FALSE) {
    while (($datos = fgetcsv($gestor, 1000, ",")) !== FALSE) {
    	//var_dump($datos);exit();
    	if($fila!=1){
        	

        if(!isset($datos[8])) {
            var_dump($datos);exit();
        }

    	


        $nro_exp=$datos[0];
        $fec_exp=$datos[1];
        $nro_lic=$datos[2];
        $fec_lic=$datos[3];
        $nom_empresa=utf8_encode($datos[4]);
        $codigo_ciiu=substr($datos[5], 0,1);
        $giro=utf8_encode($datos[6]);
        $direccion=utf8_encode($datos[7]);
        $catastral=$datos[8];

        
        
        

        	$values.="(
        '{$nro_exp}',
        '{$fec_exp}',
        '{$nro_lic}',
        '{$fec_lic}',
        '{$nom_empresa}',
        '{$codigo_ciiu}',
        '{$giro}',
        '{$direccion}',
        '{$catastral}'
        ),";

    	}
		$fila++;
    }
    fclose($gestor);



        
        
      
       
        $values=rtrim($values,",");
        
        
        echo $sql="TRUNCATE TABLE  `jj-licencia-fun`;
        INSERT INTO `wread`.`jj-licencia-fun`(`nro_exp`,
             `fec_exp`,
             `nro_lic`,
             `fec_lic`,
             `nom_empresa`,
             `codigo_ciiu`,
             `giro`,
             `direccion`,
             `catastral`)VALUES $values ;
        
        ";

}




        
        
        
	?>
</body>
</html>
