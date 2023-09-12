// ARRAY
// Untuk mengurutkan isi dalam array
const fruits = ['banana', 'apple', 'cherry'];
const sortFruits = fruits.sort();

console.log(sortFruits);

// Menggabungkan semua array menjadi string
const fruits2 = ['apple', 'banana', 'cherry'];
const joinedString = fruits.join(', ');

console.log(joinedString);

// Menggabungkan beberapa array
const kendaraan1 = ['mobil', 'motor'];
const kendaraan2 = ['becak', 'pesawat'];
const kombinasi = kendaraan1.concat(kendaraan2);

console.log(kombinasi);

//  Membuat salinan sebagian array dengan mengambil elemen-elemen dalam rentang tertentu.
const kendaraan3 = ["becak", "mobil", "motor", "pesawat", "kapal"];
const ambilKendaraan = kendaraan3.slice(1, 5);

console.log(ambilKendaraan);

// Menambahkan pesawat ke awal array
const kendaraan4 = ["mobil", "becak", "sepeda"];
kendaraan4.unshift("pesawat");

console.log(kendaraan4);

// OBJECT
let data = {
    nama: "Morenno",
    umur: 30,
    pekerjaan: "Programmer",
    tambahUmur: function(tahun) {
      this.umur += tahun;
    },
    ubahPekerjaan: function(pekerjaanBaru) {
      this.pekerjaan = pekerjaanBaru;
    },
    tampilkanInfo: function() {
      return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}, Alamat: ${this.alamat}`;
    },
    tambahData: function(key, value) {
      this[key] = value;
    },
    hapusData: function(key) {
      delete this[key];
    }
  };
  
// Method tambah data
data.tambahUmur(5);
// Method ubah data
data.ubahPekerjaan("Direktur batu bara");
// Method tambah data
data.tambahData("alamat", "Cibeusi");
// Method hapus data
// data.hapusData("alamat");
// Method Menampilkan data
console.log(data.tampilkanInfo());