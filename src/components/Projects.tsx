import React, { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  topics_url: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  fork: boolean;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kartikeya7609/repos?sort=updated&direction=desc');
        const data = await response.json();
        const recentProjects = data.filter((repo: Project) => !repo.fork).slice(0, 3);
        setProjects(recentProjects);
      } catch (err) {
        setError('Unable to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-white">
          <i className="fas fa-project-diagram text-[#00ff9d] mr-4"></i> My Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {loading ? (
            // Loading skeletons
            Array(3).fill(null).map((_, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] animate-pulse">
                <div className="h-6 bg-[#333333] rounded w-3/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-[#333333] rounded"></div>
                  <div className="h-4 bg-[#333333] rounded"></div>
                  <div className="h-4 bg-[#333333] rounded w-5/6"></div>
                </div>
                <div className="h-10 bg-[#333333] rounded mt-6"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">{error}</div>
          ) : (
            projects.map((project, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] hover:border-[#00ff9d] hover:shadow-[0_0_10px_#00ff9d,0_0_20px_#00ff9d,0_0_30px_#00ff9d] transition-all duration-300"
              >
                <h3 className="text-[#00ff9d] text-xl mb-4">{project.name}</h3>
                <div className="space-y-2 mb-6">
                  {project.description ? (
                    project.description.split('. ').map((sentence, i) => (
                      <p key={i} className="text-gray-400">{sentence}.</p>
                    ))
                  ) : (
                    <p className="text-gray-400">No description available.</p>
                  )}
                </div>
                <a 
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-[#00ff9d] text-[#00ff9d] rounded-md hover:bg-[#00ff9d] hover:text-[#0a0a0a] transition-all duration-300"
                >
                  <i className="fab fa-github mr-2"></i>
                  View Repository
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects; 