const UeberUns = () => {
    return (
        <section id="ueber-uns" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary sm:text-4xl">Über uns</h2>
                    <p className="mt-4 text-lg text-brand-primary">
                        Ihr Erfolg ist unser Ziel
                    </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card flex items-center space-x-4">
                        <span className="p-4 bg-black text-blue-600 rounded-lg">🌟</span>
                        <p className="text-lg font-medium text-secondary">Leidenschaft für Innovation</p>
                    </div>
                    <div className="card flex items-center space-x-4">
                        <span className="p-4 bg-black text-purple-600 rounded-lg">🤝</span>
                        <p className="text-lg font-medium text-secondary">Partnerschaftliche Zusammenarbeit</p>
                    </div>
                    <div className="card flex items-center space-x-4">
                        <span className="p-4 bg-black text-green-600 rounded-lg">🚀</span>
                        <p className="text-lg font-medium text-secondary">Fokus auf Ergebnisse</p>
                    </div>
                    <div className="card flex items-center space-x-4">
                        <span className="p-4 bg-black text-red-600 rounded-lg">💡</span>
                        <p className="text-lg font-medium text-secondary">Kreative Problemlösungen</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UeberUns;
