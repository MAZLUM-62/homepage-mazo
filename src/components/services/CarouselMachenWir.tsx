import { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable'; // Für Touch-Gesten

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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [deltaX, setDeltaX] = useState(0); // Unterschied zwischen Start- und aktueller Position
    const trackRef = useRef<HTMLDivElement>(null);

    // Swipeable Hook für die Touch-Funktionalität
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Left') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            }
            if (eventData.dir === 'Right') {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
            }
        },
        preventScrollOnSwipe: true,
        trackMouse: false, // Hier wird die Maus nicht getrackt, da wir eigene Mauslogik verwenden
    });

    // Mausinteraktionen
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX); // Startposition speichern
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return; // Nur reagieren, wenn Maus gedrückt ist
        setDeltaX(e.clientX - startX); // Bewegung berechnen
    };

    const handleMouseUp = () => {
        if (isDragging) {
            // Nur bei Dragging auswerten
            if (deltaX > 0.1) {
                // Wenn genug nach rechts gezogen wurde
                setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
            } else if (deltaX < -0.1) {
                // Wenn genug nach links gezogen wurde
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            }
        }
        // Reset der Werte
        setIsDragging(false);
        setDeltaX(0);
    };

    const handleMouseLeave = () => {
        // Falls die Maus das Element verlässt, zurücksetzen
        setIsDragging(false);
        setDeltaX(0);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Große Überschrift */}


                <div className="text-center mb-12 intersect-once intersect:motion-preset-slide-up">
                    <h2 className="text-7xl font-bold motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth">
                        <span className="bg-brand-primary text-bg-primary px-2 py-1 rounded-md font-mono">
                           WIE WIR DAS
                        </span>
                        <span className="text-white"> machen?</span>
                    </h2>
                </div>
                {/* Slider */}
                <div
                    className="relative flex items-center overflow-hidden intersect-once intersect:motion-preset-slide-up"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    {...handlers} // Swipeable Handler für Touch-Events
                >
                    {/* Slider-Track */}
                    <div
                        ref={trackRef}
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
                                <div className="relative w-full h-[350px] overflow-hidden select-none px-10">
                                    <img
                                        src={item.image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover mx-auto pointer-events-none"
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
                            className={`w-5 h-5 rounded-md border-2 ${index === currentIndex
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
