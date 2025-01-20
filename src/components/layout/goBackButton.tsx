import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Zurück zur vorherigen Seite
  };

  return (
    <section className="py-2">
      <div className="text-center">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="flex items-center justify-center px-4 py-2 bg-brand-primary text-white rounded-full hover:bg-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105  motion-preset-confetti"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>

          </button>
        </div>
      </div>

    </section>
  );
};

export default BackButton;
