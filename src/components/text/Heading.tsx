interface Props {
    title: string,
    subtitle?: string,
    notCentered?: boolean,
}

const Heading = ({title, subtitle, notCentered}: Props) => {
    return (
        <div className={`flex flex-col gap-5 max-w-[44rem] ${notCentered ? 'lg:text-left text-center' : 'text-center'}`}>
            <h2 className="font-dmSerif sm:text-[3.125rem] text-[2rem] font-normal">{title}</h2>
            {subtitle ?? <h3 className="sm:text-[1.25rem] text-[1rem] font-medium">{subtitle}</h3>}
        </div>
    );
};

export default Heading;