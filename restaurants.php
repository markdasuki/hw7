<?php 
	session_start();
	
	//print_r($_SESSION);
	
	if(!isset($_SESSION['user'])){
       header('Location: login.php');
    //echo 'session not set';
		
	}
?>

<!DOCTYPE html>
<html>
  <head>
	<meta charset = "utf-8">
	<title>My 5 Favourite Restaurants</title>
	<link rel="stylesheet" type="test/css" href="ExternalStyle.css">
	<script type="text/javascript"
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHIDSbO4iRBVFrFLt95owPqL-BCEgOXjY"></script>
	<script type="text/javascript" src="button.js?2"></script>
  </head>
  
<body id="body1">
	
<form action="logout.php" method="post">
<input type="submit" value="Log Out">

<?php
unset($_SESSION['name']); 
session_destroy();
?>

</form>
<table>
  <caption>My 5 Favourite Restaurants</caption>
  <tr>
  
    <th>Restaurant</th>
    <th>Picture</th>
    <th>Description</th>		
    <th>Address</th>
    <th>Contact Number</th>
    <th>Rating</th>
    <th>Weekly Schedule</th>
	
  </tr>
  
<?php

	$source = $_GET['source'];
	$file = '';
	
	if($source == 1){
		$file = 'restaurants.json';
	}
	elseif($source == 2){
		$file = 'new_restaurants.json';
	}
	elseif($source == 3){
		$file = 'final_restaurants.json';
	}
	/*
	else{
		
		echo "PLEASE PROVIDE VALID SOURCE NUMBER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
	}
	*/

     function makeTableRow($info) {
			        	$row = 
			        			'<tr id = ' . $info['hint'] . '>' .'<td><a href=' . $info['url'] . '>'	. $info['name'].'</a></td>' .
								'<td id="' . $info['id'] . '">' .
									'<input type="button" value="Picture" id="' . $info['id'] . 'Button' . '" onClick="storeButtonID(' . $info['id'] . ', ' .$info['hint'] . ')"/></td>' .
								'<td>' . $info['type'] . '</td>' .
								'<td>' . $info['address'] . '</td>' .
								'<td>' . $info['phone'] . '</td>' .
								'<td>' . $info['rating'] . '</td>' .
								'<td>';
						$schedule = '';
						foreach ($info['hours'] as $hours) {
							$schedule = $schedule . 
										'<p>' . $hours['day'] . ' ' . 
										'<i>' . $hours['time'] . '</i></p>';
						}
						$row = $row . $schedule .
								'</td>' .
								'</tr>';
						echo $row;
			        }


    $json = file_get_contents('new_restaurants.json');
    $data = json_decode($json, true);
    foreach($data as $index){
        foreach($index as $entry){
        $entry['id'] = preg_replace('/.jpg/','',$entry['picture']);
        $entry['hint'] = preg_replace('/ /','', $entry['hint']);
        makeTableRow($entry);
        }
    }
    
?>
   </table>
        
        <p>This page has been tested in Chrome</p>
</body>
</html>
