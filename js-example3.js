let notlar = [60,80,50,95,40];

let maxNote = Math.max(...notlar);
console.log("En yüksek not: ",maxNote);
let minNote = Math.min(...notlar);
console.log("En düşük not: ",minNote);

let toplam = 0;
for (let i = 0 ; i<notlar.length;i++){
    toplam += notlar[i]
}

let ort = toplam / notlar.length;
console.log("Sınıf ortalaması: "+ort);

let gecenler =[];
let kalanlar = [];

for (let i = 0 ; i<notlar.length; i++){
    if (notlar[i]>50){
        gecenler.push(notlar[i]);
    }else {
        kalanlar.push(notlar[i])
    }
}

console.log("Geçenler: "+ gecenler);
console.log("Kalanlar: "+ kalanlar)