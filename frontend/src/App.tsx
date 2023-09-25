import { useEffect, useState } from 'react';
import ChatSection from './ChatSection';
import NameSpaces from './NameSpaces';
import Rooms from './Rooms';
import socket from './socketIO';

function App() 
{
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);

  console.log("isConnected: ", isConnected);
  
  useEffect(() => 
  {
    const onConnect = () => 
    {
      setIsConnected(true);

      socket.emit("clientConnect")
    }
    const onDisconnect = () => setIsConnected(false);

    socket.connect();
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect)
    socket.on("welcome", data => console.log(data))

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect)
    }
  }, [])
  
  return (
    <div className="flex h-screen w-screen">
      <div className='flex min-h-screen w-full'>
        <NameSpaces className='w-[90px]' />

        <Rooms className='w-[300px]'/>

        <ChatSection />
      </div>
    </div>
  );
}

export default App;
