

const json_file = "../cards_test.json"


document.getElementById("submit-button").onclick = function() {
    var name = document.getElementById("cardName").value
    var tags = document.getElementById("tags").value
    //var iconUrl = "../Icons/" + document.getElementById("iconUrl").value
    var iconUrl = "test"

    var jsonData =  {"name": name,
                    "tags": tags,
                    "iconUrl": iconUrl,
                    }
    var jsonName = JSON.stringify(jsonData);
    console.log(jsonName)

}