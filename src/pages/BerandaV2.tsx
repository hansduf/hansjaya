import { useEffect, useState, useRef } from 'react';
import {
    ArrowRight, CheckCircle, Package,
    TrendingUp, TrendingDown, Minus, ShieldCheck, Leaf, Truck
} from 'lucide-react';
import '../styles/berandaNeo.css';
import Logo from '../components/Logo';

import imgAyamRas from '../assets/telur ayam ras1.webp';
import imgAsin from '../assets/telur asin1.webp';
import imgKampung from '../assets/telur ayam kampung1.webp';
import imgBebek from '../assets/telur bebek1.webp';
import imgOmega from '../assets/telur omega1.webp';
import imgPuyuh from '../assets/telur puyuh1.webp';
import imgKandang2 from '../assets/kandang2.webp';

const MegaFooter = () => {
    const footerRef = useRef<HTMLElement>(null);
    const rectRef = useRef<DOMRect | null>(null);

    const handleMouseEnter = () => {
        if (footerRef.current) {
            rectRef.current = footerRef.current.getBoundingClientRect();
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!footerRef.current) return;
        if (!rectRef.current) {
            rectRef.current = footerRef.current.getBoundingClientRect();
        }
        const rect = rectRef.current;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        footerRef.current.style.setProperty('--mouse-x', `${x}px`);
        footerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <footer
            ref={footerRef}
            className="relative bg-[#1A1A1A] text-[#FAFAFA] border-t-8 border-[#FFC300] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
                    maskImage: `radial-gradient(circle 400px at var(--mouse-x, 0px) var(--mouse-y, 0px), black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 400px at var(--mouse-x, 0px) var(--mouse-y, 0px), black 0%, transparent 100%)`
                }}
            />

            {/* Actual Footer Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Brand & Tagline - col-span-5 */}
                <div className="p-8 md:p-12 md:col-span-5 flex flex-col justify-between">
                    <div>
                        <Logo className="text-6xl lg:text-7xl mb-6" dark={true} />
                        <h3 className="text-lg lg:text-xl font-bold uppercase tracking-widest text-[#FFC300] mb-3">Mengapa Kami Nomor #1 di Ponorogo</h3>
                        <p className="text-sm font-medium text-[#FAFAFA]/70 leading-relaxed max-w-md italic border-l-2 border-[#FFC300] pl-4">
                            "Kepercayaan mitra adalah kunci keberhasilan Hans Jaya sejak 1999."
                        </p>
                    </div>
                    <div className="mt-12 text-xs font-mono text-[#FAFAFA]/50 uppercase">
                        Telur segar Hans Jaya.<br />
                        <span className="text-[#FFC300] font-bold">Segar. Terjamin. Terpercaya.</span>
                    </div>
                </div>

                {/* Info & Description - col-span-4 */}
                <div className="p-8 md:p-12 md:col-span-4 flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC300] mb-4 block">Tentang Perusahaan</span>
                        <p className="text-sm font-medium text-[#FAFAFA]/80 leading-relaxed">
                            Distributor telur pilihan terpercaya di Ponorogo. Berkomitmen memberikan kualitas dan kesegaran terbaik langsung dari kandang untuk setiap mitra bisnis.
                        </p>
                    </div>
                    <div className="mt-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC300] mb-4 block">Kantor & Distribusi</span>
                        <p className="text-sm font-mono text-[#FAFAFA] leading-relaxed">
                            Jl. Sidorejo 7, Gupolo,<br />
                            Kec. Babadan, Kabupaten Ponorogo,<br />
                            Jawa Timur 63491<br />
                            <a href="tel:+628993179345" className="text-[#FFC300] hover:underline mt-2 inline-block font-bold">📞 +62 899-3179-345 (FARHAN)</a>
                        </p>
                    </div>
                </div>

                {/* Operations - col-span-3 */}
                <div className="p-8 md:p-12 md:col-span-3 flex flex-col justify-between bg-[#FAFAFA]/5 backdrop-blur-sm">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC300] mb-6 block">Jam Operasional</span>
                        <div className="space-y-6 text-sm font-mono font-bold">
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#FAFAFA]/50 mb-1">Senin - Sabtu</span>
                                <span className="text-xl text-[#FFC300]">06:00 - 17:00</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#FAFAFA]/50 mb-1">Minggu / Hari Besar</span>
                                <span className="text-xl text-red-500">LIBUR</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-6 border-t border-white/20">
                        <div className="text-[10px] font-mono text-[#FAFAFA]/50 uppercase font-bold leading-relaxed">
                            © {new Date().getFullYear()} HANS JAYA LOGISTICS — PUSAT TELUR JAYA ABADI.<br />ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Marquee Bottom */}
            <div className="relative z-10 bg-[#FFC300] text-[#1A1A1A] overflow-hidden whitespace-nowrap py-2 text-[10px] font-bold uppercase tracking-widest border-t border-[#1A1A1A]">
                <div className="animate-marquee gap-8">
                    {Array(10).fill("QUALITY NEVER COMPROMISED — 100% PURE PROTEIN — NO ANTIBIOTICS — ALWAYS FRESH").map((text, i) => (
                        <span key={i} className="flex items-center gap-4">
                            {text} <span className="w-2 h-2 bg-[#1A1A1A] rounded-none inline-block"></span>
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};

const NeoDistributionSVG = () => (
    <div className="w-full h-full border-b lg:border-b-0 border-[#1A1A1A] bg-[#FAFAFA] flex items-center justify-center p-4">
        <svg className="w-full max-w-[700px] h-auto aspect-[7/4]" viewBox="0 0 700 400" preserveAspectRatio="xMidYMid meet">
            {/* Grid Background Pattern */}
            <defs>
                <pattern id="neoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neoGrid)" />

            {/* Connecting Lines (Strictly from Hans Jaya) */}
            <g fill="none" stroke="#1A1A1A">
                {/* Direct to Col 1 */}
                <path d="M 140 200 H 160 V 40 H 240" strokeWidth="1" />
                <path d="M 140 200 H 200 V 120 H 240" strokeWidth="1" />
                <path d="M 140 200 H 200 V 280 H 240" strokeWidth="1" />
                <path d="M 140 200 H 160 V 360 H 240" strokeWidth="1" />

                {/* Through Col 1 gaps to Col 2 */}
                <path d="M 140 200 H 160 V 80 H 400" strokeWidth="1.5" />
                <path d="M 140 200 H 200 V 160 H 400" strokeWidth="1.5" />
                <path d="M 140 200 H 200 V 240 H 400" strokeWidth="1.5" />
                <path d="M 140 200 H 160 V 320 H 400" strokeWidth="1.5" />

                {/* Through Col 1 & 2 gaps to Col 3 */}
                <path d="M 140 200 H 560" strokeWidth="2.5" className="animate-dash" strokeDasharray="12 6" />
                <path d="M 140 200 H 160 V 80 H 360 V 120 H 560" strokeWidth="2" />
            </g>

            {/* Data points animating across trunks and branches (rendered BEFORE nodes) */}
            <g fill="#FFC300" stroke="#1A1A1A" strokeWidth="1">
                {/* To Col 1 packets */}
                <rect width="6" height="6" x="-3" y="-3" fill="#1A1A1A">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 140 200 H 160 V 40 H 240" />
                </rect>
                <rect width="6" height="6" x="-3" y="-3" fill="#1A1A1A">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 140 200 H 200 V 120 H 240" />
                </rect>
                <rect width="6" height="6" x="-3" y="-3" fill="#1A1A1A">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 140 200 H 200 V 280 H 240" />
                </rect>
                <rect width="6" height="6" x="-3" y="-3" fill="#1A1A1A">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 140 200 H 160 V 360 H 240" />
                </rect>

                {/* To Col 2 packets */}
                <rect width="8" height="8" x="-4" y="-4">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 140 200 H 160 V 80 H 400" />
                </rect>
                <rect width="8" height="8" x="-4" y="-4">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 140 200 H 200 V 160 H 400" />
                </rect>
                <rect width="8" height="8" x="-4" y="-4">
                    <animateMotion dur="3.7s" repeatCount="indefinite" path="M 140 200 H 200 V 240 H 400" />
                </rect>
                <rect width="8" height="8" x="-4" y="-4">
                    <animateMotion dur="4.2s" repeatCount="indefinite" path="M 140 200 H 160 V 320 H 400" />
                </rect>

                {/* To Col 3 packets */}
                <rect width="10" height="10" x="-5" y="-5">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 140 200 H 560" />
                </rect>
                <rect width="8" height="8" x="-4" y="-4">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M 140 200 H 160 V 80 H 360 V 120 H 560" />
                </rect>
            </g>

            {/* Origin Node (Hans Jaya) */}
            <g transform="translate(100, 200)">
                <rect x="-40" y="-40" width="80" height="80" fill="#FFC300" stroke="#1A1A1A" strokeWidth="2" />
                <text x="0" y="5" fontFamily="Space Grotesk" fontSize="16" fontWeight="bold" fill="#1A1A1A" textAnchor="middle" alignmentBaseline="middle">HANS</text>
                <text x="0" y="20" fontFamily="Space Grotesk" fontSize="16" fontWeight="bold" fill="#1A1A1A" textAnchor="middle" alignmentBaseline="middle">JAYA</text>
                <rect x="-44" y="-44" width="88" height="88" fill="none" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
            </g>

            {/* Destination Nodes (Neat 3 Columns) */}
            {[
                // Col 1
                { x: 240, y: 40, label: 'Distributor', fill: '#1A1A1A', textColor: '#FAFAFA' },
                { x: 240, y: 120, label: 'Grosir', fill: '#FAFAFA' },
                { x: 240, y: 280, label: 'Supermarket', fill: '#FAFAFA' },
                { x: 240, y: 360, label: 'UMKM', fill: '#1A1A1A', textColor: '#FAFAFA' },

                // Col 2
                { x: 400, y: 80, label: 'Restoran', fill: '#FAFAFA' },
                { x: 400, y: 160, label: 'Koperasi', fill: '#1A1A1A', textColor: '#FAFAFA' },
                { x: 400, y: 240, label: 'Catering', fill: '#FAFAFA' },
                { x: 400, y: 320, label: 'Ritel', fill: '#1A1A1A', textColor: '#FAFAFA' },

                // Col 3
                { x: 560, y: 120, label: 'Ind. Pangan', fill: '#FAFAFA' },
                { x: 560, y: 200, label: 'Program MBG', fill: '#FFC300', textColor: '#1A1A1A' },
            ].map((node, i) => (
                <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                    <rect x="0" y="-20" width="100" height="40" fill={node.fill} stroke="#1A1A1A" strokeWidth="1.5" />
                    <text x="50" y="2" fontFamily="Inter" fontSize="11" fontWeight="bold" fill={node.textColor || '#1A1A1A'} textAnchor="middle" alignmentBaseline="middle">{node.label}</text>
                    <circle cx="0" cy="0" r="3" fill="#FFC300" stroke="#1A1A1A" strokeWidth="1" />
                </g>
            ))}
        </svg>
    </div>
);

export default function BerandaV2() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [eggPrices, setEggPrices] = useState<any[]>([]);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                // Defer loading Supabase client to speed up initial FCP
                const { createClient } = await import('@supabase/supabase-js');
                const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qartwfvhpcooiskaeufz.supabase.co';
                const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_opGXI5QjLL4iWN4G3-f5gA_Ycc9ddJK';
                const supabase = createClient(supabaseUrl, supabaseKey);

                const { data, error } = await supabase
                    .from('egg_prices')
                    .select('*')
                    .order('type_name');
                
                if (error) throw error;
                if (data) {
                    setEggPrices(data);
                }
            } catch (error) {
                console.error("Gagal mengambil data dari Supabase:", error);
            }
        };
        fetchPrices();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        businessType: 'Pilih Sektor',
        quantity: '',
    });

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const { name, businessType, quantity } = formData;
        const waNumber = '628993179345';
        const text = `[REQUEST PARTNERSHIP]\n\nNAMA: ${name || 'N/A'}\nSEKTOR: ${businessType || 'N/A'}\nVOLUME: ${quantity ? quantity + ' Peti/Minggu' : 'N/A'}\n\nMohon konfirmasi ketersediaan.`;
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
    };

    return (
        <div className="font-sans text-[#1A1A1A] bg-[#FAFAFA] min-h-screen selection:bg-[#FF3300] selection:text-white">

            {/* NAVBAR - GRID STRICT */}
            <nav className="sticky top-0 z-50 bg-[#FAFAFA] border-b border-[#1A1A1A]">
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]">
                    {/* Brand */}
                    <div className="md:col-span-3 p-4 flex items-center justify-between">
                        <Logo className="text-xl md:text-2xl" dark={false} />
                    </div>
                    {/* Links */}
                    <div className="hidden md:col-span-6 md:grid grid-cols-4 divide-x divide-[#1A1A1A] text-xs font-bold uppercase tracking-widest text-center">
                        <a href="#about" className="p-4 flex items-center justify-center neo-hover transition-colors">Beranda</a>
                        <a href="#network" className="p-4 flex items-center justify-center neo-hover transition-colors">Kapasitas</a>
                        <a href="#pricing" className="p-4 flex items-center justify-center neo-hover transition-colors bg-[#FFC300] text-[#1A1A1A]">Harga Live</a>
                        <a href="#products" className="p-4 flex items-center justify-center neo-hover transition-colors">Produk</a>
                    </div>
                    {/* CTA */}
                    <div className="md:col-span-3">
                        <a href="#contact" className="h-full p-4 flex items-center justify-between bg-[#1A1A1A] text-white font-bold text-sm uppercase tracking-wide neo-hover-invert transition-colors group">
                            <span>Mulai Kemitraan</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </nav>

            {/* MARQUEE TICKER */}
            <div className="border-b border-[#1A1A1A] bg-[#E8E8E8] overflow-hidden whitespace-nowrap py-2 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                <div className="animate-marquee gap-8">
                    {Array(10).fill("DISTRIBUSI TELUR HANS JAYA — PONOROGO, ID — SEJAK 1999 — KONTROL KUALITAS: AKTIF — LOGISTIK: ONLINE").map((text, i) => (
                        <span key={i} className="flex items-center gap-4">
                            {text} <span className="w-2 h-2 bg-[#FFC300] rounded-none inline-block animate-pulse"></span>
                        </span>
                    ))}
                </div>
            </div>

            {/* HERO SECTION - ASYMMETRICAL GRID */}
            <header id="about" className="border-b border-[#1A1A1A]">
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">

                    {/* Left Typography Area */}
                    <div className="lg:col-span-7 p-6 lg:p-12 xl:p-16 flex flex-col justify-center bg-[#FAFAFA]">
                        <div className="inline-block border border-[#1A1A1A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 self-start bg-[#FFC300] text-[#1A1A1A]">
                            PUSAT TELUR JAYA ABADI — HANS JAYA PONOROGO
                        </div>
                        <h1 className="font-grotesk font-black text-5xl md:text-7xl xl:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                            KUALITAS &<br />
                            HARGA TELUR<br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>TERBAIK HARI INI.</span>
                        </h1>
                        <p className="font-medium text-base md:text-lg max-w-md leading-relaxed border-l-2 border-[#FFC300] pl-4">
                            Mitra distribusi telur terpercaya di Ponorogo & Sekitarnya selama lebih dari 25 tahun. Menyuplai kebutuhan harian restoran, grosir, hingga industri pangan.
                        </p>
                    </div>

                    {/* Right Graphic/Data Area */}
                    <div className="lg:col-span-5 grid grid-rows-2 divide-y divide-[#1A1A1A]">
                        {/* Top Block: Farm Image Background */}
                        <div className="bg-[#1A1A1A] relative overflow-hidden group p-6 lg:p-8 flex flex-col justify-between min-h-[240px]">
                            {/* Background Images with Hover Swap */}
                            <img
                                src="/kandang1.webp"
                                alt="Kandang Hans Jaya"
                                width="800"
                                height="450"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:opacity-0 transition-all duration-700 object-center"
                                fetchPriority="high"
                                decoding="async"
                            />
                            <img
                                src={imgKandang2}
                                alt="Fasilitas Hans Jaya"
                                width="800"
                                height="450"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 object-center"
                                loading="lazy"
                                decoding="async"
                            />
                            {/* Gradient Overlay for Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

                            <div className="relative z-10 flex justify-end items-start text-white/90 text-[9px] lg:text-[10px] font-mono uppercase font-bold tracking-widest">
                                <span className="bg-[#FFC300] text-[#1A1A1A] px-2 py-1">Ponorogo, ID</span>
                            </div>
                            <div className="relative z-10 mt-auto pt-16">
                                <h2 className="font-grotesk font-black text-4xl lg:text-5xl xl:text-6xl text-white uppercase tracking-tighter mb-1 drop-shadow-lg">25+ Tahun</h2>
                                <p className="text-[#FFC300] font-bold text-[10px] lg:text-xs uppercase tracking-widest drop-shadow-md">Berdedikasi Menjaga Kualitas</p>
                            </div>
                        </div>

                        {/* Bottom Block: Quick Stats Grid */}
                        <div className="grid grid-cols-2 divide-x divide-[#1A1A1A] bg-[#FAFAFA]">
                            <div className="p-6 lg:p-8 flex flex-col justify-between hover:bg-[#1A1A1A] hover:text-[#FAFAFA] transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[#666] group-hover:text-[#FAFAFA]/50">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Status Pasokan
                                    </span>
                                    <Package className="w-4 h-4 opacity-30" />
                                </div>
                                <span className="font-grotesk font-black text-3xl lg:text-4xl tracking-tighter leading-none">AMAN &<br />TERSEDIA</span>
                            </div>
                            <div className="p-6 lg:p-8 flex flex-col justify-between bg-[#FFC300] hover:bg-white transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/70">
                                        Estimasi Kirim
                                    </span>
                                    <Truck className="w-4 h-4 opacity-50" />
                                </div>
                                <span className="font-grotesk font-black text-3xl lg:text-4xl tracking-tighter leading-none">&lt; 24<br />JAM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* LIVE DATA: PRICING (ANALYTICAL DASHBOARD STYLE) */}
            <section id="pricing" className="border-b border-[#1A1A1A] bg-[#FAFAFA]">
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">

                    <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between bg-[#1A1A1A] text-white">
                        <div>
                            <h2 className="font-grotesk font-black text-4xl uppercase tracking-tighter mb-4">Data<br />Harga</h2>
                            <p className="text-sm text-white/80 font-bold mb-2 uppercase tracking-wide text-[#FFC300]">Harga Fleksibel.</p>
                            <p className="text-sm text-white/60 leading-relaxed mb-4">
                                Ceritakan kebutuhan Anda, kita sesuaikan harganya. Harga dasar di bawah ini diperbarui secara real-time mengikuti pasar lokal.
                            </p>
                        </div>
                        <div className="mt-8 border border-white/20 p-4">
                            <span className="block text-[10px] font-mono text-[#FFC300] mb-1 uppercase">Update Terakhir</span>
                            <span className="font-mono text-sm">
                                {eggPrices.length > 0 ? (() => {
                                    const timestamps = eggPrices.map(item => new Date(item.updated_at).getTime());
                                    const latestTimestamp = Math.max(...timestamps);
                                    return new Date(latestTimestamp).toLocaleString('id-ID');
                                })() : 'MEMUAT DATA...'}
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-8 p-0">
                        {eggPrices.length > 0 ? (
                            <div className="flex flex-col h-full divide-y divide-[#1A1A1A]">
                                {/* Table Header */}
                                <div className="grid grid-cols-12 p-4 text-[10px] font-bold uppercase tracking-widest text-[#666] bg-[#E8E8E8]">
                                    <div className="col-span-5">Komoditas</div>
                                    <div className="col-span-4 text-right">Harga (IDR)</div>
                                    <div className="col-span-3 text-right">Trend</div>
                                </div>

                                {/* Table Rows */}
                                {[...eggPrices].sort((a, b) => {
                                    const order = ['TELUR AYAM', 'TELUR AYAM RAS', 'TELUR AYAM KAMPUNG', 'TELUR PUYUH', 'TELUR ASIN', 'TELUR BEBEK', 'TELUR OMEGA 3', 'TELUR OMEGA'];
                                    const idxA = order.indexOf(a.type_name.toUpperCase());
                                    const idxB = order.indexOf(b.type_name.toUpperCase());
                                    return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
                                }).map((item) => {
                                    const prev = item.previous_price || item.current_price;
                                    const diff = item.current_price - prev;
                                    const isUp = diff > 0;
                                    const isDown = diff < 0;

                                    return (
                                        <div key={item.id} className="grid grid-cols-12 p-4 md:p-5 items-center hover:bg-[#FF3300] hover:text-white transition-colors group border-b border-[#1A1A1A] last:border-b-0">
                                            <div className="col-span-5 font-bold uppercase tracking-wide text-xs md:text-sm">
                                                {item.type_name}
                                            </div>
                                            {/* Column Harga: Clean Main Price with UPDATE PASAR badge */}
                                            <div className="col-span-4 text-right flex flex-col justify-center items-end">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    {/* Badge Marketing Eksklusif - Miring/Slanted & Italic */}
                                                    <span className="bg-[#FFC300] text-[#1A1A1A] text-[7px] md:text-[8px] font-black italic -skew-x-6 px-1.5 py-0.5 uppercase tracking-wider border border-[#1A1A1A] shadow-[1px_1px_0px_#1A1A1A] group-hover:bg-white group-hover:text-[#FF3300] group-hover:border-white transition-all">
                                                        UPDATE PASAR
                                                    </span>
                                                    <span className="font-grotesk font-black italic text-lg md:text-2xl text-[#1A1A1A] group-hover:text-[#FFC300] transition-colors tracking-tighter leading-none">
                                                        {formatRupiah(item.current_price)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-3 flex justify-end">
                                                <div className={`border px-2 py-1 flex items-center gap-1 text-[10px] md:text-xs font-mono font-bold group-hover:bg-white group-hover:border-white transition-colors
                                                    ${isUp ? 'border-red-500 text-red-600 bg-red-50 group-hover:text-[#FF3300]' :
                                                        isDown ? 'border-green-500 text-green-600 bg-green-50 group-hover:text-green-600' :
                                                            'border-gray-300 text-gray-500 bg-gray-50 group-hover:text-[#1A1A1A]'}`}>
                                                    {isUp && <><TrendingUp className="w-3 h-3" /> +{diff}</>}
                                                    {isDown && <><TrendingDown className="w-3 h-3" /> {diff}</>}
                                                    {!isUp && !isDown && <><Minus className="w-3 h-3" /> STABIL</>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center p-12 text-[#666] font-mono text-sm">
                                [ SYSTEM: FETCHING MARKET DATA... ]
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* COMPACT PRODUCTS & QUALITY ROW */}
            <section id="products" className="border-b border-[#1A1A1A] bg-[#FAFAFA]">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">
                    {/* Products List Typographic & Image Grid */}
                    <div className="lg:col-span-2 p-0 grid grid-cols-2 sm:grid-cols-3 divide-y divide-[#1A1A1A]/20 sm:divide-y-0 border-[#1A1A1A]/20">
                        {[
                            { name: 'AYAM RAS', desc: 'Cocok untuk grosir.', badge: 'TERLARIS', img: imgAyamRas },
                            { name: 'PUYUH', desc: 'Pilihan katering.', badge: 'KATERING', img: imgPuyuh },
                            { name: 'KAMPUNG', desc: 'Kandungan alami.', badge: 'PREMIUM', img: imgKampung },
                            { name: 'TELUR ASIN', desc: 'Matang & Masir.', badge: 'SIAP SAJI', img: imgAsin },
                            { name: 'BEBEK', desc: 'Kualitas Tinggi.', badge: 'INDUSTRI', img: imgBebek },
                            { name: 'OMEGA', desc: 'Kaya Omega 3.', badge: 'KESEHATAN', img: imgOmega },
                        ].map((prod, i) => (
                            <div key={i} className={`p-4 sm:p-6 flex flex-col justify-between hover:bg-[#E8E8E8] transition-colors group relative border-[#1A1A1A]/20
                                ${i % 2 === 0 ? 'border-r' : ''} sm:border-r-0
                                ${i % 3 !== 2 ? 'sm:border-r' : ''}
                                ${i < 3 ? 'sm:border-b' : ''}
                            `}>
                                <div className="h-28 lg:h-32 mb-4 relative overflow-hidden border border-[#1A1A1A]">
                                    <img 
                                        src={prod.img} 
                                        alt={prod.name} 
                                        width="500"
                                        height="281"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="absolute top-2 left-2 px-2 py-1 text-[8px] font-bold uppercase tracking-widest bg-[#FFC300] text-[#1A1A1A]">
                                        {prod.badge}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-grotesk font-black text-xl lg:text-2xl uppercase tracking-tighter mb-1 group-hover:text-[#FFC300] transition-colors">{prod.name}</h3>
                                    <p className="font-mono text-[10px] text-[#1A1A1A]/70 leading-relaxed">{prod.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Capacity Stats (Swapped from Network) */}
                    <div className="flex flex-col h-full bg-[#FAFAFA]">
                        <div className="bg-[#FFC300] p-6 lg:p-8 text-[#1A1A1A] flex items-center justify-between border-b border-[#1A1A1A]">
                            <div className="font-mono text-xs font-bold uppercase flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#1A1A1A] animate-pulse"></span>
                                Kapasitas Operasional
                            </div>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-y divide-[#1A1A1A] flex-1">
                            {[
                                { label: 'Mitra Klien', value: '500+' },
                                { label: 'Ton/Bulan', value: '10+' },
                                { label: 'Wilayah Jangkauan', value: 'Ponorogo+' },
                                { label: 'Tahun Pengalaman', value: '25+' },
                            ].map((stat, i) => (
                                <div key={i} className={`p-6 lg:p-10 flex flex-col justify-end hover:bg-[#1A1A1A] hover:text-white transition-colors group overflow-hidden
                                    ${i < 2 ? 'border-t-0' : ''}
                                `}>
                                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#666] group-hover:text-white/50 mb-2">{stat.label}</span>
                                    <span className={`font-grotesk font-black tracking-tighter ${stat.value.length > 5 ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-4xl sm:text-5xl lg:text-6xl'}`}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 lg:p-8 border-t border-[#1A1A1A] bg-[#1A1A1A] text-[#FFC300] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-[#FAFAFA] hover:text-[#1A1A1A] transition-colors cursor-default">
                            <span className="font-bold text-xs uppercase tracking-widest leading-relaxed">
                                Terverifikasi & Bersertifikat<br className="hidden lg:block" />Standar Mutu Pangan
                            </span>
                            <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* DISTRIBUTION LOGISTICS (TEXT/GRID BASED) */}
            <section id="network" className="border-b border-[#1A1A1A]">
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">
                    <div className="p-0 flex flex-col justify-between">
                        <div className="p-8 lg:p-12 border-b border-[#1A1A1A]">
                            <h2 className="font-grotesk font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-4">Tentang & Jaringan</h2>
                            <p className="text-sm font-bold uppercase tracking-wide text-[#FFC300] mb-2">Berdedikasi Sejak 1999 Menjaga Kualitas.</p>
                            <p className="text-sm leading-relaxed max-w-md mb-8">
                                Berpusat di Ponorogo, Hans Jaya telah mendedikasikan diri selama lebih dari 25 tahun untuk menyalurkan telur segar langsung dari kandang. Jaringan kami kini menjangkau Madiun, Ngawi, Tulungagung, Trenggalek, hingga Purwantoro dengan integritas tinggi.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1A1A1A]/20">
                                <div>
                                    <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666] mb-1">Basis Operasional</span>
                                    <span className="block font-medium text-[#1A1A1A] text-sm">Ponorogo, Jawa Timur</span>
                                    <span className="text-[9px] font-bold text-[#FFC300]">PUSAT DISTRIBUSI</span>
                                </div>
                                <div>
                                    <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666] mb-1">Jangkauan Logistik</span>
                                    <span className="block font-medium text-[#1A1A1A] text-sm">Seluruh Karesidenan Madiun</span>
                                    <span className="text-[9px] font-bold text-[#FFC300]">EKSPEDISI HARIAN</span>
                                </div>
                                <div>
                                    <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666] mb-1">Integritas Mutu</span>
                                    <span className="block font-medium text-[#1A1A1A] text-sm">Protokol QC Ketat</span>
                                </div>
                            </div>
                        </div>
                        <NeoDistributionSVG />
                    </div>

                    {/* Quality Cards Stack (Swapped from Products) */}
                    <div className="bg-[#FFC300] p-6 lg:p-8 text-[#1A1A1A] flex flex-col h-full border-t lg:border-t-0">
                        <div className="mb-6 lg:mb-8">
                            <div className="font-mono text-xs font-bold uppercase mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#1A1A1A] animate-pulse"></span>
                                Standar Kualitas
                            </div>
                            <h3 className="font-grotesk font-black text-2xl lg:text-3xl uppercase tracking-tighter mb-2">Dari Sumber yang Terawat Baik</h3>
                            <p className="text-[10px] lg:text-[11px] font-medium leading-relaxed opacity-80">
                                Setiap butir telur merupakan hasil dari sistem peternakan terstandar dengan pengawasan ketat dari kandang hingga pengiriman.
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col justify-center gap-4 lg:gap-6">
                            {[
                                {
                                    title: "Panen Setiap Hari",
                                    sub: "Telur segar langsung dari kandang",
                                    desc: "Setiap hari, tim kami memulai proses panen. Telur yang Anda terima hari ini adalah telur yang baru dihasilkan beberapa jam sebelumnya, menjamin kualitas nutrisi tetap utuh.",
                                    stat: "100%",
                                    statLabel: "Tingkat Kesegaran"
                                },
                                {
                                    title: "Seleksi Manual Teliti",
                                    sub: "Dicek langsung oleh tenaga ahli berpengalaman",
                                    desc: "Kami tidak mengandalkan mesin otomatis. Setiap butir telur melewati tangan dan mata jeli pekerja kandang kami yang sudah berpengalaman belasan tahun untuk mendeteksi keretakan sekecil apapun.",
                                    stat: "99%",
                                    statLabel: "Akurasi Seleksi"
                                },
                                {
                                    title: "Lingkungan Higienis",
                                    sub: "Kandang bersih dan terawat dengan sistem alami",
                                    desc: "Kesehatan ayam adalah prioritas. Kami menjaga kebersihan kandang secara terjadwal untuk memastikan lingkungan yang sehat tanpa perlu proses kimiawi yang berlebihan, menjaga kemurnian hasil telur.",
                                    stat: "100%",
                                    statLabel: "Standar Sanitasi"
                                },
                                {
                                    title: "Distribusi Tercepat",
                                    sub: "Menjangkau Ponorogo, Madiun, hingga Ngawi",
                                    desc: "Dengan pengalaman lebih dari 25 tahun, kami memahami rute tercepat untuk memastikan telur tidak tertahan lama di perjalanan. Area Tulungagung, Trenggalek, dan sekitarnya tercover dalam hitungan jam.",
                                    stat: "99%",
                                    statLabel: "On-time Delivery"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#1A1A1A] text-[#FAFAFA] p-5 lg:p-6 border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#FAFAFA] hover:shadow-[6px_6px_0px_#FAFAFA] hover:-translate-y-1 transition-all group">
                                    <div className="flex justify-between items-start mb-3 lg:mb-4 gap-4">
                                        <div>
                                            <h4 className="font-grotesk font-black text-lg lg:text-xl xl:text-2xl uppercase tracking-tighter text-[#FFC300] mb-1">{item.title}</h4>
                                            <p className="text-[9px] font-mono uppercase tracking-widest text-white/50">{item.sub}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <span className="block font-black font-grotesk text-2xl lg:text-3xl xl:text-4xl leading-none mb-1">{item.stat}</span>
                                            <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-[#FFC300] block max-w-[80px] leading-tight">{item.statLabel}</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] lg:text-xs leading-relaxed opacity-80 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL MARQUEE */}
            <section className="border-b border-[#1A1A1A] bg-[#1A1A1A] text-[#FFC300] overflow-hidden whitespace-nowrap py-3 text-xs font-mono uppercase tracking-widest">
                <div className="animate-marquee gap-16 flex items-center">
                    {Array(4).fill(0).map((_, i) => (
                        <span key={i} className="flex items-center gap-16">
                            <span>"Pasokan selalu stabil, harga transparan." — Koperasi Jaya</span>
                            <span className="w-2 h-2 bg-[#FFC300]"></span>
                            <span>"Telur bersih & ukuran seragam, sangat cocok untuk bakery." — Amanda Bakery</span>
                            <span className="w-2 h-2 bg-[#FFC300]"></span>
                            <span>"Mitra andalan Program MBG daerah kami." — Dinsos Jatim</span>
                            <span className="w-2 h-2 bg-[#FFC300]"></span>
                        </span>
                    ))}
                </div>
            </section>

            {/* HARD-CODED CONTACT FORM (NEOBRUTALISM) */}
            <section id="contact" className="border-b border-[#1A1A1A] bg-[#FAFAFA]">
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">

                    {/* Form Left */}
                    <div className="lg:col-span-7 p-6 lg:p-8 bg-[#FFC300] text-[#1A1A1A]">
                        <h2 className="font-grotesk font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-2">Mulai Kemitraan</h2>
                        <p className="font-mono text-xs font-bold uppercase tracking-widest mb-8 text-[#1A1A1A]/70">Dapatkan harga kandang untuk bisnis Anda.</p>

                        <form onSubmit={handleSendMessage} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest">Nama Usaha / Pembeli</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-transparent border-2 border-[#1A1A1A] p-4 font-mono text-sm placeholder:text-[#1A1A1A]/50 focus:outline-none focus:bg-white transition-colors"
                                    placeholder="CONTOH: RESTO BUNDA / JAYA ABADI"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest">Kategori Usaha</label>
                                    <select
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                        className="w-full bg-transparent border-2 border-[#1A1A1A] p-4 font-mono text-sm focus:outline-none focus:bg-white appearance-none cursor-pointer"
                                    >
                                        <option>PILIH KATEGORI</option>
                                        <option>GROSIR / AGEN</option>
                                        <option>RESTORAN / KAFE</option>
                                        <option>INDUSTRI PANGAN</option>
                                        <option>KONSUMSI PRIBADI</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest">Kebutuhan (Peti/Minggu)</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        className="w-full bg-transparent border-2 border-[#1A1A1A] p-4 font-mono text-sm placeholder:text-[#1A1A1A]/50 focus:outline-none focus:bg-white transition-colors"
                                        placeholder="00"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1A1A1A] text-[#FFC300] font-black uppercase tracking-widest p-6 mt-4 hover:bg-[#FAFAFA] hover:text-[#1A1A1A] border-2 border-[#1A1A1A] transition-colors"
                            >
                                Pesan Sekarang via WhatsApp
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Right - Replaced Duplicate */}
                    <div className="lg:col-span-5 grid grid-rows-3 divide-y divide-[#1A1A1A] bg-[#FAFAFA]">
                        <div className="p-6 lg:p-8 flex items-center gap-6 hover:bg-[#1A1A1A] hover:text-[#FAFAFA] transition-colors group">
                            <div className="bg-[#FFC300] p-3 text-[#1A1A1A]">
                                <TrendingDown className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666] group-hover:text-white/50 mb-1">Keuntungan Kemitraan</span>
                                <span className="font-bold uppercase text-base lg:text-lg leading-tight">Harga Langsung Kandang<br /><span className="text-xs text-[#1A1A1A]/50 group-hover:text-[#FFC300] transition-colors">Tanpa Perantara</span></span>
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 flex items-center gap-6 hover:bg-[#1A1A1A] hover:text-[#FAFAFA] transition-colors group">
                            <div className="bg-[#FFC300] p-3 text-[#1A1A1A]">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666] group-hover:text-white/50 mb-1">Jaminan Klien B2B</span>
                                <span className="font-bold uppercase text-base lg:text-lg leading-tight">Garansi Kualitas Penuh<br /><span className="text-xs text-[#1A1A1A]/50 group-hover:text-[#FFC300] transition-colors">Retur Fleksibel</span></span>
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 flex items-center gap-6 hover:bg-[#1A1A1A] hover:text-[#FAFAFA] transition-colors group">
                            <div className="bg-[#FFC300] p-3 text-[#1A1A1A]">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666] group-hover:text-white/50 mb-1">Kepastian Logistik</span>
                                <span className="font-bold uppercase text-base lg:text-lg leading-tight">Prioritas Pasokan Harian<br /><span className="text-xs text-[#1A1A1A]/50 group-hover:text-[#FFC300] transition-colors">Untuk Mitra Terdaftar</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MegaFooter />

        </div>
    );
}
