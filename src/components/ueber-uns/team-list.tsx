const TeamList = () => {
  const people = [
      {
          name: 'Mazlum Kaya',
          role: 'Gründer',
          imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          linkedin: 'https://www.linkedin.com/in/mazlumkaya/',
      },
      {
          name: 'Team',
          role: '10 Personen',
          imageUrl:
              'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          linkedin: 'https://www.linkedin.com/in/janedoe',
      },
      {
          name: 'Partner',
          role: '+50 Unternehmen',
          imageUrl:
              'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          linkedin: 'https://www.linkedin.com/in/johnsmith',
      },
  ];

  return (
      <section id="team" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                      Unser Team zum Erfolg!
                  </h2>
                  <p className="mt-6 text-lg text-secondary">
                      Gemeinsam schaffen wir innovative Lösungen und setzen auf partnerschaftliche Zusammenarbeit.
                  </p>
              </div>

              {/* Team Grid */}
              <ul role="list" className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {people.map((person) => (
                      <li key={person.name} className="flex flex-col items-center text-center">
                          <img
                              alt=""
                              src={person.imageUrl}
                              className="h-32 w-32 rounded-full border-2 border-gray-300 shadow-md"
                          />
                          <div className="mt-6">
                              <h3 className="text-lg font-medium text-primary">{person.name}</h3>
                              <p className="text-sm text-brand-primary">{person.role}</p>
                              <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-2 inline-flex items-center text-sm text-text-primary hover:text-brand-secondary"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      className="h-4 w-4 mr-2"
                                  >
                                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.4h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.267c.795-.756 1.852-1.267 3-1.267 2.485 0 4.5 2.015 4.5 4.5v5.5z" />
                                  </svg>
                                  LinkedIn
                              </a>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </section>
  );
};

export default TeamList;
