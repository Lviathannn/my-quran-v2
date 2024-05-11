interface Surah {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

interface Ayat {
  id: number;
  surah: number;
  nomor: number;
  ar: string;
  tr: string;
  idn: string;
}

interface SurahDetail {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
  status: boolean;
  ayat: Ayat[];
  surat_selanjutnya: {
    id: number;
    nomor: number;
    nama: string;
    nama_latin: string;
    jumlah_ayat: number;
    tempat_turun: string;
    arti: string;
    deskripsi: string;
    audio: string;
  };
  surat_sebelumnya: boolean;
}
