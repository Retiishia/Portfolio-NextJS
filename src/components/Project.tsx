const projects = [
    {
      title: 'Weather App',
      description: 'Creating a Weather application using the Weather API and using React.JS',
      imageUrl: '/weatherapp.png',
      caseStudyUrl: 'https://weatherapp.retiishia.my.id/'
    },
    {
      title: 'Datenshi',
      description: 'Project Making Website with Datenshi Games Indonesia using Next.JS & Tailwind CSS',
      imageUrl: '/datenshi.png',
      caseStudyUrl: 'https://datenshi.pw',
    },
    
  ];

  const Project: React.FC = () => {
    return (
      <div id='project' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Projects</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
                <div className="flex-shrink-0">
                  <a href={project.caseStudyUrl} target="_blank">
                  <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                  </a>
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="animated-gradient text-justify text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;
  