let filmler = ["Matrix","Inception","Interstellar","Joker"];
filmler.sort();
console.log("Alfabetik Sıralama: "+ filmler);

let arafilm = "Matrix";
let bul = false;

for (let i = 0 ; i> filmler.length;i++){
    if (filmler[i] === arafilm){
        bul =true;
    }
}

if (bul) {
    console.log("Aradığını film : "+ arafilm);
} else {
    console.log(arafilm+ " aradığınız film bulunmamaktadır.")
}

let sil = "Joker";
for (let i = 0; i <filmler.length; i++){
    filmler.splice(i,1);
}

console.log("Son film: "+ filmler)
