import React from 'react';

interface LogoProps {
    className?: string; // Untuk custom tailwind size e.g. "text-3xl" atau "text-6xl"
    dark?: boolean; // True jika background gelap (teks putih), false jika background terang (teks hitam)
}

export const Logo: React.FC<LogoProps> = ({ 
    className = 'text-4xl', 
    dark = true 
}) => {
    const textColor = dark ? 'text-[#FAFAFA]' : 'text-[#1A1A1A]';

    return (
        <div className={`font-grotesk font-black leading-[0.76] tracking-tighter uppercase select-none ${textColor} ${className}`}>
            <div>HANS</div>
            <div className="flex items-end">
                <span>JAYA</span>
                <span className="inline-block w-[0.15em] h-[0.15em] rounded-full bg-[#FFC300] ml-[0.03em] mb-[0.05em] flex-shrink-0"></span>
            </div>
        </div>
    );
};

export default Logo;
