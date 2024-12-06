let diller = ["Python","JavaScript","C++","Java"];

for (let i = 0 ; i<diller.length; i++){
    let dil = diller[i];
    if (dil.length > 6){
        console.log(dil)
    }
}

let sonuc = diller.includes("Python");
console.log(sonuc)