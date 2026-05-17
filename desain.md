# DOKUMENTASI DESAIN HANS JAYA V2
## 🏛️ Filosofi Desain: Neobrutalism (Swiss Typographic Vibe)

Landing page **Hans Jaya V2** mengadopsi estetika **Neobrutalism Modern** yang terinspirasi dari gaya tipografi Swiss. Desain ini sengaja menghindari gaya *soft* mainstream dan memilih karakter yang **berani, industrial, kokoh, dan berorientasi langsung pada konversi bisnis (B2B)**.

Desain ini dicirikan oleh:
*   **High-Contrast Borders**: Batasan garis tegas hitam pekat (`#1A1A1A`) sebesar `1px` hingga `8px` untuk memberikan kesan solid dan struktural.
*   **Asymmetrical Bento-Box Grid**: Pembagian informasi yang padat, terorganisir, dan efisien tanpa menyisakan ruang kosong tak terpakai (*no bloated white-space*).
*   **Vibrant/Raw Color Palette**: Menggunakan saturasi warna murni yang kuat untuk mengarahkan pandangan mata pengunjung secara natural.

---

## 🎨 Sistem Warna (Color System)

Sistem warna dikurasi secara ketat untuk menciptakan harmoni industrial yang premium:

| Warna | Kode Hex | Peran & Psikologi |
| :--- | :--- | :--- |
| **Kuning Egg-Yolk** | `#FFC300` | Melambangkan kemurnian, nutrisi telur emas segar langsung dari kandang, serta menjadi warna penarik perhatian utama. |
| **Charcoal Dark** | `#1A1A1A` | Warna dominan untuk teks, garis batas (border), tombol utama, dan mega footer. Memberikan rasa aman, stabil, dan tepercaya. |
| **Premium Light** | `#FAFAFA` | Latar belakang bersih yang menjaga kontras teks tetap tajam tanpa membuat mata lelah (lebih lembut dibanding putih murni). |
| **Brutal Red** | `#FF3300` | Aksen penanda identitas (brand dot), tombol CTA penting, serta efek hover ekstrem untuk menciptakan kesan interaktif yang hidup. |

---

## ✍️ Tipografi (Typography)

Menggunakan kombinasi dua font geometris modern dari Google Fonts untuk performa rendering optimal:

1.  **Space Grotesk (Headings)**
    *   *Karakter:* Geometris tegas, kaku, berkarakter brutal.
    *   *Penggunaan:* Judul utama, angka statistik raksasa, teks brand, dan data numerik harga.
2.  **Inter (Body & UI Text)**
    *   *Karakter:* Sangat bersih, modern, tingkat keterbacaan (*readability*) tinggi pada berbagai ukuran layar.
    *   *Penggunaan:* Paragraf informasi, label deskripsi, input formulir, dan menu navigasi.

---

## 📐 Panduan Tata Letak Bento-Grid (Layout Architecture)

Halaman utama dibagi menjadi susunan grid asimetris yang saling mengunci:

### 1. Sticky Navbar (Grid 3-6-3)
Membagi baris navigasi secara matematis presisi:
*   `col-span-3` (Kiri): Logo Brand "HANS JAYA." berakhiran titik merah brutal.
*   `col-span-6` (Tengah): Menu link navigasi statis dengan transisi hover pembalikan warna (*neo-hover*).
*   `col-span-3` (Kanan): Tombol CTA "Mulai Kemitraan" hitam pekat dengan ikon panah meluncur.

### 2. Hero & Quick Stats
Menggabungkan keindahan fotografi dan data real-time:
*   **Left (7-Cols):** Tipografi judul raksasa 8xl dengan efek *hollow stroke text* yang ikonik.
*   **Right (5-Cols):** Galeri interaktif dengan efek *Hover-to-Swap* (mengarahkan kursor ke gambar kandang akan memunculkan gambar fasilitas steril secara instan) serta panel live status pasokan "AMAN & TERSEDIA".

### 3. Live Price Table (Dashboard Analytical)
Dirancang seperti panel kontrol bursa saham:
*   Layout rapat (*compact*) untuk meminimalkan *scrolling*.
*   Diurutkan berdasarkan komoditas terpenting di Ponorogo.
*   Lencana tren (Naik/Turun/Stabil) yang dinamis.
*   **Efek Hover:** Saat baris disentuh kursor, latar belakang berubah menjadi merah pekat (`#FF3300`), teks berubah putih, dan lencana tren beradaptasi secara otomatis agar tetap terbaca.

### 4. Mega Footer (Interactive Cursor Grid)
Footer brutal berwarna hitam charcoal yang dilengkapi dengan **teknologi pelacakan kursor**:
*   Sebuah pola grid halus putih disematkan di latar belakang.
*   Posisi mouse dilacak secara real-time melalui JavaScript ringan tanpa menguras CPU (*zero re-render*).
*   Sebuah *radial gradient* cahaya mengikuti posisi kursor pengguna secara magnetik, menciptakan efek "senter interaktif" yang modern dan mewah.

---

## ⚡ Sistem Integrasi & Keamanan Data (Cloud Topology)

Sistem ini didesain dengan pemisahan peran (*Decoupled Architecture*) untuk menjamin keamanan dan performa 24 jam penuh:

1.  **Supabase Cloud Direct-Fetch (Read)**
    Website utama yang berjalan di Vercel mengambil data harga langsung dari database awan **Supabase** via HTTPS. Ini memotong ketergantungan pada API localhost untuk pembacaan, menjaga web tetap menyala 24/7 secara gratis.
2.  **Localhost WhatsApp Bot wwebjs (Write)**
    Aplikasi bot berbasis Node.js dijalankan di PC lokal Anda untuk menjaga koneksi WhatsApp Web tetap aman. Bot ini memproses pesan perintah rahasia admin dan **menulis** perubahan harga ke Supabase Cloud.

---

## 🚀 Optimasi Kinerja Web (Performance Engineering)

Website ini dioptimasi secara ekstrem untuk memenuhi standar **Core Web Vitals** Google:
*   **Asset Compression:** Seluruh gambar raksasa (5MB - 7MB) dikompresi menjadi WebP ringan (< 700KB) untuk memangkas *Largest Contentful Paint (LCP)* dari 41 detik menjadi instan.
*   **Resource Prioritization:** Gambar di atas lipatan (*Above the fold*) dimuat dengan `fetchPriority="high"`, sementara elemen di bawah layar dimuat dengan `loading="lazy"` dan `decoding="async"`.
*   **Main-Thread Optimization:** Efek senter Mega Footer diubah dari menggunakan React State (yang memicu re-render ratusan kali) menjadi manipulasi langsung *CSS Variables* (`useRef` + `--mouse-x`), mereduksi *Total Blocking Time (TBT)* secara drastis.
*   **GPU Acceleration:** Efek visual aliran data pada peta jaringan dijalankan sepenuhnya di kartu grafis (GPU) lewat CSS `stroke-dashoffset`, membebaskan beban prosesor utama (CPU).
