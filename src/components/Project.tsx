const projects = [
    {
      title: 'Weather App',
      description: 'Creating a Weather application using the Weather API and using React.JS',
      imageUrl: 'https://cdn.discordapp.com/attachments/959463342886490202/1278069826195034246/weatherapp.png?ex=66cf76c7&is=66ce2547&hm=214af17be72a3ce229a1b478d3ff33cff41a11ff289ac7f36051a5151fc73286&',
      caseStudyUrl: 'https://weatherapp.retiishia.my.id/'
    },
    {
      title: 'Datenshi',
      description: 'Project Making Website with Datenshi Games Indonesia using Next.JS & Tailwind CSS',
      imageUrl: 'https://cdn.discordapp.com/attachments/959463342886490202/1278070195352633466/datenshi.png?ex=66cf771f&is=66ce259f&hm=c8ec7cad408f0501dcebe1ff55afdb12ee4cab305c5f63b0f441474f7464a593&',
      caseStudyUrl: '#',
    },
    
  ];

  const Project: React.FC = () => {
    return (
      <div id='project' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">My Projects</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
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
  