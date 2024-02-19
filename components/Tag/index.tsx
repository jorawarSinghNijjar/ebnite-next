interface Props{
    label: string;
}

const Tag: React.FC<Props> = ({label}) => {
    return (
        <div className="bg-black/[0.3] rounded-full text-white/[0.7] py-1 px-4 max-w-max shadow-2xl">
            {label}
        </div>
    )
}

export default Tag;