interface Props {
    firstHighlight?: string,
    secondHighlight?: string,
    p1: string,
    p2?: string,
    p3?: string,
    p4?: string,
    p5?: string,
    p6?: string,
}

const ServiceBody = ({firstHighlight, secondHighlight, p1, p2, p3, p4, p5}: Props) => {
    return (
        <div className="main-padding pb-[6.25rem] flex flex-col gap-[6.25rem] font-poppins">
            {firstHighlight && (
                <div className="py-5 border-t border-b border-black">
                    <h2 className="text-justify md:text-[1.5rem] text-[1.25rem] font-semibold">{firstHighlight}</h2>
                </div>
            )}
            <div className="text-base font-medium text-justify flex flex-col gap-6">
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
                <p>{p4}</p>
                <p>{p5}</p>
            </div>
            {secondHighlight && (
                <div className="py-5 border-t border-b border-black">
                    <h2 className="text-justify md:text-[1.5rem] text-[1.25rem] font-semibold">{secondHighlight}</h2>
                </div>
            )}
        </div>
    );
};

export default ServiceBody;