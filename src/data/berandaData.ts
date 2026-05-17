/**
 * berandaData.ts
 * Data statis untuk halaman Beranda — produk dan testimoni
 */

export const products = [
    {
        name: 'Telur Ayam Ras',
        desc: 'Pilihan premium cangkang coklat & putih, kaya nutrisi.',
        img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=60',
        badge: 'Best Seller',
    },
    {
        name: 'Telur Ayam Kampung',
        desc: 'Alami, kuning telur lebih padat dan gurih alami.',
        img: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=60',
        badge: 'Tersedia',
    },
    {
        name: 'Telur Bebek',
        desc: 'Ukuran besar, sempurna untuk bahan martabak & baking.',
        img: 'https://images.unsplash.com/photo-1569239856525-455c1bbf9169?auto=format&fit=crop&w=600&q=60',
        badge: 'Tersedia',
    },
    {
        name: 'Telur Asin',
        desc: 'Masir dan gurih, diolah dari telur bebek pilihan terbaik.',
        img: 'https://images.unsplash.com/photo-1628205423871-3cda80277f28?auto=format&fit=crop&w=600&q=60',
        badge: 'Tersedia',
    },
    {
        name: 'Telur Omega-3',
        desc: 'Diperkaya Omega-3, baik untuk perkembangan otak.',
        img: 'https://images.unsplash.com/photo-1627889158334-192e4cc3501f?auto=format&fit=crop&w=600&q=60',
        badge: 'Premium',
    },
    {
        name: 'Telur Puyuh',
        desc: 'Segar dan higienis, cocok untuk sate atau sup pelengkap.',
        img: 'https://images.unsplash.com/photo-1607515099309-8d7d96a798aa?auto=format&fit=crop&w=600&q=60',
        badge: 'Tersedia',
    },
];

export const testimonials = [
    {
        quote:
            'Sejak bermitra dengan Hans Jaya, pasokan telur untuk warung kami tidak pernah terlambat. Kualitasnya sangat konsisten.',
        name: 'Pak Sugeng',
        role: 'Agen Sembako',
        city: 'Siman, Ponorogo',
    },
    {
        quote:
            'Sangat terbantu untuk program MBG di wilayah kami. Telur selalu fresh dan ukurannya seragam, mempermudah distribusi.',
        name: 'Ibu Retno',
        role: 'Koordinator MBG',
        city: 'Babadan, Ponorogo',
    },
    {
        quote:
            'Untuk usaha bakery, kuning telur yang bagus adalah kunci. Telur dari Hans Jaya selalu segar dan membuat kue kami mengembang sempurna.',
        name: 'Mbak Dewi',
        role: 'Owner Bakery',
        city: 'Balong, Ponorogo',
    },
    {
        quote:
            'Harga kompetitif dan pengiriman on-time. Mitra bisnis yang sangat bisa diandalkan untuk wilayah Ponorogo dan sekitarnya.',
        name: 'Cak Nur',
        role: 'Grosir Pasar Legi',
        city: 'Ponorogo Kota',
    },
];

export type Product = (typeof products)[number];
export type Testimonial = (typeof testimonials)[number];
