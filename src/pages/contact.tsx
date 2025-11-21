import portfolio from '../../index.json';
import ScrollReveal from '../helper/ScrollReveal';

export default function Contact() {
    const { contacts } = portfolio;

    return (
        <div className="pt-24 sm:pt-28 md:pt-32 xl:pt-40 overflow-y-hidden">
            <section className="p-4 sm:p-6 rounded-lg shadow-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <ScrollReveal direction="down" duration={0.6}>
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">Contact.</h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg">Contact me or follow my social media</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" duration={0.6}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {contacts.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-4 sm:p-6 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-secondary transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <img 
                                            src={contact.icon} 
                                            alt={contact.label}
                                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-500 group-hover:hue-rotate-180 transition-all"
                                        />
                                        <span className="text-white text-sm sm:text-base md:text-lg">{contact.label}</span>
                                    </div>
                                    <img 
                                        src="https://img.icons8.com/material-outlined/24/ffffff/north-east.png"
                                        alt="arrow"
                                        className="w-4 h-4 sm:w-5 sm:h-5 opacity-50 group-hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}