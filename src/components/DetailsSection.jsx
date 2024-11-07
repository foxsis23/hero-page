import React, {useEffect} from 'react';

export const DetailsSection = () => {

    useEffect(() => {
        const image1 = document.getElementById('image-1');
        const image2 = document.getElementById('image-2');
        const image3 = document.getElementById('image-3');

        const checkScrollPosition = () => {
            if (image1 && image2 && image3) {
                const rect = image1.getBoundingClientRect();
                const triggerPoint = window.innerHeight * 0.5;

                if (rect.top > 0 && rect.top < triggerPoint) {
                    image1.classList.add('animate-slideInFromTop');
                    image2.classList.add('animate-slideInFromBottom');
                    image3.classList.add('animate-slideInFromTop');
                    image1.classList.remove('opacity-0');
                    image2.classList.remove('opacity-0');
                    image3.classList.remove('opacity-0');
                    window.removeEventListener('scroll', checkScrollPosition);
                }
            }
        };

        const handleLoad = () => {
            checkScrollPosition();
            window.addEventListener('scroll', checkScrollPosition);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return(
        <section className="m-10 flex flex-col gap-10 md:flex-row items-center justify-center">
            <div className="relative w-full bg-cover bg-center md:mb-20 opacity-0" id="image-1">
                <img src='hero-page/details1.jpg' alt="details_img" className="h-[600px]"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Portfolio</h1>
                </div>
            </div>
            <div className="relative w-full bg-cover bg-center opacity-0" id="image-2">
                <img src='hero-page/details2.jpg' alt="details_img" className="h-[600px]"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Plans</h1>
                </div>
            </div>
            <div className="relative w-full bg-cover bg-center md:mb-40 opacity-0" id="image-3">
                <img src='hero-page/details3.jpg' alt="details_img" className="h-[600px]"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Lots</h1>
                </div>
            </div>
        </section>
    )
}