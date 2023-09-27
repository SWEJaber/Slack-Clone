import { useEffect, useState } from 'react';
import ChatSection from './ChatSection';
import NameSpaces from './NameSpaces';
import Rooms from './Rooms';
import socket, { adminSocket } from './socketIO';
import { Namespace, Room } from './types';

// const username = prompt("What is your username?");
// const password = prompt("What is your password?")

// TODO: temporary. remove later
const username = "JaAlSaDev";
const password = "User@123"

function App() 
{
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [nsList, setNSList] = useState<Namespace[]>([]);
  const [selectedNS, setSelectedNS] = useState<Namespace | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const joinNS = (NS: Namespace) => setSelectedNS(NS)
  
  useEffect(() => 
  {
    const onConnect = () => 
    {
      setIsConnected(true);

      socket.emit("clientConnect")
    }

    const receiveNSList = (nsData: Namespace[]) =>
    {
      setNSList(nsData)

      if (nsData.length > 0) 
      {
        setSelectedNS(nsData[0])
      }
    }
    const onDisconnect = () => setIsConnected(false);

    socket.connect();
    adminSocket.connect();
    adminSocket.on('connect', () => console.log("Successfully joined admin namespace!"))
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect)
    socket.on("nsList", receiveNSList)

    return () => {
      adminSocket.off('connect', () => console.log("Successfully joined admin namespace!"))
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect)
      socket.off("nsList",receiveNSList)
    }
  }, [])


  useEffect(() => 
  {
    if (nsList.length > 0) 
    {
      setSelectedNS(nsList[0])
    }
  }, [nsList])
  
  
  return (
    <div className="flex h-screen w-screen">
      <div className='flex min-h-screen w-full'>
        <NameSpaces 
          className='w-[90px]' 
          nsList={nsList} 

          joinNS={joinNS}
        />

        <Rooms className='w-[300px]'rooms={selectedNS?.rooms?? []} />

        <ChatSection room={selectedRoom} />
      </div>
    </div>
  );
}

export default App;
