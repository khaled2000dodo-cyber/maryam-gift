function checkPassword(){

    let password = document.getElementById("password").value;

    if(password === "NONO7-11"){

       window.location.href = "gift.html";
    }

    else{

        document.getElementById("message").innerHTML =
        "❌ كلمة السر غير صحيحة";

    }

}