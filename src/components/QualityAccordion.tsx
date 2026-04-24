import { useState } from 'react';
import { Clock, ShieldCheck, Leaf, Truck } from 'lucide-react';

/**
 * Data kualitas yang dipakai di accordion.
 * Kalau perlu ditambah item baru, cukup tambah objek di sini.
 */
export const qualityItems = [
    {
        icon: Clock,
        title: 'Panen Setiap Subuh',
        short: 'Telur segar langsung dari kandang',
        detail:
            'Setiap pagi pukul 04.00 WIB, tim kami memulai proses panen. Telur yang Anda terima hari ini adalah telur yang baru dihasilkan beberapa jam sebelumnya, menjamin kualitas nutrisi tetap utuh.',
        stat: 100,
        statLabel: 'Tingkat Kesegaran',
    },
    {
        icon: ShieldCheck,
        title: 'Seleksi Manual Teliti',
        short: 'Dicek langsung oleh tenaga ahli berpengalaman',
        detail:
            'Kami tidak mengandalkan mesin otomatis. Setiap butir telur melewati tangan dan mata jeli pekerja kandang kami yang sudah berpengalaman belasan tahun untuk mendeteksi keretakan sekecil apapun.',
        stat: 99,
        statLabel: 'Akurasi Seleksi',
    },
    {
        icon: Leaf,
        title: 'Lingkungan Higienis',
        short: 'Kandang bersih dan terawat dengan sistem alami',
        detail:
            'Kesehatan ayam adalah prioritas. Kami menjaga kebersihan kandang secara terjadwal untuk memastikan lingkungan yang sehat tanpa perlu proses kimiawi yang berlebihan, menjaga kemurnian hasil telur.',
        stat: 100,
        statLabel: 'Standar Sanitasi',
    },
    {
        icon: Truck,
        title: 'Distribusi Tercepat',
        short: 'Menjangkau Ponorogo, Madiun, hingga Ngawi',
        detail:
            'Dengan pengalaman 20 tahun, kami memahami rute tercepat untuk memastikan telur tidak tertahan lama di perjalanan. Area Tulungagung, Trenggalek, dan sekitarnya tercover dalam hitungan jam.',
        stat: 99,
        statLabel: 'On-time delivery',
    },
];

type QualityItem = (typeof qualityItems)[number];

interface Props {
    item: QualityItem;
    index: number;
}

/**
 * QualityAccordion
 * Kartu lipat interaktif dengan animated progress bar untuk section Standar Kualitas.
 */
export default function QualityAccordion({ item, index }: Props) {
    const [open, setOpen] = useState(index === 0);
    const Icon = item.icon;

    return (
        <div
            className={`rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                open
                    ? 'border-[#E8A020]/40 bg-white shadow-lg'
                    : 'border-gray-100 bg-white/60 hover:border-[#E8A020]/20 hover:bg-white'
            }`}
            onClick={() => setOpen(!open)}
        >
            {/* Header */}
            <div className="flex items-center gap-4 p-4">
                <div
                    className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        open ? 'bg-[#E8A020] text-white' : 'bg-[#E8A020]/10 text-[#C47A1E]'
                    }`}
                >
                    <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                    <h4
                        className={`font-bold text-sm transition-colors ${
                            open ? 'text-[#2C1A00]' : 'text-gray-700'
                        }`}
                    >
                        {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 truncate">{item.short}</p>
                </div>

                <div
                    className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        open ? 'border-[#E8A020] bg-[#E8A020]' : 'border-gray-200'
                    }`}
                >
                    <svg
                        className={`w-2.5 h-2.5 transition-transform duration-300 ${
                            open ? 'rotate-180 text-white' : 'text-gray-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Expanded content */}
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-4 pb-5 pt-0 border-t border-gray-50">
                    <p className="text-xs text-gray-500 leading-relaxed mt-3 mb-4">{item.detail}</p>

                    {/* Animated progress bar */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#E8A020] to-[#C47A1E] rounded-full transition-all duration-1000 ease-out"
                                style={{ width: open ? `${item.stat}%` : '0%' }}
                            />
                        </div>
                        <span className="text-xs font-black text-[#E8A020] shrink-0">{item.stat}%</span>
                        <span className="text-xs text-gray-400 shrink-0 hidden sm:block">{item.statLabel}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
