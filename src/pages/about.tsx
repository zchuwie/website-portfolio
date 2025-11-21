import ScrollReveal from "../helper/ScrollReveal"

export default function About() {
    return (
        <div className="pt-20 sm:pt-24 md:pt-30 overflow-x-hidden w-full">
            <ScrollReveal direction="down" duration={0.6}>
                <section className="p-4 sm:p-6 mt-6 sm:mt-10 h-auto mx-auto max-w-5xl overflow-x-hidden">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-12">About Me<span className="ml-2 sm:ml-3 text-secondary">.</span></h2>
                    <div className="flex justify-center items-start flex-col gap-y-5 px-4 sm:px-6">
                        <p className="text-white mb-4 text-base sm:text-lg md:text-xl tracking-wide leading-relaxed sm:leading-loose indent-8 sm:indent-16 md:indent-30 text-justify"> Hello! I am Denz Christian G. Sabalboro. Currently a junior at University of Caloocan City with an intriguing passion to learn and to explore the world of technology. With an innovative mind and critical thinking, I want to contribute to the field and make a positive impact. As I am eager to learn and grow, I continuously seek new challenges and opportunities to expand my skills and knowledge in the ever-evolving tech industry. I am just tired to the point that I'm seeking mental help after I graduated from this asylum I belonged to.</p>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    )
}