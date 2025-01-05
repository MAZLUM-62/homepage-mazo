import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="Kontakt" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Kontakt Anfrage</h2>
          <p className="mt-4 text-lg text-text-secondary">
          Lassen Sie uns besprechen, wie wir Ihnen bei der Umgestaltung Ihres Unternehmens helfen können
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Nachricht Senden
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-text-secondary">Email Us</h3>
                <p className="mt-1 text-gray-600">info@mazocode.de</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-text-secondary">Anrufen</h3>
                <p className="mt-1 text-gray-600">+49 0176 80808080</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-text-secondary">Anschrift</h3>
                <p className="mt-1 text-gray-600">
                  123 Tech Street<br />
                  Innovation District<br />
                  10115 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;