interface QuranSurah {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
  status: boolean;
  ayat: {
    id: number;
    surah: number;
    nomor: number;
    ar: string;
    tr: string;
    idn: string;
  }[];
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
