import portfolio from '../../index.json';
import ScrollReveal from '../helper/ScrollReveal';

export default function Experience() {
    const { experiences } = portfolio;


    return (
        <div className="pt-24 sm:pt-28 md:pt-32 xl:pt-40">
            <section className="p-4 sm:p-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-12">Experience<span className="ml-2 sm:ml-3 text-secondary">.</span></h2>
                    
                    <div className="space-y-6 sm:space-y-8">
                        {experiences.map((exp, index) => (

                            <ScrollReveal direction="left" duration={0.5 + index * 0.2}>
                                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-8 pb-6 border-b border-gray-700 last:border-b-0">
                                    {/* Date Column */}
                                    <div className="lg:col-span-3">
                                        <p className="text-complimentary sm:text-md lg:text-base font-medium">
                                            {exp.date}
                                        </p>
                                    </div>

                                    {/* Content Column */}
                                    <div className="lg:col-span-9">
                                        <div className="flex items-start gap-2 mb-2 sm:mb-3">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary">
                                                {exp.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-300 text-xl leading-relaxed text-justify">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}