import { useEffect, useRef, useState, memo, useMemo } from 'react';
import {
    Menu, X, Truck, Store, Utensils, Cake, ChefHat,
    Package, Factory, CheckCircle, Clock, ShieldCheck,
    ChevronRight, MapPin, Phone, Mail, ArrowRight,
    ShoppingCart, Home, Users, Star, TrendingUp, TrendingDown, Minus
} from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';
import { products, testimonials } from '../data/berandaData';
import QualityAccordion, { qualityItems } from '../components/QualityAccordion';
import '../styles/beranda.css';

// Helper for price formatting
const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};

// Memoized SVG Component to reduce TBT on main thread
const DistributionSVG = memo(({ isMobile, flowInView }: { isMobile: boolean, flowInView: boolean }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="lineGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#E8A020" stopOpacity="1" />
                <stop offset="100%" stopColor="#C47A1E" stopOpacity="0.15" />
            </linearGradient>
        </defs>

        {!isMobile && (
            <>
                <path id="path-dec1" d="M 250 400 C 400 400, 400 250, 500 250 C 600 250, 600 100, 700 80" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="path-line stage-2" />
                <path id="path-dec2" d="M 250 400 C 400 400, 400 250, 500 250 C 550 250, 500 150, 600 100" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" className="path-line stage-2" />
                <path id="path-dec3" d="M 250 400 C 400 400, 400 400, 500 400 C 600 400, 650 300, 700 280" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" className="path-line stage-2" />
                <path id="path-dec4" d="M 250 400 C 400 400, 400 400, 500 400 C 600 400, 700 450, 800 420" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="path-line stage-2" />
                <path id="path-dec5" d="M 250 400 C 400 400, 400 550, 500 550 C 600 550, 650 700, 750 650" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" className="path-line stage-2" />
                <path id="path-dec6" d="M 250 400 C 400 400, 400 550, 500 550 C 600 550, 600 750, 700 780" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="path-line stage-2" />
                <path id="path-dec7" d="M 250 400 C 350 400, 300 200, 400 150" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="path-line stage-2" />
                <path id="path-dec8" d="M 250 400 C 350 400, 300 600, 400 650" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="path-line stage-2" />
                <path id="path-dec9" d="M 250 400 C 400 400, 400 400, 500 400 C 550 400, 550 380, 600 350" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" className="path-line stage-2" />
                <path id="path-dec10" d="M 250 400 C 400 400, 400 550, 500 550 C 550 550, 500 500, 600 480" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" className="path-line stage-2" />
            </>
        )}
        
        <path id="path-d1" d="M 250 400 C 400 400, 400 250, 500 250 C 600 250, 700 80, 880 80" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
        <path id="path-d3" d="M 250 400 C 400 400, 400 250, 500 250 C 600 250, 750 224, 920 224" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
        <path id="path-d5" d="M 250 400 C 400 400, 400 400, 500 400 C 600 400, 800 384, 940 384" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
        <path id="path-d7" d="M 250 400 C 400 400, 400 500, 500 500 C 600 500, 750 544, 910 544" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
        <path id="path-d9" d="M 250 400 C 400 400, 400 650, 500 650 C 600 650, 750 704, 890 704" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
        
        {!isMobile && (
            <>
                <path id="path-d2" d="M 250 400 C 400 400, 400 250, 500 250 C 600 250, 650 144, 750 144" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
                <path id="path-d4" d="M 250 400 C 400 400, 400 350, 500 350 C 600 350, 700 304, 820 304" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
                <path id="path-d6" d="M 250 400 C 400 400, 400 400, 500 400 C 600 400, 650 464, 780 464" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
                <path id="path-d8" d="M 250 400 C 400 400, 400 650, 500 650 C 600 650, 650 624, 760 624" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
                <path id="path-d10" d="M 250 400 C 400 400, 400 650, 500 650 C 550 650, 600 760, 720 760" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" className="path-line stage-2" />
            </>
        )}

        <g className="moving-truck">
            {flowInView && [
                { path: '#path-d1', dur: '5s', delay: '0s' },
                { path: '#path-d2', dur: '5.5s', delay: '1s' },
                { path: '#path-d3', dur: '4.8s', delay: '0.5s' },
                { path: '#path-d4', dur: '5.2s', delay: '1.2s' },
                { path: '#path-d5', dur: '6.5s', delay: '0s' },
                { path: '#path-d6', dur: '5.8s', delay: '2s' },
                { path: '#path-d7', dur: '5.3s', delay: '1.8s' },
                { path: '#path-d8', dur: '6.2s', delay: '0.3s' },
                { path: '#path-d9', dur: '5.6s', delay: '2.5s' },
                { path: '#path-d10', dur: '5.1s', delay: '1.1s' },
                
                { path: '#path-dec1', dur: '4s', delay: '0.8s', fade: true },
                { path: '#path-dec3', dur: '3.5s', delay: '1.5s', fade: true },
                { path: '#path-dec5', dur: '4.2s', delay: '3s', fade: true },
                { path: '#path-dec7', dur: '5s', delay: '0.2s', fade: true },
                { path: '#path-dec8', dur: '4.5s', delay: '2.2s', fade: true },
                
                { path: '#path-d3', dur: '5.7s', delay: '3.1s' },
                { path: '#path-d6', dur: '4.9s', delay: '4.5s' },
                { path: '#path-d8', dur: '5.5s', delay: '3.3s' },
                { path: '#path-d10', dur: '6s', delay: '5s' },
            ].filter((_, idx) => !isMobile || idx % 2 === 0).map((dot, idx) => (
                <circle key={idx} r="3" fill="#E8A020">
                    <animateMotion dur={dot.dur} begin={dot.delay} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                        <mpath href={dot.path} />
                    </animateMotion>
                    <animate attributeName="opacity" values={dot.fade ? "0;1;1;0" : "0;1;1;0"} keyTimes={dot.fade ? "0;0.1;0.7;1" : "0;0.1;0.9;1"} dur={dot.dur} begin={dot.delay} repeatCount="indefinite" />
                </circle>
            ))}
        </g>
    </svg>
));

export default function Beranda() {
    useScrollReveal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [flowInView, setFlowInView] = useState(false);
    const flowRef = useRef<HTMLDivElement>(null);
    const [activeTesti, setActiveTesti] = useState(0);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // API State
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [eggPrices, setEggPrices] = useState<any[]>([]);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                // Konfigurasi URL API ke backend Express yang baru!
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3541';
                const response = await fetch(`${API_URL}/api/prices`);
                if (response.ok) {
                    const data = await response.json();
                    setEggPrices(data);
                }
            } catch (error) {
                console.error("Gagal mengambil data dari server:", error);
            }
        };
        fetchPrices();
    }, []);

    // ─── OTOMATISASI SEO (DYNAMIC META) ───
    useEffect(() => {
        if (eggPrices.length > 0) {
            // Temukan produk utama (biasanya Telur Ayam Ras)
            const ayamRas = eggPrices.find(p => p.type_name.toLowerCase().includes('ayam ras'));
            const harga = ayamRas ? `Rp ${ayamRas.current_price.toLocaleString('id-ID')}` : '';
            const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

            // 1. Update Judul Browser
            document.title = `Harga Telur ${harga} Hari Ini (${today}) - Hans Jaya Ponorogo`;

            // 2. Update Meta Description untuk Google
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', `Cek info Harga Telur Hari Ini: ${harga}. Hans Jaya adalah distributor telur terpercaya di Ponorogo. Kualitas terjamin langsung dari kandang.`);
            }
        }
    }, [eggPrices]);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        businessType: 'Pilih Jenis Usaha',
        city: '',
        quantity: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        const { name, businessType, city, quantity, message } = formData;
        
        const waNumber = '628993179345'; // User's WhatsApp number
        const text = `Halo Hans Jaya, saya ingin bertanya mengenai kemitraan distribusi telur.

*Detail Informasi:*
• Nama/Bisnis: ${name || '-'}
• Jenis Usaha: ${businessType || '-'}
• Kota: ${city || '-'}
• Kebutuhan: ${quantity ? quantity + ' Peti/Minggu' : '-'}

*Pesan:*
${message || 'Saya tertarik untuk bekerja sama dengan Hans Jaya.'}

Terima kasih.`;

        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
    };

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTesti((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Handle Navbar Scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle specific intersection for the interactive SVG to trigger sequential drawing
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setFlowInView(true);
            },
            { threshold: 0.3 }
        );
        if (flowRef.current) observer.observe(flowRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="font-sans text-[#2C1A00] bg-[#FDFAF3] overflow-x-hidden selection:bg-[#E8A020] selection:text-white">

            {/* NAVBAR */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <a href="#" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#2C1A00]' : 'text-white'}`}>
                        Hans Jaya<span className="text-[#E8A020]">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex gap-8 font-medium ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                        <a href="#about" className="hover:text-[#E8A020] transition-colors">Tentang</a>
                        <a href="#distribution" className="hover:text-[#E8A020] transition-colors">Jaringan</a>
                        <a href="#products" className="hover:text-[#E8A020] transition-colors">Produk</a>
                        <a href="#harga" className={`hover:text-[#E8A020] transition-colors flex items-center gap-1.5 font-bold ${isScrolled ? 'text-[#C47A1E]' : 'text-[#E8A020]'}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] animate-pulse shadow-[0_0_8px_#E8A020]" />
                            Harga Sekarang
                        </a>
                        <a href="#quality" className="hover:text-[#E8A020] transition-colors">Kualitas</a>
                    </div>

                    <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-br from-[#E8A020]/60 to-[#C47A1E]/40 backdrop-blur-xl hover:from-[#E8A020]/80 hover:to-[#C47A1E]/60 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-xl border border-white/30 ring-1 ring-white/10">
                        Hubungi Kami <ArrowRight size={18} />
                    </a>

                    {/* Mobile Toggle */}
                    <button className={`md:hidden ${isScrolled ? 'text-[#2C1A00]' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-4">
                        {[
                            { id: 'about', label: 'Tentang Kami' },
                            { id: 'distribution', label: 'Jaringan Distribusi' },
                            { id: 'products', label: 'Produk' },
                            { id: 'harga', label: 'Harga Hari Ini' },
                            { id: 'quality', label: 'Kualitas' },
                            { id: 'contact', label: 'Hubungi Kami' }
                        ].map((item) => (
                            <a key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium hover:text-[#E8A020] ${item.id === 'harga' ? 'text-[#C47A1E] font-bold' : 'text-gray-800'}`}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* 1. HERO SECTION */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=75&w=1920"
                        srcSet="https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=75&w=800 800w, https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=75&w=1200 1200w, https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=75&w=1920 1920w"
                        alt="Telur segar Hans Jaya"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        width="1920"
                        height="1080"
                        sizes="(max-width: 768px) 100vw, 1920px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F00]/80 via-[#1A0F00]/60 to-[#C47A1E]/30 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
                    <div className="max-w-2xl reveal-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#E8A020] animate-pulse" />
                            Distributor Telur Terpercaya
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                            Kualitas & <span className="text-[#E8A020]">Harga Telur</span> Terbaik Hari Ini.
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-xl">
                            Mitra distribusi telur terpercaya di Ponorogo & Sekitarnya selama lebih dari 25 tahun. Menyuplai kebutuhan harian restoran, grosir, hingga industri pangan.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="bg-gradient-to-br from-[#E8A020]/80 to-[#C47A1E]/60 backdrop-blur-xl hover:from-[#E8A020] hover:to-[#C47A1E] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-2xl border border-white/40 ring-1 ring-white/10">
                                Mulai Kemitraan
                            </a>
                            <a href="#harga" className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                Harga Hari Ini
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 & 3. UNIFIED ABOUT & DISTRIBUTION FLOW SECTION */}
            <section id="about" className="py-24 bg-[#FDFAF3] relative overflow-hidden" ref={flowRef}>
                <div id="distribution" className="absolute top-0 left-0 w-full h-0 pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* TEXT AREA: LEFT SIDE */}
                    <div className="lg:col-span-4 relative z-20 reveal-up">
                        <h2 className="text-[#E8A020] font-bold tracking-wider uppercase text-sm mb-3">Tentang & Jaringan</h2>
                        <h3 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-[#2C1A00] leading-tight">
                            Berdedikasi Sejak 1999 Menjaga <span className="text-[#E8A020]">Kualitas</span>.
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Berpusat di Ponorogo, Hans Jaya telah mendedikasikan diri selama lebih dari 25 tahun untuk menyalurkan telur segar langsung dari kandang. Jaringan kami kini menjangkau Madiun, Ngawi, Tulungagung, Trenggalek, hingga Purwantoro dengan integritas tinggi.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { label: 'Mitra Klien', value: '500+', icon: Store },
                                { label: 'Ton/Bulan', value: '120+', icon: Package },
                                { label: 'Wilayah Jangkauan', value: 'Ponorogo+', icon: MapPin },
                                { label: 'Tahun Pengalaman', value: '25+', icon: Clock }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl border border-[#E8A020]/10 shadow-sm hover:shadow-xl transition-shadow group">
                                    <stat.icon className="text-[#E8A020] mb-3 group-hover:scale-110 transition-transform" size={24} />
                                    <div className="font-serif text-2xl font-bold text-[#2C1A00] mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-[#C47A1E] font-medium p-4 bg-[#E8A020]/5 rounded-xl border border-[#E8A020]/10">
                            <CheckCircle size={24} className="shrink-0" />
                            <span className="text-sm">Terverifikasi & Bersertifikat Standar Mutu Pangan</span>
                        </div>
                    </div>

                    <div className={`lg:col-span-8 relative w-full ${flowInView ? 'flow-active' : ''}`} style={{ aspectRatio: '1000/800' }}>
                        {/* LINGKARAN CAHAYA DEKORATIF */}
                        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-[#E8A020]/10 rounded-full blur-[100px] pointer-events-none" />
                        <DistributionSVG isMobile={isMobile} flowInView={flowInView} />

                        {/* Hans Jaya (Origin) */}
                        <div className="flow-node stage-0 absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center" style={{ top: '50%', left: '25%' }}>
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-[#E8A020] rounded-3xl shadow-2xl shadow-[#E8A020]/40 flex items-center justify-center text-white rotate-45 group transition-all duration-500 hover:rotate-0 hover:scale-110 border-4 border-white relative z-10">
                                <Truck className="w-7 h-7 md:w-10 md:h-10 -rotate-45 group-hover:rotate-0 transition-all duration-500 drop-shadow-md" />
                            </div>
                            <span className="absolute top-[110%] mt-2 font-serif font-black text-sm md:text-lg text-[#2C1A00] whitespace-nowrap bg-white/90 px-4 py-2 rounded-xl backdrop-blur-md shadow-lg border border-[#E8A020]/30 uppercase tracking-widest pointer-events-none">HANS JAYA<div className="absolute -inset-1 rounded-xl ring-2 ring-[#E8A020]/20 animate-pulse pointer-events-none"></div></span>
                        </div>

                        {/* Destinations */}
                        {[
                            { id: 'd1', label: 'Supermarket', icon: ShoppingCart, x: '88%', y: '10%' },
                            { id: 'd2', label: 'Restoran', icon: Utensils, x: '75%', y: '18%' },
                            { id: 'd3', label: 'UMKM', icon: Users, x: '92%', y: '28%' },
                            { id: 'd4', label: 'MBG', icon: CheckCircle, x: '82%', y: '38%' },
                            { id: 'd5', label: 'Pasar', icon: MapPin, x: '94%', y: '48%' },
                            { id: 'd6', label: 'Grosir', icon: Package, x: '78%', y: '58%' },
                            { id: 'd7', label: 'Rumah Tangga', icon: Home, x: '91%', y: '68%' },
                            { id: 'd8', label: 'Baking', icon: Cake, x: '76%', y: '78%' },
                            { id: 'd9', label: 'Catering', icon: ChefHat, x: '89%', y: '88%' },
                            { id: 'd10', label: 'Industri', icon: Factory, x: '72%', y: '95%' },
                        ].map((node, idx) => (
                            <div
                                key={node.id}
                                className="flow-node stage-2 absolute -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
                                style={{ top: node.y, left: node.x, transitionDelay: flowInView ? `${3 + (idx * 0.15)}s` : '0s' }}
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-[#C47A1E]/30 flex items-center justify-center text-[#C47A1E] group-hover:scale-110 group-hover:bg-[#C47A1E] group-hover:text-white transition-all duration-300 relative mx-auto z-10">
                                    <node.icon className="w-4 h-4 md:w-5 md:h-5" />
                                    {/* Tooltip */}
                                    <div className="absolute top-1/2 right-[120%] -translate-y-1/2 bg-[#2C1A00] text-white text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        Tujuan: {node.label}
                                        <div className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-[#2C1A00]" />
                                    </div>
                                </div>
                                <span className="absolute top-[110%] left-1/2 -translate-x-1/2 mt-1 md:mt-2 block text-center font-medium text-[10px] sm:text-[11px] md:text-xs text-gray-700 whitespace-nowrap">{node.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. PRODUCTS */}
            <section id="products" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
                        <div>
                            <h2 className="text-[#E8A020] font-bold tracking-wider uppercase text-sm mb-3">Varian Produk</h2>
                            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-[#2C1A00]">Kualitas dalam Setiap Butir</h3>
                        </div>
                        <a href="#contact" className="mt-6 md:mt-0 text-[#C47A1E] font-medium hover:text-[#E8A020] flex items-center gap-2 group">
                            Pesan Sekarang <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                        {useMemo(() => products.map((item, i) => (
                            <div key={i} className="reveal-up group rounded-2xl overflow-hidden bg-[#FDFAF3] border border-gray-100 hover:shadow-2xl transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden">
                                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/90 backdrop-blur px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold text-[#C47A1E] shadow-sm">
                                        {item.badge}
                                    </div>
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                </div>
                                <div className="p-3 sm:p-6 relative">
                                    <h4 className="font-serif text-base sm:text-2xl font-bold text-[#2C1A00] mb-1 sm:mb-2 truncate sm:whitespace-normal">{item.name}</h4>
                                    <p className="text-gray-600 text-[10px] sm:text-sm mb-3 sm:mb-6 line-clamp-1 sm:line-clamp-2">{item.desc}</p>
                                    <button className="w-full py-1.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur-sm border sm:border-2 border-[#E8A020]/30 text-[#C47A1E] text-xs sm:text-sm font-bold hover:bg-[#E8A020] hover:text-white hover:shadow-lg hover:shadow-[#E8A020]/20 transition-all duration-300">
                                        Cek Stok
                                    </button>
                                </div>
                            </div>
                        )), [])}
                    </div>
                </div>
            </section>

            {/* 5. FARM & QUALITY — REDESIGN INTERAKTIF */}
            <section id="quality" className="py-20 bg-[#FDFAF3] relative overflow-hidden">
                {/* Subtle bg decoration */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8A020]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-14 reveal-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8A020]/10 border border-[#E8A020]/20 text-[#C47A1E] text-xs font-bold tracking-widest uppercase mb-4">
                            <ShieldCheck className="w-3.5 h-3.5" /> Standar Kualitas
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-black text-[#2C1A00]">
                            Dari Sumber yang <span className="text-[#E8A020]">Terawat Baik</span>
                        </h2>
                        <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
                            Setiap butir telur merupakan hasil dari sistem peternakan terstandar dengan pengawasan ketat dari kandang hingga pengiriman.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* LEFT — Image with floating stats */}
                        <div className="relative reveal-fade order-2 lg:order-1">
                            {/* Gold offset frame */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E8A020] to-[#C47A1E] lg:translate-x-3 lg:translate-y-3 rounded-3xl opacity-30" />
                            <img
                                src="https://images.unsplash.com/photo-1548550023-2bf3c49b338c?auto=format&fit=crop&q=65&w=1000"
                                alt="Fasilitas Kandang Modern Hans Jaya"
                                className="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-2xl"
                                loading="lazy"
                                decoding="async"
                                width="1000"
                                height="420"
                                sizes="(max-width: 768px) 100vw, 1000px"
                            />
                            {/* Floating stat cards */}
                            <div className="absolute z-20 bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-4 border border-white">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8A020]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8A020]" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-black font-serif text-xl sm:text-2xl text-[#2C1A00] leading-none">99.8%</p>
                                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 truncate">Tingkat Lulus QC</p>
                                </div>
                            </div>
                            <div className="absolute z-20 top-4 right-4 sm:top-6 sm:right-6 bg-[#2C1A00]/90 backdrop-blur-sm rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-3 text-white border border-white/10 text-right">
                                <p className="text-[10px] text-white/60 uppercase tracking-wider font-bold mb-0.5">Panen Harian</p>
                                <p className="font-black font-serif text-lg sm:text-xl leading-none">50.000+</p>
                                <p className="text-[10px] text-[#E8A020] mt-0.5">butir / hari</p>
                            </div>
                        </div>

                        {/* RIGHT — Interactive accordion */}
                        <div className="order-1 lg:order-2 reveal-up space-y-3">
                            {qualityItems.map((item, i) => (
                                <QualityAccordion key={i} item={item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIAL MARQUEE - PREMIUM REDESIGN */}
            <section className="pt-12 pb-2 bg-[#FDFAF3] relative overflow-hidden">
                {/* Modern Abstract Ambient Glowing Orbs */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8A020]/8 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C47A1E]/8 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

                <div className="text-center mb-10 relative z-10 reveal-up">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8A020]/20 text-[#C47A1E] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                        <Users className="w-3 h-3 text-[#E8A020]" />
                        Penilaian Pelanggan
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl font-black text-[#2C1A00]">
                        Mengapa Kami <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A020] to-[#C47A1E] relative inline-block">
                            Nomor #1 di Ponorogo
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8A020]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
                        </span>
                    </h3>
                    <p className="text-gray-500 mt-6 max-w-lg mx-auto text-sm italic">"Kepercayaan mitra adalah kunci keberhasilan Hans Jaya selama lebih dari dua dekade."</p>
                </div>

                <div className="relative reveal-fade z-10 py-4 max-w-lg mx-auto px-4">
                    <div className="relative h-[260px] w-full">
                        {testimonials.map((testi, idx) => {
                            const offset = (idx - activeTesti + testimonials.length) % testimonials.length;
                            const isActive = offset === 0;

                            return (
                                <div 
                                    key={idx} 
                                    onClick={() => setActiveTesti(idx)}
                                    className="absolute top-0 left-0 w-full cursor-pointer group"
                                    style={{
                                        opacity: offset === 0 ? 1 : offset === 1 ? 0.3 : 0,
                                        transform: `translateY(${offset * 20}px) scale(${1 - offset * 0.05})`,
                                        zIndex: 40 - offset,
                                        pointerEvents: isActive ? 'auto' : 'none',
                                        transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                                    }}
                                >
                                    {/* Enhanced Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r from-[#E8A020] via-[#C47A1E] to-[#E8A020] rounded-[2rem] blur-2xl transition-all duration-1000 ${isActive ? 'opacity-20' : 'opacity-0'}`} />
                                    
                                    <div className={`relative h-full ${isActive ? 'bg-white/90' : 'bg-white/40'} backdrop-blur-2xl border border-white/50 rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden`}>
                                        {/* Background Decor */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E8A020]/10 rounded-full blur-3xl pointer-events-none" />
                                        
                                        <svg className="absolute top-6 right-6 w-12 h-12 text-[#E8A020]/10 rotate-180 pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>

                                        <div className={isActive ? 'opacity-100' : 'opacity-0 transition-opacity'}>
                                            <div className="flex gap-1 text-[#E8A020] mb-5">
                                                {[...Array(5)].map((_, starIdx) => <Star key={starIdx} className="w-4 h-4 fill-current" />)}
                                            </div>
                                            <p className="text-[#2C1A00] text-base md:text-lg leading-relaxed font-semibold mb-6 relative z-10">
                                                <span className="text-[#E8A020] text-3xl font-serif absolute -left-4 -top-2 opacity-50">"</span>
                                                {testi.quote}
                                                <span className="text-[#E8A020] text-3xl font-serif absolute -bottom-4 opacity-50">"</span>
                                            </p>
                                        </div>
                                        
                                        <div className={`flex items-center gap-4 border-t border-gray-100/50 pt-5 ${isActive ? 'opacity-100' : 'opacity-0 transition-opacity'}`}>
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#E8A020] to-[#C47A1E] rounded-2xl flex items-center justify-center font-serif font-black text-white text-lg shadow-xl ring-4 ring-white/50 shrink-0 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                                {testi.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#2C1A00] text-base leading-none mb-1">{testi.name}</h5>
                                                <p className="text-[#C47A1E] text-xs font-bold uppercase tracking-wider">{testi.role} <span className="text-gray-400 font-normal lowercase">di</span> {testi.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveTesti(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${activeTesti === idx ? 'w-8 bg-[#E8A020]' : 'w-1.5 bg-[#E8A020]/25 hover:bg-[#E8A020]/50'}`}
                                aria-label={`Testimoni ${idx+1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* HARGA TELUR — COMPACT: TAGLINE LEFT + TABLE RIGHT */}
            <section id="harga" className="py-16 bg-[#1A0F00] text-white relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#E8A020 1px, transparent 1px), linear-gradient(90deg, #E8A020 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#E8A020]/50 to-transparent" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#E8A020]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center reveal-up">

                        {/* LEFT — Tagline */}
                        <div className="lg:col-span-2">
                            <p className="text-[#E8A020] text-xs font-bold tracking-[0.25em] uppercase mb-4">Harga Fleksibel</p>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] italic">
                                Ceritakan kebutuhan Anda,{' '}
                                <span className="text-[#E8A020]">kita sesuaikan</span>{' '}
                                harganya.
                            </h2>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-10 h-px bg-[#E8A020]/50" />
                                <a href="#contact" className="text-[#E8A020] text-sm font-bold hover:text-white transition-colors flex items-center gap-1.5">
                                    Pesan Sekarang <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Price List */}
                        <div className="lg:col-span-3">
                            {eggPrices.length > 0 ? (
                                <div className="space-y-4">
                                    {eggPrices.map((item) => {
                                        const diff = item.current_price - item.previous_price;
                                        const isUp = diff > 0;
                                        const isDown = diff < 0;
                                        return (
                                            <div key={item.id} className="flex items-center justify-between gap-4">
                                                <span className="font-semibold text-white text-sm">{item.type_name}</span>
                                                <div className="flex-1 h-px bg-white/5" />
                                                <span className="font-serif text-xl font-black text-[#E8A020]">{formatRupiah(item.current_price)}</span>
                                                <div className="w-24 flex items-center justify-end gap-1">
                                                    {isUp && (
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400">
                                                            <TrendingUp className="w-3.5 h-3.5" />
                                                            +{formatRupiah(diff)}
                                                        </span>
                                                    )}
                                                    {isDown && (
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                                                            <TrendingDown className="w-3.5 h-3.5" />
                                                            {formatRupiah(diff)}
                                                        </span>
                                                    )}
                                                    {!isUp && !isDown && (
                                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-white/25">
                                                            <Minus className="w-3.5 h-3.5" />
                                                            Stabil
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <p className="text-[10px] text-white/40 text-right pt-2 tracking-wide">
                                        Update: {new Date(eggPrices[0]?.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center text-white/20 py-12 text-sm">Memuat data harga...</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>


            {/* 7. CONTACT — REDESIGN FRESH */}
            <section id="contact" className="pt-16 pb-12 bg-[#FDFAF3] relative overflow-hidden">
                {/* Ambient background orbs */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E8A020]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C47A1E]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-12 reveal-up">
                        <h2 className="font-serif text-3xl md:text-4xl font-black text-[#2C1A00]">Mulai Kemitraan <span className="text-[#E8A020]">Hari Ini</span></h2>
                        <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">Isi formulir singkat berikut dan tim kami akan menghubungi Anda dalam 1×24 jam.</p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 items-start reveal-up">
                        {/* LEFT — Image + Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Image */}
                            <div className="relative rounded-2xl overflow-hidden h-52 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1498834060237-38a72ac7090d?auto=format&fit=crop&w=800&q=65"
                                    alt="Telur segar Hans Jaya"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="400"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A00]/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[#E8A020]">Hans Jaya</p>
                                    <p className="font-serif text-xl font-bold">Segar. Terjamin. Terpercaya.</p>
                                </div>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Phone, label: 'WhatsApp', value: '+62 899-3179-345' },
                                    { icon: Mail, label: 'Email', value: 'mitra@hansjaya.com' },
                                    { icon: MapPin, label: 'Lokasi', value: 'Ponorogo, Jawa Timur' },
                                    { icon: Clock, label: 'Operasional', value: 'Sen–Sab 04–17 WIB' },
                                ].map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="rounded-xl border border-[#E8A020]/20 bg-white p-3 shadow-sm hover:shadow-md hover:border-[#E8A020]/40 transition-all duration-200">
                                        <Icon className="w-4 h-4 mb-1.5 text-[#C47A1E]" />
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#C47A1E]/60">{label}</p>
                                        <p className="text-xs font-semibold text-[#2C1A00] leading-tight mt-0.5">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — Form */}
                        <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <form className="space-y-4" onSubmit={handleSendMessage}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Nama / Bisnis</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020] transition-all" 
                                            placeholder="Budi / Resto Budi" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Jenis Usaha</label>
                                        <select 
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020] transition-all text-gray-600"
                                        >
                                            <option>Pilih Jenis Usaha</option>
                                            <option>Restoran / Kafe</option>
                                            <option>Program MBG</option>
                                            <option>Toko Grosir</option>
                                            <option>Baking / Roti</option>
                                            <option>Catering</option>
                                            <option>Industri Pangan</option>
                                            <option>Rumah Tangga</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Kota</label>
                                        <input 
                                            type="text" 
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020] transition-all" 
                                            placeholder="Kota domisili" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Kebutuhan (Peti/Minggu)</label>
                                        <input 
                                            type="number" 
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020] transition-all" 
                                            placeholder="Est. jumlah" 
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Pesan Tambahan</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={3} 
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020] transition-all resize-none" 
                                        placeholder="Tulis pesan Anda..."
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button 
                                        type="submit"
                                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-3 group"
                                    >
                                        <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" /></svg>
                                        Kirim via WhatsApp
                                    </button>
                                    <p className="text-center text-[10px] text-gray-400 mt-3">Pesanan Anda akan diteruskan langsung ke WhatsApp kami.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER — PREMIUM REDESIGN */}
            <footer className="bg-[#1A0F00] text-white relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#E8A020 1px, transparent 1px), linear-gradient(90deg, #E8A020 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

                {/* Top glow accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#E8A020]/50 to-transparent" />

                {/* Stats strip */}
                <div className="border-b border-white/10 relative z-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '500+', label: 'Mitra Aktif' },
                            { value: '120 Ton', label: 'Distribusi/Bulan' },
                            { value: '20+', label: 'Tahun Pengalaman' },
                            { value: '99%', label: 'On-Time Delivery' },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <p className="font-serif text-2xl font-bold text-[#E8A020]">{value}</p>
                                <p className="text-white/40 text-xs mt-0.5 uppercase tracking-widest">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main footer body */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid md:grid-cols-12 gap-10 relative z-10">
                    {/* Brand col */}
                    <div className="md:col-span-4">
                        <a href="#" className="font-serif text-3xl font-bold text-white tracking-tight block mb-3">
                            Hans Jaya<span className="text-[#E8A020]">.</span>
                        </a>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">Distributor telur pilihan terpercaya di Ponorogo. Berkomitmen memberikan kualitas dan kesegaran terbaik langsung dari kandang untuk setiap mitra bisnis.</p>
                        
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <MapPin size={16} className="text-[#E8A020]" />
                                <span>Jl. Raya Ponorogo - Madiun, Jawa Timur</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <Phone size={16} className="text-[#E8A020]" />
                                <span>+62 899-3179-345</span>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[
                                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                                { label: 'WhatsApp', path: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z' },
                            ].map(({ label, path }) => (
                                <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E8A020] hover:border-[#E8A020] transition-all duration-300 group">
                                    <svg className="w-5 h-5 fill-current text-white/50 group-hover:text-white" viewBox="0 0 24 24"><path d={path} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-2">
                        <h6 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Navigasi</h6>
                        <ul className="space-y-3 text-sm">
                            {[['#about', 'Tentang Kami'], ['#distribution', 'Jaringan'], ['#products', 'Produk'], ['#quality', 'Kualitas'], ['#contact', 'Kontak']].map(([href, label]) => (
                                <li key={label}>
                                    <a href={href} className="text-white/40 hover:text-[#E8A020] transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-px bg-[#E8A020] transition-all duration-300 inline-block" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="md:col-span-2">
                        <h6 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Produk</h6>
                        <ul className="space-y-3 text-sm">
                            {['Telur Ayam', 'Telur Bebek', 'Telur Asin', 'Telur Omega-3', 'Telur Puyuh'].map((p) => (
                                <li key={p}>
                                    <a href="#products" className="text-white/40 hover:text-[#E8A020] transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-px bg-[#E8A020] transition-all duration-300 inline-block" />
                                        {p}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="md:col-span-4">
                        <h6 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Update & Promo</h6>
                        <p className="text-white/40 text-sm mb-4 leading-relaxed">Daftarkan email Anda dan dapatkan info penawaran terbaru langsung di inbox Anda.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="email@bisnis.com" className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E8A020] transition-all" />
                            <button className="bg-[#E8A020] hover:bg-[#C47A1E] text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors whitespace-nowrap">
                                Daftar
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['✓ Gratis Ongkir Area JawaTimur', '✓ Pengiriman Harian', '✓ Bebas Biaya Daftar'].map((badge) => (
                                <span key={badge} className="text-[10px] text-[#E8A020]/70 border border-[#E8A020]/20 rounded-full px-2.5 py-1 font-medium">{badge}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 relative z-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
                        <p>© {new Date().getFullYear()} Hans Jaya Distribution. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[#E8A020] transition-colors">Kebijakan Privasi</a>
                            <a href="#" className="hover:text-[#E8A020] transition-colors">Syarat & Ketentuan</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}