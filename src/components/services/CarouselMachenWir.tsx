import { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; // Für die Touch-Swipe-Funktionalität

import image1 from '../images/01.png';
import image2 from '../images/02.png';
import image3 from '../images/03.png';
import image4 from '../images/04.png';

const carouselItems = [
    {
        image: image1,
        title: 'Beratung & Strategie',
        description:
            'Jeder Beginn ist dazu bestimmt Fragen zu stellen, denn nur, wer wirklich versteht, kann wertschöpfend arbeiten. Gemeinsam werden wir eine Strategie und Technologie erarbeiten, die perfekt auf Ihr Vorhaben abgestimmt ist. Egal ob online oder offline, im ersten Schritt setzen wir uns zusammen und besprechen auf Augenhöhe Ihr Projekt.',
    },
    {
        image: image2,
        title: 'Design & Konzeption',
        description:
            'Von einem groben Entwurf, bis hin zu einem detaillierten Prototypen werden wir Ihr Produkt begleiten, um Ihr Unternehmen auf ein neues Maß zu bringen. Wir entwickeln User Interfaces und Marketingstrategien mit einem klaren Ziel vor Augen, die speziell auf Ihr Unternehmen und Ihre Zielgruppe zugeschnitten sind. Möchten Sie den gemeinsamen Weg mit uns antreten?',
    },
    {
        image: image3,
        title: 'Programmierung & Entwicklung',
        description:
            'Unter Berücksichtigung der aktuellen Entwicklungsstandards produzieren wir langlebige und update-fähige Lösungen, sodass Sie immer auf der Überholspur der Technologie bleiben. Denn wer möchte schon an veralteten Lösungen festhalten, wenn man mit unseren innovativen Kreationen die Spitze erreichen kann?',
    },
    {
        image: image4,
        title: 'Support & Service',
        description:
            'Unsere Dienstleistungen reichen weit über die bloße Online-Stellung hinaus. Wir bieten Ihnen eine langfristige Betreuung, die kontinuierliche Weiterentwicklung und regelmäßige Updates umfasst. Ein erfolgreiches Projekt ist niemals wirklich abgeschlossen, sondern muss ständig optimiert und aktualisiert werden – und genau dafür sind wir da!',
    },
];

const CarouselMachenWir = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoSliding, setIsAutoSliding] = useState(true); // Kontrolliert die automatische Bewegung
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null); // Ref für den Timer

    // Funktion zum Wechseln des Bildes
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    // Auto-Slide Funktion
    const startAutoSliding = () => {
        intervalRef.current = setInterval(nextImage, 4000); // Timer
    };

    // Stoppe die automatische Bewegung
    const stopAutoSliding = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsAutoSliding(false); // Deaktiviert die automatische Bewegung
    };

    // Swipeable Hook für die Touch-Funktionalität
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Left') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            }
            if (eventData.dir === 'Right') {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
            }
            stopAutoSliding(); // Stoppt die automatische Bewegung bei Swipe
        },
    });

    // Effekt für das automatische Swipen
    useEffect(() => {
        if (isAutoSliding) {
            startAutoSliding();
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoSliding]);

    // Funktion für das Klicken eines kleinen Buttons
    const goToImage = (index: number) => {
        setCurrentIndex(index);
        stopAutoSliding(); // Stoppt die automatische Bewegung, wenn der Benutzer klickt
    };

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Große Überschrift */}
                <div className="text-center mb-12 intersect-once intersect:motion-preset-slide-up">
                    <h2 className="text-7xl font-bold motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth">
                        <span className="">Wie wir das</span>
                        <span className="text-white"> machen?</span>
                    </h2>
                </div>

                {/* Slider */}
                <div
                    className="relative flex items-center overflow-hidden intersect-once intersect:motion-preset-slide-up"
                    {...handlers} // Swipeable Handler
                >
                    {/* Slider-Track */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {carouselItems.map((item, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                            >
                                {/* Links: Bild */}
                                <div className="relative w-full h-[350px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover mx-auto"
                                    />
                                </div>
                                {/* Rechts: Textbereich */}
                                <div className="select-none">
                                    <h3 className="text-3xl font-semibold text-text-primary mb-4">
                                        {item.title}
                                    </h3>
                                    <div className="border-t-2 border-blue-500 w-1/4 ml-0 my-4"></div>
                                    <p className="text-lg text-text-secondary">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Viereckige Buttons für die Bildnavigation unter dem Bild */}
                <div className="mt-8 flex justify-center gap-4">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-5 h-5 rounded-md border-2 ${
                                index === currentIndex
                                    ? 'bg-brand-primary'
                                    : 'bg-transparent'
                            } border-brand-primary hover:bg-brand-primary transition duration-300`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarouselMachenWir;
