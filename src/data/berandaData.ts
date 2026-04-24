/**
 * berandaData.ts
 * Data statis untuk halaman Beranda — produk dan testimoni
 */

export const products = [
    {
        name: 'Telur Ayam Ras',
        desc: 'Pilihan premium cangkang coklat & putih, kaya nutrisi.',
        img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80',
        badge: 'Best Seller',
    },
    {
        name: 'Telur Ayam Kampung',
        desc: 'Alami, kuning telur lebih padat dan gurih alami.',
        img: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80',
        badge: 'Tersedia',
    },
    {
        name: 'Telur Bebek',
        desc: 'Ukuran besar, sempurna untuk bahan martabak & baking.',
        img: 'https://images.unsplash.com/photo-1569239856525-455c1bbf9169?auto=format&fit=crop&q=80',
        badge: 'Tersedia',
    },
    {
        name: 'Telur Asin',
        desc: 'Masir dan gurih, diolah dari telur bebek pilihan terbaik.',
        img: 'https://images.unsplash.com/photo-1628205423871-3cda80277f28?auto=format&fit=crop&q=80',
        badge: 'Tersedia',
    },
    {
        name: 'Telur Omega-3',
        desc: 'Diperkaya Omega-3, baik untuk perkembangan otak.',
        img: 'https://images.unsplash.com/photo-1627889158334-192e4cc3501f?auto=format&fit=crop&q=80',
        badge: 'Premium',
    },
    {
        name: 'Telur Puyuh',
        desc: 'Segar dan higienis, cocok untuk sate atau sup pelengkap.',
        img: 'https://images.unsplash.com/photo-1607515099309-8d7d96a798aa?auto=format&fit=crop&q=80',
        badge: 'Tersedia',
    },
];

export const testimonials = [
    {
        quote:
            'Sejak bermitra dengan Hans Jaya, pasokan telur untuk restoran kami tidak pernah terlambat. Kualitasnya sangat konsisten.',
        name: 'Budi Santoso',
        role: 'Owner Restoran',
        city: 'Surabaya',
    },
    {
        quote:
            'Sangat membantu untuk program MBG. Telur selalu fresh dan ukurannya seragam, mempermudah perhitungan porsi kami.',
        name: 'Siti Rahma',
        role: 'Koordinator MBG',
        city: 'Malang',
    },
    {
        quote:
            'Untuk bakery, kuning telur yang bagus adalah kunci. Telur dari Hans Jaya selalu segar dan membuat kue kami mengembang sempurna.',
        name: 'Chef Andreas',
        role: 'Head Baker',
        city: 'Sidoarjo',
    },
    {
        quote:
            'Harga kompetitif dan pengiriman on-time. Mitra bisnis yang sangat bisa diandalkan untuk jangka panjang.',
        name: 'Kusuma',
        role: 'Grosir Bahan Pokok',
        city: 'Pasuruan',
    },
];

export type Product = (typeof products)[number];
export type Testimonial = (typeof testimonials)[number];
