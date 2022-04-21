
  
  fetch("https://sfrs-j75dy.ondigitalocean.app/api/listDistricts", {method:'POST'})
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        DiplayData(json);
        console.log(ConsoleDisplay(json));
        console.log(json);
    })
    .catch(error => console.log('error', error));
    // Displaying data on an HTML table
    function  DiplayData(json){
        var jsonData = json;
        var HtmlTable = document.getElementById("TableInfo");
        HtmlTable.innerHTML = '<thead> <tr><th>District</th><th>Province</th></tr></thead>';
        for(var i = 0; i < jsonData.data.length; i++)
        {
            HtmlTable.innerHTML += '<tr><td>'+jsonData.data[i].name+'</td><td>'+jsonData.data[i].province.name+'</td></tr>';                  
        }
        return "Data diplayed successfully";
    }

    //Display data on the console 
    function ConsoleDisplay(json)
    {
        var jsonObj = json;
        var ConsolMsg = "District---------------Province\n\n";
        for(var i = 0; i < jsonObj.data.length; i++){
            ConsolMsg += jsonObj.data[i].name +"---------------"+jsonObj.data[i].province.name+"\n";

        }
        return ConsolMsg;
    }
    // diplaying metropoliten only
    function MetroDisplay(json){
        var jsonData = json;
        var HtmlTable = document.getElementById("TableInfo");
        HtmlTable.innerHTML = ' <tr><th>District</th><th>Province</th></tr>';
       
        for(var i = 0; i < jsonData.data.length; i++)
        {
            HtmlTable.innerHTML += '<tr><td>'+jsonData.data[i].name+'</td><td>'+jsonData.data[i].province.name+'</td></tr>';                  
        }
        return "Metro Data diplayed successfully";
    }