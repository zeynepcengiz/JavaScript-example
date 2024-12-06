let siparisler =["Kebap","Lahmacun","Döner"];
siparisler.push("Çorba");
console.log("Yeni Siparişler: "+ siparisler);
siparisler.pop();
console.log("Son sipariş silindi.")
let secilen = siparisler.slice(1,3);
console.log("Alınan sipariş: "+ secilen);

let eklenen = siparisler.splice(1,0,"Cacık");

console.log("Son sipariş: ",siparisler)
