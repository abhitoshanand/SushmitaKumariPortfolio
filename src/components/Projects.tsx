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
      abstract: `The juxtaposing depiction of women, violence and hysteria as semiotic elements in women-centric play-texts attempts to translate the theatrical meanings because of its demonstrable approach to unearth the textual meanings and its relational politics of representation. From semiological aspect, the interplay of women, violence and hysteria generates a kind of semiotic femaleness in order to prognosticate the feminist route of cultural politics imbedded in the narratives of female composed drama. The present paper intends to analyze the semiotic transformation of Indian women dramaturgy in the plays of Padmanabhan, Mehta and Sengupta. Each of their plays tries to interpret new meanings hidden under the semiotic signs used by these playwrights and also attempt to project the gender politics visualized in the realm of feminist theatre.  

[Keywords: feminist theatre, semiotics, politics of representation, gest, violence against women.]

In harvesting the performance discourse of gyno-centric play-texts, the presentation of women, violence and hysteria juxtaposingly through the translation of semiotic signs draws scholarly attention because of its demonstrable approach to unearth the textual meanings and its relational politics of representation. From semiological aspect, the interplay of women, violence and hysteria generates a kind of semiotic femaleness in order to prognosticate the feminist route of cultural politics imbedded in the narratives of female composed drama. Women, violence and hysteria as individual dramatic element try to construct a semiotic uniformity for analyzing the performative value of WOMAN as semiotic sign. If we attempt to scrutinize (i) woman as emblematic ideology, (ii) violence as her suffering or suppression, (iii) hysteria as the dramatic/ stagable outburst of her prolonged repressed voice within a single frame, then we can get a causal relation behind delving out the feminist theatrical aesthetics of semiotics. This relational performance strategy of female dramaturgy traces interlink with the trio while investigating the female body and sexual politics in terms of theatrical language. Hence, by bracketing off these heterogeneous dramatic elements trio together, we can perceive the texts of feminist theatre as network of meanings.

While discussing the presence of women, presentation of violence and hysteria as semiotic objects of performance, then staging of semiotization through female performer’s physical attributes along with her mimetic and representational power itself turns into an entire set of signs due to its dynamism. Actually, women-centric plays intend to put this analogous combination of women, violence and hysteria on stage in order to decode the social position of women in cultural domain.  The body and voice of actor being the fundamental theatrical icon must have the capability to convey some social gests for sensitizing social response against the atrocity encountered by women. In this respect, Indian women dramaturgy attempts to portray of how the victimized female characters caused by violence and subsequent violence, are presented as semiotic signs under the wrapping of apparel and make-up.

In women drama, both theatre semiotics and feminist semiotic theory functions jointly to focus on the meaning of play-text. Theatre semiotics is predominantly the study of signs that human put on stage for others to interpret. Theatre semiotician Elaine Aston points out that the potentiality of semiotics lies in its approach of how drama and theatre are made in manifesting the inner meaning before audience. By understanding of semiotics or study of science, meaning of performance/ play-text can be both exchanged and generated. Every aspect of theatrical performance is a signifier and the signified is the inner meaning or message conveyed by the collective unconscious of audience. While theatre semioticians stresses on stage related elements, feminist theory focuses on cultural encoding of sign as the foundation of communication. The galvanization of theatrical and feminist studies of semiotics has been adopted by female playwrights of postmodern era which can be called feminist theatrical semiotics that explores the semiology of women drama to chart the interplay of culture and society.

In formulating the semiotic/semiological effect/application on feminist drama, Brecht’s performance theory has much relevance today as it theorizes the fundamentality of gender and sexual difference. In terms of signs system, Brechtian theatre put the audience in a specific position to understand the social and changeable world. Therefore, theatre involves into a politics of sign, i.e. in Brechtian terminology called as ‘gestus’. While Barthes defines ‘gestus’ as ‘the external material expression of the social conflicts to which it bears witness’ (Fortier, 29), Pavis defines it as ‘an intentional signal emitted by the actor … in order to indicate the character’s social attitude and way of behaving in order to indicate ‘the relation among people’. (Forteir, 30). The Brechtian theorizations of the social gest, epic structure and alienation effect provides the means to reveal the material relations as the basis of social reality, to foreground and examine ideologically determined beliefs and unconscious habitual perceptions and to make visible those signs inscribed on the body which distinguish social behavior in relation to class, gender and history. For feminists, Brechtian techniques offer a way to examine the material conditions of gender behavior and their interaction with other socio-political factors. (Keyssar, 35-36). Brecht’s gestural technique, the method for creating a central gesture or ‘gest’ usually employs by the feminists to reveal the relation between sexes.

However, semiotic performance theory examines the relationship between the signifiers and the signified in an attempt to understand how a given phenomenon creates meaning for its viewer and how that viewer participates in the creation of meaning. (Scott, 82). 

Feminist theatre theory primarily concerned with the sign Woman which is imprinted with ideology of the dominant culture, the normative values and belief of the culture control the connotations of the sign and prescribes its resonances with cultural biases. The cultural construct of ‘woman’ produced by dominant patriarchal ideology as an object has to be looked at by male who is assumed to be the subject of dramatic action and the female object of his gaze. The corporeal presence of a woman on stage in theatre makes biological.'

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
