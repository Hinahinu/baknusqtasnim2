function tambah(a, b){
    return a + b;
}

function tambahkan(x, y, operasi){
    return operasi(x, y);
}

console.log(tambahkan(5, 5, tambah));