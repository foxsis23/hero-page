import React from 'react';

export const Navigation = () => {
    const navigationItems = [
        'Portfolio',
        'Home plans',
        'Available slots',
        'About us',
        'Contact'
    ]


    return (
        <header className="flex-row gap-32 items-center p-6 justify-center md:flex hidden">
            <img src="logo.jpg" alt="logo" className="w-14 h-14"/>
            <nav className="flex flex-row gap-24 text-lg items-center">
                {navigationItems.map((item) => (
                    <p
                        key={item}
                        className="cursor-pointer hover:text-[#ff8787] transition-all ease-in duration-200">
                        {item}
                    </p>
                ))}

            </nav>
        </header>
    )

};
