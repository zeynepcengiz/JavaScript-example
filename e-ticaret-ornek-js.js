let sepet = [
    {
        urun: "Kitap",
        fiyat: 30,
    },
    {
        urun: "Kalem",
        fiyat: 5,
    },
    {
        urun: "Defter",
        fiyat: 10,
    }
];
sepet.push({urun : "Silgi", fiyat: 3});
console.log(sepet)
let silinen = sepet.pop()
console.log("Son ürun başarıyla silindi.")

let toplam = 0;

for (i=0 ; i< sepet.length; i++){
    toplam += sepet[i].fiyat;
}
console.log("Toplam fiyat: "+ toplam)
