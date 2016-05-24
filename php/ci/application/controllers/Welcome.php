<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	
	public function index()
	{
		$this->load->database();

		$sql= "
		SELECT 
        '1' as tlic,
        `jj-licencia-edi`.`id`,
        `jj-licencia-edi`.`fec_emision`,
        `jj-licencia-edi`.`n_resolucion`,
        `jj-licencia-edi`.`fec_ingreso_exp`,
        `jj-licencia-edi`.`n_exp`,
        `jj-licencia-edi`.`propietario`,
        `jj-licencia-edi`.`ubicacion`,
        `jj-licencia-edi`.`tipo`,
        `jj-licencia-edi`.`cod_catastro`,
        geocode.`direccion`,
        geocode.`lat`,
        geocode.`long` 
      FROM
        `jj-licencia-edi` 
        INNER JOIN geocode 
          ON `jj-licencia-edi`.`id_lugar` = `geocode`.`id` 
		";
		$query = $this->db->query($sql);

		$rsLicenciaEdificacion=$query->result_array();

    //$jsonLicEdificacion=json_encode($rsLicenciaEdificacion);






    $sql= "
    SELECT 
      '2' as tlic,
      `jj-licencia-fun`.`id`,
      `jj-licencia-fun`.`nro_exp`,
      `jj-licencia-fun`.`fec_exp`,
      `jj-licencia-fun`.`nro_lic`,
      `jj-licencia-fun`.`fec_lic`,
      `jj-licencia-fun`.`nom_empresa`,
      `jj-licencia-fun`.`codigo_ciiu` as tipo,
      `jj-licencia-fun`.`giro`,
      `jj-licencia-fun`.`direccion` as ubicacion,
      `jj-licencia-fun`.`catastral` as cod_catastro,
        geocode.`direccion`,
        geocode.`lat`,
        geocode.`long` 
      FROM
        `jj-licencia-fun` 
        INNER JOIN geocode 
          ON `jj-licencia-fun`.`id_lugar` = `geocode`.`id` 
    ";
    $query = $this->db->query($sql);

    $jsonLic=$query->result_array();


    foreach ($rsLicenciaEdificacion as $key => $value) {
      $jsonLic[]=$value;
    }

    //$jsonLicFuncionamiento=json_encode($rsLicenciaFuncionamiento);

		
		echo "var data=".json_encode($jsonLic).";";

	}
}
