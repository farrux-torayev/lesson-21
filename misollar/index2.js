// class Moshina {
//   constructor(name, year, model) {
//     this.name = name;
//     this.year = year;
//     this.model = model;
//   dvigatelniYoq() {
//     console.log("Dvigatel ishga tushdi");
//   }
//   carInformation() {
//     console.log(this.name, this.year, this.model);
//   }
// }

// const car = new Moshina("Mersedes-Benz", 1992 + "yil", "W-124");
// car.carInformation();
// car.dvigatelniYoq()
// car.kalitniBura()

// class Kitob {
//   constructor(name, writer, year, page) {
//     this.name = name;
//     this.writer = writer;
//     this.year = year;
//     this.page = page;
//   }
//   openPage() {
//     console.log("Kecha va kunduz romanining 272-sahifasi ochildi");
//   }

//   firstPart() {
//     console.log("Birinchi qismi „Kecha“ 1933-1934-yillarda Moskvada yozilgan.");
//   }
//   kitobMalumoti() {
//     console.log(this.name, this.writer, this.year, this.page);
//   }
// }

// const book = new Kitob(
//   "Kecha va kunduz",
//   "Abdulhamid Choʻlpon",
//   2000 + "-yil",
//   272 + "ta sahifadan iborat"
// );
// book.kitobMalumoti();
// book.firstPart();
// book.openPage();

// class Talaba {
//   constructor(name, course, semester) {
//     this.name = name;
//     this.course = course;
//     this.semester = semester;
//   }
//   oquvVaqti(b) {
//     const a = 1.5   // malumot uchun 1 para 1.5 soat
//     console.log(this.name, "bir kunda ", a*b +" soat o'qiydi bu", b,"para degani" );

//     return a*b;

//   }
//   talabaMalumoti() {
//     console.log(this.name, this.course, this.semester);
//   }
// }

// const student = new Talaba("Farrux",4 + "-kurs","hozir " + 7 + "-smestaerda o'qiydi"
// );

// student.talabaMalumoti();
// student.oquvVaqti(); // b ni kititing
// console.log();

// class Uyhayvoni {
//   constructor(name, young, weight,type) {
//     this.name = name;
//     this.young = young;
//     this.weight = weight;
//     this.type = type;
//   }
//   ovqatBer() {
//     console.log(this.name+"ga" , "ovqat berildi");
//   }

//   oyinOynash() {
//     console.log(this.name, "o'ynayabdi");
//   }
//   petInformation() {
//     console.log(this.name, this.young, this.weight, this.type);
//   }
// }

// const pet = new Uyhayvoni("Pit bull", 2+" yosh", 30+" kg" , "American XL bully" );
// pet.petInformation()
// pet.oyinOynash()
// pet.ovqatBer()

// class Savdo {
//   constructor() {
//     this.maxsulotlar = [];
//   }
//   maxsulotQosh(maxsulot) {
//     this.maxsulotlar.push(maxsulot);
//     console.log(maxsulot+" savatchaga qoshildi");
//   }

//   savathajmi() {
//     return this.maxsulotlar.length;
//   }
//   maxsulotolindi(maxsulot) {
//     this.maxsulotlar.shift(maxsulot);
//     console.log(maxsulot+" olindi");
//   }
// }
// const savatcha = new Savdo();
// savatcha.maxsulotQosh("olma");
// savatcha.maxsulotQosh("banan");
// // savatcha.maxsulotolindi("banan");
// // savatcha.maxsulotolindi("banan");
// console.log("Savatchada "+ savatcha.savathajmi()+ ' maxsulot bor');

// class Bank {
//   #pinkod;
//   constructor(name, id, amount, pinkod) {
//     this.name = name;
//     this.id = id;
//     this.amount = amount;
//     this.#pinkod = pinkod;
//   }
//   pulQosh(amount) {
//     this.amount += amount;
//     console.log(amount);
//   }
//   pulOlish(amount, pinkod) {
//     if (pinkod === this.#pinkod) {
//       this.amount -= amount;
//     } else {
//       console.log("parolni xato kiritdingiz!!!");
//     }
//   }
// }

// const person = new Bank("Ali", 5623470, 4000, 4444);
// // person.pulQosh(1000)
// person.pulOlish(1000,4444)

// console.log(person.amount);

// class Kutubxona {
//   constructor() {
//     this.kitoblar = [];
//   }
//   kitobQosh(kitob) {
//     this.kitoblar.push(kitob);
//     console.log(kitob + " Kutubxonaga qoshildi");
//   }

//   kutubxonaHajmi() {
//     return this.kitoblar.length;
//   }
//   kitobolindi(nomi) {
//     if (nomi === "Kecha va Kunduz") {
//       console.log(nomi+" kitobi kutubxonamizda bor");
//     } else {
//       console.log(nomi+" shu asarga talab ko'pligidan olib ketilgan");
//     }
//   }
// }

// const books = new Kutubxona();
// books.kitobQosh("O'tkir Xoshimov");
// books.kitobolindi("Kech");
// console.log("Kutubxonamizda " + books.kutubxonaHajmi()+"ta" + " kitob bor");

// class Kundalik {
//   constructor() {
//     this.jadvallar = [];
//   }
//   jadvalQosh(name, vaqt) {
//     this.jadvallar.push({name, vaqt});
//     console.log(name, vaqt, "yangi tartib qoshildi");
//   }
//   jadvalKorish() {
//     this.jadvallar.forEach((tartib, index ) => {
//       console.log(index+1 ,tartib.name, tartib.vaqt);
//     });
//   }
// }
// const meningJadvalim = new Kundalik();
// meningJadvalim.jadvalQosh("sport","9:00");
// meningJadvalim.jadvalQosh("matmatika","18:00");
// meningJadvalim.jadvalKorish()

// class Yetkazish {
//   constructor() {
//     this.buyurtmalar = [];
//   }
//   buyurtmaYarat(maxsulot) {
//     this.buyurtmalar.push(maxsulot);
//     console.log(maxsulot, "yangi buyurtma qoshildi");
//   }
//   buyurtmaTekshir(buyurtmaid) {
//     if (buyurtmaid === 15) {
//       console.log("shu yerda");
//     } else {
//       console.log("ketgan");
//     }
//   }
// }
// const buyurtma = new Yetkazish();
// buyurtma.buyurtmaYarat("toshkrntga")
// buyurtma.buyurtmaTekshir(5)

// class Taksis { // ozgartirdim oyin qahramonini taksisga
//   constructor() {
//     this.yonalishlar = [];
//   }
//   yunalishgaBor(tomon) {
//     if (tomon === "Qashqadaryo") {
//       console.log(tomon, " ga qarab yo'lga chiqdi");
//     } else {
//       console.log("Taksiparkda odam olyabdi");
//     }
//   }
//   yolgaChiq() {
//     console.log("yo'lga chiqdi");
//   }
// }
// const taksi = new Taksis();
// taksi.yunalishgaBor("Qashqadaryo");
// taksi.yolgaChiq();

// class aqilliUy {
//   constructor() {
//     this.qurilmalar = [];
//   }
//   qurilmaBoshqar(nomi, holati) {
//     if ((nomi === "Alisa", holati === "yaxshi")) {
//       console.log(nomi, " sizni eshitadi", holati + " ishlayabdi");
//     } else {
//       console.log("o'chdi");
//     }
//   }
//   qurilmaQosh(nomi) {
//     this.qurilmalar.push({ nomi });
//     console.log("Yangi " + nomi + " nomli qurilma qoshildi.");
//   }
//   jamiQurilmalar() {
//     this.qurilmalar.forEach((qurilma, index) => {
//       console.log(index + 1, qurilma.nomi, "qurilmasi bor");
//     });
//   }
// }
// const qurilma = new aqilliUy();
// qurilma.qurilmaBoshqar("Alisa", "yaxshi");
// qurilma.qurilmaQosh("samsung");
// qurilma.jamiQurilmalar();

// class internetDars {
//   constructor() {
//     this.darslar = [];
//   }
//   talabaQosh(ism) {
//     this.darslar.push({ ism });
//     console.log("Darsga", ism + " qoshildi");
//   }
//   darsTamomla(dars) {
//     if (dars === 15) {
//       console.log("Dars tugagan tez orada boshqasi dars boshlanadi");
//     } else {
//       console.log("Dars davom etyabdi");
//     }
//   }
// }
// const talaba = new internetDars()
// talaba.talabaQosh("vali")
// talaba.darsTamomla(15)

// class Sarmoya {
//   constructor() {
//     this.sarmoyalar = [];
//   }
//   sarmoyaQosh(tur, miqdor) {
//     if ((miqdor === "number", miqdor > 0)) {
//       this.sarmoyalar.push({tur, miqdor});
//     } else {
//       console.log("iltimos musbat son kiriting");
//     }
//   }
//   jamiSarmoya() {
//     this.sarmoyalar.forEach((jami, index) => {
//       console.log(index + 1, jami.tur, jami.miqdor);
//       return this.sarmoyalar.reduce((jami, miqdor) => jami + miqdor, 0);
//     });
//   }
// }
// const sarmoya = new Sarmoya();
// sarmoya.sarmoyaQosh("moshina", 1000);
// sarmoya.sarmoyaQosh("dfghj", 1);
// console.log(jamiSarmoya());

// class Xabar {
//   constructor() {
//     this.xabarlar = [];
//   }
//   xabarYubor(ism) {
//     this.xabarlar.push({ ism });
//     console.log("Darsga", ism + " qoshildi");
//   }
//   xabarYubor(foydalanuvchi, xabar) {
//     if ((foydalanuvchi === "farrux", xabar === "salom")) {
//       console.log("xabar yuborildi");
//     } else {
//       console.log("xabar yuborilmadi");
//     }
//   }
//   kelganXabarlarniKorish(xabar) {
//     if (xabar === 1) {
//       console.log("sizda xabar bor");
//     } else {
//       console.log("sizda xabar yuq");
//     }
//   }
// }
// const sms = new Xabar();
// sms.xabarYubor("farrux", "salom");
// sms.kelganXabarlarniKorish(12)

// class ishOrinlari {
//   constructor() {
//     this.boshIshOrinlari = [];
//   }
//   elonQosh(nomi,tafsilotlari) {
//     this.boshIshOrinlari.push(nomi,tafsilotlari);
//     console.log(nomi,tafsilotlari, " elon qo'shildi");
//   }
//   arizaYubor(ishchiId,nomzod) {
//     if (ishchiId === 1235, nomzod === "farrux") {
//       console.log("ariza yuborildi");
//     } else {
//       console.log("ishchi Id xato");
//     }
//   }
// }
// const elon = new ishOrinlari();
// elon.elonQosh("kampyuter","savotxonligi")
// elon.arizaYubor(1235,"farru")

// // KONSPEKT  // //

// Closurening asoaiy xususuyati -- ichki funksiya tashqi funksiyasidan olingan ozgaruvchilarga mutojat
// qila olishi va bu ozgaruvchilarni saqlab qolish.

// function outerFunctoin(){
//     let outerVariable  = "I am from outer function "
//     function innerFunction (){
//         console.log(outerVariable);

//     }
//     return innerFunction
// }
// const myClosure = outerFunctoin()
// myClosure()

// lexical environment ikki asosiy qismdan iborat
// O'zgaruvchilarni saqlash joyi (environment Record): O'zgaruvchilar va ularning qiymatlari saqlanadi.
// Reference to the outer enivorment: Tashqi lexical environmentga havola bu orqali ichki funsiya tashqi ozgaruvchilarga kiridh imkoniyatiga ega boladi.

// Closure va Lexical enivorment ortasidagi bog'lanishlar
// Closure bu ichki funksiya va tashqi funksiyaning ozgaruvchilarini birlashtiruvchi mexanizm
// Lexical enivorment bu ozgaruvchilar va ularning parent (tashqi muhitini ) saqlaydigan struktura
// Closura va function count ga misol

// function createCounter(){
//     let count = 0

//     return function(){
//         count++
//         return count
//     }
// }
// const counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Lexical enivorment ga misol
// function greeting(name){
//     return function(){
//         console.log("hello,${name}!");

//     }
// }
// const greetJohn = greeting ("john")
// greetJohn()
// lexical Scope (leksikal doira)

// function tashqi (){
//     let tashqiOzg = "tashqi funksiya "

//     function ichki (){
//         console.log(tashqiOzg);

//     }
//     ichki()
// }

// tashqi()

// 2 dynamic Scope (Dunamik doira)
// lexsical va dynamic Scope farqinij korsatuvchi misol
// let global = "men globalman"

// function tashqi(){
//     let localOzg = "men tashqi doira man"

//     function ichki (){
//         console.log(localOzg);

//     }
//     ichki()
// }

// function boshqafunksiya(){
//     let localOzg = "men boshqa tashqi doiraman"
//     ichki()
// }
// tashqi ()
// boshqafunksiya()

// // //  CLASS // // //
// sinf yaratish uchun class kalit sozidan foydalanamiz sinf ichida constructor metodini elon qilib obektning boshlangiz qiymatlarini belgilashimiz mumkin
// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
//   speak() {
//     console.log(this.anme, "makes a nois");
//   }
// }
// const dog = new animal("rex", "dog");
// dog.speak();

// siniflarda meros olish

// class Dog extends Animal {
//   speak() {
//     console.log(this.anme, "makes a nois");
//   }
// }
// const dog = new Dog("rex", "dog");
// dog.speak();

// protatiplar va metodlar
// class Dog extends Animal {
//   speak() {
//     console.log(this.anme, "makes a nois");
//   }
// }
// const dog = new Dog("rex", "dog");
// dog.speak();

// private properties xususiyatlar

// # belgisidan kryin yoziladi va ular tashqarisidan murojat qilishdan himoyalangan
