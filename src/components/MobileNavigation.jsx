import React, {useState} from 'react';

export const MobileNavigation = () => {
    const [open,setOpen] = useState(false);

    const navigationItems = [
        'Portfolio',
        'Home plans',
        'Available slots',
        'About us',
        'Contact'
    ]

    return(
        <>
            <header className="md:hidden flex relative flex-row justify-between items-center gap-10 p-2">
                <div className="flex flex-row gap-4">
                    <img src="hero-page/logo.jpg" alt="logo" className="h-8 w-8"/>
                    <p className="text-xl font-bold">Luxury Homes</p>
                </div>
                <button onClick={() => setOpen(prevState => !prevState)}>
                    {!open ? <img src="https://www.svgrepo.com/show/384025/button-circle-round-menu.svg"
                                  className="w-10 h-10"
                                  alt="button"/> :
                        <img src="https://www.svgrepo.com/show/522801/close-circle.svg"
                             className="w-10 h-10"
                             alt="button"/>}
                </button>
            </header>
            {open && (
                <div className="flex flex-col p-2 gap-4 z-10 absolute bg-white w-full">
                    {navigationItems.map((item) =>(
                        <p key={item} className="text-slate-600 cursor-pointer">{item}</p>
                    ))}
                </div>
            )}
        </>
    )
};