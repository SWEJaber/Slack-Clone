import { GoTriangleDown } from 'react-icons/go'
import { Room } from './types';



const RoomSections = (props: { title: string, rooms: Room[] }) =>
{
    const { title, rooms } = props;

    return (
        <div className='flex flex-col gap-2 text-white select-none'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <GoTriangleDown className='fill-white' size={20} />

                <p>{title}</p>
            </div>

            <div className='ms-2 w-fit'>
                {rooms.map(room =><p key={room.id} className='cursor-pointer'>{room.title}</p>)}
            </div> 
        </div>
    )
}

type Props = 
{
    className?: string,
    rooms: Room[]
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
                rooms={props.rooms}
            />

            <RoomSections 
                title='Direct Messages'
                rooms={[]}
            /> 
        </div>
    )
}

export default Rooms