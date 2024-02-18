interface Props {
    label: string,
    accept: string,
    submit: string,
}

const Newsletter = ({label, accept, submit}: Props) => {

    return (
        <div className="flex flex-col gap-4 text-sm">
            <div className="w-full flex flex-col gap-2">
                <h3 className="">{label}</h3>
                <input name="name" type="text" className="bg-transparent outline-none border-b border-white/30 text-sm"/>
            </div>
            <div className="flex gap-2 text-xs font-light text-white/70">
                <input type="checkbox" />
                <h3>{accept}</h3>
            </div>
            <div className="w-full flex justify-start">
                <button type="submit" className={`bg-accent-orange py-2 px-4 rounded-md w-20 text-black text-sm`}>{submit}</button>
            </div>
        </div>
    );
}

export default Newsletter;