class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban bialealam!", ["green", "red", "white"])
let japan = new Country("Japan", "Japanese", "Konnichiwa sekai!", ["white", "white", "red"])
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "yellow"])


function SwitchCountry() {
    clean();
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Japan") {
        country = japan;
    }
    else if (input === "Germany") {
        country = germany;
    }
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;   
    document.getElementById("HelloWorld").innerText = country.greeting;
    


    document.getElementById("c1").classList.add(country.colors[0]);


    document.getElementById("c2").classList.add(country.colors[1]);
    document.getElementById("c2").classList.add("centerElement");
    document.getElementById("c2").classList.add("halfWidth");

    document.getElementById("c3").classList.add(country.colors[2]);
    document.getElementById("c3").classList.add("floatLeft");
    document.getElementById("c3").classList.add("halfWidth");
}

function clean(){
    let el = document.getElementById("c1");
    el.classList.remove(...el.classList);
    el = document.getElementById("c2");
    el.classList.remove(...el.classList);
    el = document.getElementById("c3");
    el.classList.remove(...el.classList);
}
