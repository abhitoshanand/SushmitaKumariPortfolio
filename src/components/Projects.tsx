import { Book } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedAbstract, setSelectedAbstract] = useState<string | null>(null);

  const projects = [
    {
      title: 'Recasting myth, Cyberculture & Posthumanism in Manjula Padmanabhan’s – Harvest',
      description: 'This study explores women, violence, and hysteria as semiotic elements in Indian feminist theatre, analyzing gender politics and representation.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600',
      abstract: 'This study examines the semiotic interplay of women, violence, and hysteria in contemporary Indian feminist theatre, with particular focus on the dramatic works of Padmanabhan, Mehta, and Sengupta. Through a theoretical framework that synthesizes theatre semiotics with feminist semiotic theory, the research investigates how these playwrights deploy theatrical signs to articulate gender politics and cultural resistance. The analysis demonstrates how the triumvirate of woman as emblematic ideology, violence as suppression, and hysteria as dramatic outburst collectively constructs a unified semiotic system that illuminates feminist theatrical aesthetics. The study employs Brechtian concepts of gestus and alienation effect to examine how female dramatists translate corporeal presence into political discourse. By analyzing the semiotization of female performers physical attributes alongside their mimetic and representational capabilities, the research reveals how women-centric plays decode social hierarchies and cultural paradigms. Drawing upon Elaine Astons theatre semiotics and contemporary feminist theory, the paper explores how the intersection of theatrical and feminist semiotic approaches generates new methodologies for understanding gender representation in performance. The findings suggest that Indian womens dramaturgy uniquely deploys semiotic elements to create a demonstrable approach for unearthing textual meanings and their relational politics of representation. This research contributes to the growing discourse on feminist theatre by highlighting how the strategic deployment of theatrical signs can effectively challenge patriarchal ideologies while establishing new paradigms for female representation in contemporary theatre.'
        },
    {
      title: 'Renewable Energy and Energy Harvesting',
      description: 'Research project during B.Sc Physics examining various renewable energy sources and energy harvesting techniques.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600',
      abstract: `This thesis presents an in-depth study of renewable energy production, examining the technical mechanisms, efficiencies, and sustainability of various renewable energy sources: solar energy, wind energy, hydroelectricity, geothermal energy, and tidal energy. With growing concerns over environmental impact and fossil fuel depletion, renewable energy technologies offer critical solutions for sustainable power generation. Each chapter addresses the specific principles, design considerations, and operational challenges of these energy types, emphasizing the unique characteristics that make each source suitable for particular geographical and climatic conditions.

In exploring solar energy, the research delves into photovoltaic (PV) and concentrated solar power (CSP) technologies, analyzing efficiency rates, material innovations, and methods to optimize sunlight capture. The wind energy section discusses turbine design, aerodynamic advancements, and grid integration issues associated with variable wind patterns, highlighting improvements that increase reliability and output. Hydroelectricity is examined through dam and run-of-river systems, focusing on energy generation potential, environmental considerations, and recent advances in turbine efficiency. The study of geothermal energy covers deep-well extraction techniques, binary cycle power plants, and methods to enhance thermal energy recovery while managing geological and environmental impacts. Finally, tidal energy explores wave and tidal stream technologies, assessing their potential in coastal areas, power density, and challenges with marine ecosystem preservation.

The thesis further investigates energy harvesting methods to enhance energy capture and storage across these renewable sources, reviewing advancements in battery storage, grid compatibility, and hybrid systems that combine multiple energy forms to improve energy reliability. By addressing the technical and environmental aspects of renewable energy sources, this study provides a foundation for advancing sustainable energy technologies, aiming to make renewable energy production both economically viable and environmentally responsible. This research contributes valuable insights for optimizing the deployment of renewable resources, fostering a cleaner, more resilient energy future.`,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Browse My Research
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Projects
      </h2>

      <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
              <button
                onClick={() => setSelectedAbstract(selectedAbstract === project.title ? null : project.title)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Book className="w-4 h-4" />
                {selectedAbstract === project.title ? 'Hide Abstract' : 'Read Abstract'}
              </button>
              {selectedAbstract === project.title && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                    {project.abstract}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
