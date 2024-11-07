import React, {useEffect} from 'react';

export const ExpertiseSection = () => {
    useEffect(() => {
        const text = document.getElementById('expertise-text');
        const image = document.getElementById('expertise-image')

        const checkScrollPosition = () => {
            if (text && image) {
                const rect = text.getBoundingClientRect();
                const triggerPoint = window.innerHeight * 0.5;



                if (rect.top > 0 && rect.top < triggerPoint) {
                    text.classList.add('animate-slideInLeft');
                    image.classList.add('translate-x-0', 'opacity-100');
                    image.classList.remove('translate-x-full', 'opacity-0');
                    text.classList.remove('opacity-0');
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



    return (
        <section className="flex flex-col md:flex-row gap-20 justify-center items-center m-10">
            <div className="flex flex-col gap-6 opacity-0"
                 id="expertise-text">
                <h3 className="text-2xl font-bold">OUR <span className="text-yellow-600">EXPERTISE</span></h3>
                <p className="max-w-[300px]">At Luxury Homes we strive for excellence and style. Our team is dedicated
                    to exceptional and innovative design that pushes the boundaries of creativity. We desire to create a
                    custom space in a timely manner to the highest of standards.</p>
                <p className="max-w-[300px]">We specialize in contemporary one-of-a-kind homes but from modern ranchers
                    to custom cabins we work with our clients to design the home of their dreams that is not only unique
                    but built with quality, efficiency, and pride.</p>
            </div>
            <img id="expertise-image" src="hero-page/interior.jpg" alt="interior" className="opacity-0 translate-x-full transition-transform duration-500 ease-out" />
        </section>
    )
};
