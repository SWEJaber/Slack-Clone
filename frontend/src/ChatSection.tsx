const Message = () =>
{
    return (
        <li className="flex gap-2">
            <div className="aspect-square h-10">
                <img 
                    className="h-full w-full"
                    src={"https://i.discogs.com/2aWfQkNER-bd7hutKLBObgtqlaARbQ-Tf8VRUrazW1Q/rs:fit/g:sm/q:90/h:551/w:533/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNTYz/MjMtMTI4OTc2Mzc1/Ny5qcGVn.jpeg"}
                    title="profile picture"
                    alt="profile picture"
                />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-xs flex gap-2">
                    <span className="text-white">JaAlSaDev</span>

                    <span className="text-white/50">1:25 pm</span>
                </p>

                <p className="text-white text-sm">
                    I went running today.
                </p>
            </div>
        </li>
    )
}


type Props = {}

const ChatSection = (props: Props) => 
{
    const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <div className='flex flex-col justify-between h-full w-full bg-slate-900 p-4 '>
            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>Current Room</span>

                    <span className='text-sm text-white/50'>Users</span>
                </p>

                <input 
                    className='h-[35px] w-[250px] px-4 rounded-md'
                    type={"text"}
                    placeholder='Search'

                />
            </div>


            <ul className='h-[90%] overflow-y-scroll px-4 flex flex-col gap-2'>

                {messages.map(message => <Message key={message} />)}
            </ul>

            <input 
                className='px-4 rounded-md h-[35px] w-full'
                type='text'
                placeholder="Type your message here..."
            />
        </div>
  )
}

export default ChatSection