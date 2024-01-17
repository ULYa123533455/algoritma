let pegawai = {
    nip:"111",
    nama: "Budi Mahmud",
    alamat: {
        jalan: "JL. Ayam No.3",
        kelurahan: "Meruya Ilir",
        kecamatan: "Kebon Jeruk",
        kota: "Jakarta Barat"
    },
};

pegawai.nama= "senthod"
document.write("Nip :" + pegawai.nip);
document.write("Nama:" + pegawai.nama);
document.write("Jalan:" + pegawai.alamat.jalan);
document.write("kelurahan" + pegawai.alamat.kelurahan);
document.write("Kecamatan" + pegawai.alamat.kecamatan);
document.write("Kota" + pegawai.alamat.kota);

let putaranhukumanakibatterlambat = 0;
do{
    document.write(`Putaran Ke-${putaranhukumanakibatterlambat + 5}`);
    putaranhukumanakibatterlambat++;
}while(putaranhukumanakibatterlambat < 0);

