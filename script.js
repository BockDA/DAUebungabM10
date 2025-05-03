let ColorArray = [
    "#FC71FF", // pink
    "#6E52FF", // bluish-purple
    "#9327FF", // light purple
    "#FFBB2B", // yellow
    "#FF4646", // red
    "#00BEE8", // light blue / mint
    "#0038FF", // dark blue
    "#FF7A00", // orange
    "#1FD7C1", // turquoise
    "#462F8A", // dark purple
    "#6e6b6dcc", // grey
];

let variable1 = 45;

function main() {
    let element = document.getElementsByClassName('counter');
    let arr = Array.from(element);
    arr.forEach((div, i) => {
        div.innerHTML = i;
        div.style.backgroundColor = divColor(i);
    })
}



function divColor(index) {
    return ColorArray[index];
}



class Testclass {
    a = 0
    b = 1

    va2
    va3

    constructor(va1) {
        this.va2 = va1;
        this.va3 = 67;
        console.log("Starte die Classe");
        console.log("Inhalt Variabel 1", va1)
        console.log("Inhalt Variabel 2", this.va2)
    }


    mehrfach(inhalt) {
        console.log("Ausgabe v2 ", inhalt);
        console.log("Ausgabe va3 ", this.va3);
    }

}


let test = new Testclass(variable1);

test.mehrfach(10);



