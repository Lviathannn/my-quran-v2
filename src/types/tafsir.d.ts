interface Tafsir {
  id: number;
  surah: number;
  ayat: number;
  tafsir: string;
}

interface TafsirList {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
  status: boolean;
  tafsir: Tafsir[];
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
