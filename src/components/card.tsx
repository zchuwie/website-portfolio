export default function Card({ image, title, description, link, techStack }: { image: string; title: string; description: string; link: string; techStack: string[] }) {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-auto w-auto cursor-pointer">
           <img src={image} alt="image" className="w-full aspect-video sm:aspect-11/6 rounded-xl sm:rounded-2xl transition-transform duration-300 hover:scale-105 lg:hover:scale-110"/>
           <h2 className="text-secondary font-semibold text-xl sm:text-2xl md:text-3xl text-start mt-3 sm:mt-5 line-clamp-1"> {title} </h2>
            <p className="text-gray-400 text-sm md:text-lg sm:text-start mt-2 text-justify line-clamp-3"> {description} </p>    
            <div className="flex flex-wrap gap-2 mt-3 sm:mt-5">
                {techStack.map((tech, index) => (
                    <span 
                        key={index}
                        className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>      
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 sm:mt-5 text-sm sm:text-base text-secondary hover:text-secondary/80 transition-colors"
            >
                Visit GitHub Repo →
            </a>
        </div>
    );
}