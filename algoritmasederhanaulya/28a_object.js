var nilai =  prompt("berikan nilai anda");
var predikat = "";
switch (nilai){
    case "A":
        document.write("ANDA NAEK JABATAN")
        break;
    case "B":
        document.write("ANDA LEMBUR")
        break;
    case "C":
        document.write("ANDA TURUN JABATAN")
        break;
    case "D":
        document.write("ANDA DI PECAT")
        break;
    default:
        document.write(error)
}

let karyawan = {
    nip:'123',
    nama:'Ahmad Mahmud',
    alamat: 'Pamulang'
}

document.write("Nip :" + karyawan.nip);
document.write("Nama:" + karyawan.nama);
document.write("alamat :" + karyawan.alamat);

