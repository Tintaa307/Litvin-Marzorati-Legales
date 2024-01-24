interface Props {
    pos: string,
    text: string,
}

const InputLabel = ({pos, text}: Props) => {
    return (
        <div className="w-full flex gap-6 font-normal text-left items-center cursor-default">
            <h3 className="text-black/30 text-[0.875rem]">{pos}</h3>
            <h3 className="text-[1.125rem]">{text}</h3>
        </div>
    );
};

export default InputLabel;