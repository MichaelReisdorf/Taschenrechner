const nummern = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const operatoren = ["plus", "minus", "mal", "geteilt", "gleich", "clear"]

var clicked_id;

function reply_click(clicked_id){
    var clicked_id;
    // alert(clicked_id)
    if (clicked_id == "one") {
        result.innerHTML += "1"
        console.log("Test")
    }else if (clicked_id == "two") {
        result.innerHTML += "2"
        console.log("Test")
    }else if (clicked_id == "three") {
        result.innerHTML += "3"
        console.log("Test")
    }else if (clicked_id == "four") {
        result.innerHTML += "4"
        console.log("Test")
    }else if (clicked_id == "five") {
        result.innerHTML += "5"
        console.log("Test")
    }else if (clicked_id == "six") {
        result.innerHTML += "6"
        console.log("Test")
    }else if (clicked_id == "seven") {
        result.innerHTML += "7"
        console.log("Test")       
    }else if (clicked_id == "eight") {
        result.innerHTML += "8"
        console.log("Test")
    }else if (clicked_id == "nine") {
        result.innerHTML += "9"
        console.log("Test")
    }else if (clicked_id == "null") {
        result.innerHTML += "0"
        console.log("Test")
    }
}
var result = document.getElementById("eingabe");