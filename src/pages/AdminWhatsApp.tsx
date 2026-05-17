import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const ADMIN_PASSWORD = 'hansjaya2024';

export default function AdminWhatsApp() {
    const [qrValue, setQrValue] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [lastFetch, setLastFetch] = useState('');

    // Password Gate
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [wrongPass, setWrongPass] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === ADMIN_PASSWORD) {
            setIsUnlocked(true);
            setWrongPass(false);
        } else {
            setWrongPass(true);
            setPasswordInput('');
        }
    };

    useEffect(() => {
        if (!isUnlocked) return;

        const interval = setInterval(async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3541';
                const response = await fetch(`${API_URL}/api/wa-auth-secret`);
                if (response.ok) {
                    const data = await response.json();
                    setQrValue(data.qr);
                    setIsConnected(data.connected);
                    setLastFetch(new Date().toLocaleTimeString('id-ID'));
                }
            } catch (err) {
                console.error("Gagal terhubung ke backend", err);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isUnlocked]);

    // LOGIN SCREEN
    if (!isUnlocked) {
        return (
            <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center font-sans p-6">
                <form onSubmit={handleLogin} className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-white/5">
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-[#E8A020]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </div>
                        <h1 className="text-lg font-bold text-white">Area Terbatas</h1>
                        <p className="text-white/30 text-xs mt-1">Masukkan password admin untuk melanjutkan</p>
                    </div>

                    <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => { setPasswordInput(e.target.value); setWrongPass(false); }}
                        placeholder="Password"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#E8A020]/50 focus:ring-1 focus:ring-[#E8A020]/30 transition-all mb-3"
                        autoFocus
                    />
                    {wrongPass && <p className="text-red-400 text-xs mb-3 font-medium">Password salah. Coba lagi.</p>}

                    <button type="submit" className="w-full bg-[#E8A020] hover:bg-[#C47A1E] text-white py-3 rounded-lg text-sm font-bold transition-colors">
                        Masuk
                    </button>
                </form>
                <p className="text-white/10 text-[10px] mt-6 uppercase tracking-[0.3em]">Hans Jaya Admin</p>
            </div>
        );
    }

    // MAIN ADMIN SCREEN
    return (
        <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center font-sans p-6">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/5">
                <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-[#25D366]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                    </div>
                </div>

                <h1 className="text-xl font-bold text-white mb-1">WhatsApp Bot</h1>
                
                {isConnected ? (
                    <div>
                        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl p-4 mt-4 mb-6">
                            <p className="font-bold text-sm">✅ Bot Terhubung!</p>
                            <p className="text-xs mt-1 text-emerald-400/70">Kirim perintah update harga dari WhatsApp Anda.</p>
                        </div>

                        <div className="text-left bg-white/5 rounded-xl p-4 border border-white/5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">Format Perintah</p>
                            <div className="space-y-2">
                                <div className="bg-white/5 rounded-lg p-2.5">
                                    <code className="text-[#E8A020] text-xs font-mono">CEK_HARGA</code>
                                    <p className="text-white/30 text-[10px] mt-1">Lihat semua harga saat ini</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-white/5 rounded-lg p-2.5">
                                        <code className="text-[#E8A020] text-[10px] font-mono">UPDATE_TELUR</code>
                                        <p className="text-white/30 text-[9px] mt-1">Ayam Ras</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2.5">
                                        <code className="text-[#E8A020] text-[10px] font-mono">UPDATE_KAMPUNG</code>
                                        <p className="text-white/30 text-[9px] mt-1">Ayam Kampung</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2.5">
                                        <code className="text-[#E8A020] text-[10px] font-mono">UPDATE_BEBEK</code>
                                        <p className="text-white/30 text-[9px] mt-1">Telur Bebek</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2.5">
                                        <code className="text-[#E8A020] text-[10px] font-mono">UPDATE_ASIN</code>
                                        <p className="text-white/30 text-[9px] mt-1">Telur Asin</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2.5">
                                        <code className="text-[#E8A020] text-[10px] font-mono">UPDATE_OMEGA</code>
                                        <p className="text-white/30 text-[9px] mt-1">Omega 3</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2.5">
                                        <code className="text-[#E8A020] text-[10px] font-mono">UPDATE_PUYUH</code>
                                        <p className="text-white/30 text-[9px] mt-1">Telur Puyuh</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-2.5">
                                    <code className="text-[#E8A020] text-xs font-mono">HELP</code>
                                    <p className="text-white/30 text-[10px] mt-1">Tampilkan panduan lengkap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-white/30 mb-6 text-xs">Buka WhatsApp → Tautkan Perangkat → Scan QR di bawah.</p>
                        
                        <div className="flex justify-center mb-6">
                            {qrValue ? (
                                <div className="p-4 bg-white rounded-2xl shadow-lg">
                                    <QRCodeSVG value={qrValue} size={200} />
                                </div>
                            ) : (
                                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center bg-white/5 border border-dashed border-white/10 rounded-2xl">
                                    <div className="w-7 h-7 border-3 border-[#25D366] border-t-transparent rounded-full animate-spin mb-3"></div>
                                    <p className="text-xs text-white/20 font-medium">Generating QR...</p>
                                    <p className="text-[10px] text-white/10 mt-1">Pastikan backend menyala.</p>
                                </div>
                            )}
                        </div>

                        <p className="text-[10px] text-white/15 font-medium">Polling: {lastFetch || '...'}</p>
                    </div>
                )}
            </div>
            <p className="text-white/8 text-[10px] mt-6 uppercase tracking-[0.3em] font-bold">Rahasiakan Tautan Ini</p>
        </div>
    );
}
