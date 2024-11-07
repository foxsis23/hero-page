import React from 'react';

export const HeroSection = () => (
    <section className="h-full w-full relative">
        <img src="/home.jpg" alt="home" className="object-cover" />
        <div className="absolute top-[10%] left-[20%] opacity-0 animate-slideInLeft bg-black bg-opacity-50">
            <p className="uppercase font-bold md:text-5xl text-2xl text-white md:max-w-[700px]">
                We build <span className="text-yellow-200">luxury homes in spokene</span> at affordable prices
            </p>
            <p className="text-white text-xl mt-6">Luxury in every detail</p>
        </div>
    </section>
);
