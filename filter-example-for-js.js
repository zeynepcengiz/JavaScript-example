let dizi = [10,11,30,15,50]
let cift = [];
for (let i=0; i<=dizi.length;i++){
    let sayi = dizi[i]
    if (sayi % 2 == 0){
        cift.push(sayi);
    }
}

console.log(cift)