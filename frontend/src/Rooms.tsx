import { GoTriangleDown } from 'react-icons/go'

const RoomSections = (props: { title: string, rooms: string[]}) =>
{
    return (
        <div className='flex flex-col gap-2 text-white select-none'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <GoTriangleDown className='fill-white' size={20} />

                <p>{props.title}</p>
            </div>

            <div className='ms-2 w-fit'>
                {props.rooms.map(room =><p key={room} className='cursor-pointer'>{room}</p>)}
            </div> 
        </div>
    )
}


type Props = 
{
    className?: string
}

const Rooms = (props: Props) => 
{

    return (
        <div 
            className=
            {`
                overflow-scroll-y
                h-full 
                flex flex-col 
                bg-slate-600
                
                py-2 px-4 gap-4
                ${props.className}
            `}
        >
            
            <RoomSections 
                title='Rooms'
                rooms={["Main Room", "Meeting Room"]}
            />

            <RoomSections 
                title='Direct Messages'
                rooms={["Message yourself"]}
            /> 
        </div>
    )
}

export default Rooms