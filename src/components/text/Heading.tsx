interface Props {
    title: string,
    subtitle?: string,
}

const Heading = ({title, subtitle}: Props) => {
    return (
        <div className="flex flex-col gap-5 max-w-[44rem] text-center">
            <h2 className="font-dmSerif text-[3.125rem] font-normal">{title}</h2>
            {subtitle ?? <h3 className="text-[1.25rem] font-medium">{subtitle}</h3>}
        </div>
    );
};

export default Heading;