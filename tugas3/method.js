// Mengubah text tadinya kecil menjadi besar
const textKecil = "hello world."
const textBesar = textKecil.toUpperCase();

console.log(textBesar);

// Mengubah text tadinya besar menjadi kecil
const textBesar2 = "HELLO WORLD";
const textKecil2 = textBesar2.toLowerCase();

console.log(textKecil2);

// Mengambil huruf sesuai baris yang ditentukan
const text = 'Hello, World!';
const character = text.charAt(9);

console.log(character);

// Untuk membatas angka di belakang koma sesuai yang kita mau
const number = 3.1234;
const formattedNumber = number.toFixed(2);

console.log(formattedNumber)

// Untuk membulatkan angka yang terdekat di belakang koma
const angka = 251.99124;
const angkaBulat = Math.round(angka);

console.log(angkaBulat)

// Menggantikan substring dengan string lain dalam string.
const text2 = 'Hello, World!';
const replacedText = text2.replace('World', 'Universe');

console.log(replacedText)

// Memeriksa apakah string mempunyai huruf yang ditentukan
const sentence = 'Hello, World!';
const containsHello = sentence.includes('Hello');

console.log(containsHello);

// Menggabungkan string
const textConcat1 = "Hello";
const textConcat2 = "World";
const result = textConcat1.concat(', ', textConcat2);

console.log(result);

// Mengambil angka kuadrat yang ditentukan
const akarKuadrat = Math.sqrt(25);

console.log(akarKuadrat)

// Mengembalikan angka string menjadi desimal
const stringDesimal = "3.14";
const bilanganDesimal = parseFloat(stringDesimal);

console.log(bilanganDesimal);