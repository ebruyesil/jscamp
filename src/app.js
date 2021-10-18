console.log("Merhaba Kodlama.io")

let dolarDun = 9.20

let dolarBugün = 9.30


{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 const olduğu için sabit kalmalı değiştiremezsin

console.log(euroDun)

//birden fazla değişken tutmak için arraylarden yararlanıyoruz

//camelCasing (kelimenin ilk harfi küçük ikinci kelimenin ilk harfi büyük)
//PascalCasing(kelimelerin ilk harfleri büyük)
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
//react?
// kaç tane gelicek bilmiyoruz bu konut şeyleri o yüzden for
console.log("<ul>")
for(let i = 0; i < konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
//  <ul>
//      <li>Konut Kredisi</li>
//      <li>Emlak Konut Kredisi</li>
//      <li>Kamu Konut Kredisi</li>
//  </ul>
console.log(konutKredileri)