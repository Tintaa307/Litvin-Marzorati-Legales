interface Props {
    title: string,
    subtitle?: string,
    notCentered?: boolean,
}

const Heading = ({title, subtitle, notCentered}: Props) => {
    return (
        <div className={`flex flex-col gap-5 max-w-[44rem] ${notCentered ? 'text-left' : 'text-center'}`}>
            <h2 className="font-dmSerif text-[3.125rem] font-normal">{title}</h2>
            {subtitle ?? <h3 className="text-[1.25rem] font-medium">{subtitle}</h3>}
        </div>
    );
};

export default Heading;