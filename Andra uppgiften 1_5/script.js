let vip = false;
let age = 17; 

    function assignValues () {
    let age = parseInt(document.getElementById ("numberInput").value);
    let vip = document.getElementById ("checkbox").checked;
    console.log("numberInput")
    console.log("checkbox")
    if (vip){
        alert("Welcome in my best VIP customer :)");
    } else if (age>=18) {
            alert("Access granted")    
        }
        else {
            alert ("Acces denied")
        }
    }

document.getElementById("enterBtn").addEventListener("click", assignValues);

