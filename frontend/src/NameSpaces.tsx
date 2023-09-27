import { Namespace } from "./types";

type Props = 
{
    className?: string,
    nsList: Namespace[],
    joinNS: (NS: Namespace) => void
}

const NameSpaces = (props: Props) => 
{
    const { className, nsList, joinNS: selectNS } = props;

    console.log("nsList: ", nsList);
    
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
                nsList.map((namespace, index) =>
                {
                    return (
                        <div 
                            key={namespace.id} 
                            className="w-[90%] bg-gray-600 aspect-square rounded-md cursor-pointer overflow-hidden" 
                            onClick={() => selectNS(namespace)}
                        >
                            <img 
                                className={"h-full w-full object-fit"}
                                src={namespace.image}
                                title={namespace.name}
                                alt={namespace.name}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NameSpaces