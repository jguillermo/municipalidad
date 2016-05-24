<?php
$nu_primos=array();
function isprimo( $num ) {
	$primo=true;
	for ($i=2; $i <= sqrt($num); $i++) { 
		if(( $num % $i )==0 ){
			return false;
		}
	}
	return $primo;
}

for ($j=10000; $j <= 99999 ; $j++) {
	if( 
		(substr($j.'', 1,1).substr($j.'', 0,1)) == substr($j.'',-2 ) && // sea capicua
		(strpos(substr($j.'',-2 ), substr($j.'',2,1 ))!== false || substr($j.'',0,2) == substr($j.'',-2 ) )  && // solo 2 digitos 
		(substr($j.'', 0,1)%2 ==0 || substr($j.'', 1,1)%2 ==0 || substr($j.'', 2,1)%2 ==0 )  ) { // // uno par y el otro impar
			if(isprimo($j)) {
				$nu_primos[]=$j;
			}
	}
}
echo array_sum($nu_primos);