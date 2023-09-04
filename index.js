function checkLogin() {
    // In una situazione reale, dovresti confrontare queste informazioni con un database.
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value


//Zona Privata :)    
    if (username === "Admin" && phonenumber ==="#" && email === "admin2010@gmail.com" && password === "dani" ) {

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    }

    if (username === "daniele" && phonenumber ==="#" && email === "danielevaravallo2010@gmail.com" && password === "dani") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }
///////////////////////////////////////////////////////////////////////////





//////////////////////////// family ////////////////////////////////////////////

    if (username === "maria" && phonenumber ==="#" && email === "marytes80@gmail.com" && password === "tessitore") {

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "agostino" && phonenumber ==="#" && email === "agostinovaravallo74@gmail.com" && password === "varavallo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "nicola" && phonenumber ==="#" && email === "nickmilan2002@gmail.com" && password === "varavallo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "salvatore" && phonenumber ==="#" && email === "sasadrago99@gmail.com" && password === "varavallo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

////////////////////////////////////////////////////////////////////////////







///////////////////////// friends //////////////////////////////////////////
    if (username === "Mister" && phonenumber ==="#" && email === "dm155467@gmail.com" && password === "gnam") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "Piaa" && phonenumber ==="#" && email === "greenhead@gmail.com" && password === "Jo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "totor" && phonenumber ==="#" && email === "black_gamer09@gmail.com" && password === "ladr") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "carlotus" && phonenumber ==="#" && email === "carlotus1009@gmail.com" && password === "terrone") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "myriam" && phonenumber ==="#" && email === "cinaspina@gmail.com" && password === "spinacina") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "silvana" && phonenumber ==="#" && email === "alfonsinotime@gmail.com" && password === "alfonsino") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "francesco" && phonenumber ==="#" && email === "pizzamargherita09@gmail.com" && password === "margherita") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }
}
//////////////////////////////////////////////////////////////////////////////    





function accesso() {
// Reindirizza alla pagina di login
window.location.href = "casella.html";
}

function Button1() {
    // Reindirizza alla pagina 
    window.location.href = "#";
    }

function logout() {
    // Rimuovi il nome utente dal localStorage al momento del logout
    localStorage.removeItem("username");
    //funzione
    locate.reload()
}