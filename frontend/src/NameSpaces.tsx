type Props = 
{
    className?: string
}

const NameSpaces = (props: Props) => 
{
    const { className } = props;

    return (
        <div 
            className=
            {`
                overflow-scroll-y
                h-full 
                flex flex-col items-center 
                bg-slate-700 

                py-2 px-4 gap-6
                ${className}
            `}
        >
            {
                [1, 2, 3, 4].map((item, index) =>
                {
                    return (
                        <div 
                            key={item} 
                            className="w-[90%] aspect-square bg-red-600 rounded-md cursor-pointer" 
                        />
                    )
                })
            }
        </div>
    )
}

export default NameSpaces