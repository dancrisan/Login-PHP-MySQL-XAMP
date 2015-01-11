function ajax_post(){
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "my_parse_file.php";
    var username = document.getElementById('usr').value;
    var password = document.getElementById('pwd').value;
    var vars = "firstname="+fn+"&lastname="+ln;
//var foo = '{ "prop": "val" }';    
	hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
   if(hr.readyState == 4 && hr.status == 200) {
   var return_data = hr.responseText;
document.getElementById("status").innerHTML = return_data;
   }
    }
    // Send the data to PHP now... and wait for response to update the status div
//var vars = JSON.stringify({"&firstname=":fn, "&lastname=":ln})
var JSONObject = new Object;
    JSONObject.firstname = fn;
    JSONObject.lastname = ln;
 
    JSONstring = JSON.stringify(JSONObject);

    hr.send(JSONstring); // Actually execute the request
    document.getElementById("status").innerHTML = "processing...";
}