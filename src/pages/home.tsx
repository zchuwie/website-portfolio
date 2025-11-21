import ScrollReveal from "../helper/ScrollReveal"

export default function Home() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/public/Sabalboro_Resume.pdf';
        link.download = 'Sabalboro_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
            <div className="pt-24 sm:pt-28 md:pt-32 xl:pt-40 overflow-x-hidden w-full"> 
                <section className="p-4 sm:p-6 rounded-lg shadow-md h-auto overflow-x-hidden">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 mt-4 md:mt-8 place-items-center px-4 sm:px-6 overflow-x-hidden">
                        <ScrollReveal direction ="left" duration={1}>
                            <div className="flex justify-center items-center w-full">
                                <img src="https://placehold.co/400x400" alt="image" className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-lg" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction ="right" duration={1}>
                            <div className="flex justify-center lg:items-start items-center flex-col gap-y-3 sm:gap-y-5 h-full text-white text-center lg:text-left">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"> Hi. I am Denz</h2>
                                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light"> I'm tired of everything. I guess </p>
                                <button 
                                    onClick={downloadResume}
                                    className="mt-6 sm:mt-10 border border-secondary px-6 py-3 sm:p-4 rounded-lg bg-secondary text-black cursor-pointer hover:opacity-90 transition text-sm sm:text-base"
                                >
                                    Download resume 
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </div>    
    )
}