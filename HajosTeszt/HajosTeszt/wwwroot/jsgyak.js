window.onload = function() {
    let hova = document.getElementById("ide");
    hova.innerHTML = "";
    hova.classList.add("egymas_melle");

        for (var o = 0; o < 10; o++) {
            let szam = document.createElement("div");
            hova.appendChild(szam);
            szam.innerText = (o + 1);
            szam.classList.add("doboz");
            szam.style.color=`rgb(${255/10*(10-o)},0,0)`
            
            

        }
   
}

/*var faktorialis = function (n) {
    let ered = 1
    for (let s = 2; s <= n; s++) {
        ered = ered * s;
    }
    return ered;
}

var faktorialisR = (n) => {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n*faktorialisR(n-1)
    }
}

for (i = 0; i < 10; i++) {
    console.log(`${i}:${faktorialisR(i)}`)
}

function számítás() {
    let n = document.getElementById("nTb").Value;
    let n2 = parseInt(n)
    let ered = faktorialis(n)
    document.getElementById("eredmenydiv").innerText = ered

}*/