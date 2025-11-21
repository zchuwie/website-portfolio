import portfolio from '../../index.json';
import Card from '../components/card'
import ScrollReveal from '../helper/ScrollReveal';

export default function Projects() {
    const { projects } = portfolio;

    return (
        <div className="pt-20 sm:pt-24 md:pt-30 overflow-y-hidden">
            <ScrollReveal direction="up" duration={0.6}>
                <section className="p-4 sm:p-6 mt-6 sm:mt-10 h-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-12">Projects<span className="ml-2 sm:ml-3 text-secondary">.</span></h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 place-self-center mx-4 sm:mx-8 md:mx-16 lg:mx-30 max-w-7xl">
                        {projects.map((project, index) => (
                            <ScrollReveal key={index} direction="up" duration={0.5 + index * 0.2}>
                                <Card 
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    techStack={project.techStack}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </ScrollReveal>
        </div>
    )
}
