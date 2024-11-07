import React from 'react';

export const Footer = () => (
    <div className="relative">
        <img src="/footer.jpg" alt="footer-img" className="hidden md:block" />
        <footer className="md:absolute w-full bottom-0 flex flex-col md:flex-row md:gap-20 gap-4 items-center justify-center bg-black opacity-60 text-white p-10">
            <p className="text-lg text-center">2024 Luxery Homes All rights reserved</p>
            <div className="flex flex-col gap-2 items-center">
                <img src="/logo.jpg" alt="logo" className="w-14 h-14"/>
                <p className="font-bold text-3xl">Luxury Homes</p>
            </div>
            <p className="text-lg text-center">Designed & developed by Smart Chameleon</p>
        </footer>
    </div>

);