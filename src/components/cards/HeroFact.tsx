interface Props {
   num: number,
   title: string, 
}

const HeroFact = ({num, title}: Props) => {
    return (
        <div className="flex flex-col items-center max-w-48 h-28">
            <h2 className="text-[2rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-brown to-accent-orange">+{num}</h2>
            <h3 className="text-center text-[1rem] font-medium">{title}</h3>
        </div>
    );
};

export default HeroFact;