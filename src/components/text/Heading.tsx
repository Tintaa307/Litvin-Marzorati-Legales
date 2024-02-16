interface Props {
    title: string,
    subtitle?: string,
    notCentered?: boolean,
    poppins?: boolean,
}

const Heading = ({title, subtitle, notCentered, poppins}: Props) => {
    return (
        <div className={`flex flex-col gap-5 max-w-[36rem] ${notCentered ? 'lg:text-left text-center' : 'text-center'}`}>
            <h2 className={`sm:text-[42px] text-[2rem] ${!poppins ? 'font-dmSerif font-normal' : 'font-poppins font-medium'}`}>{title}</h2>
            {subtitle ?? <h2 className="sm:text-[1.25rem] text-[1rem] font-medium">{subtitle}</h2>}
        </div>
    );
};

export default Heading;