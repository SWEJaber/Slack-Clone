import ChatSection from './ChatSection';
import NameSpaces from './NameSpaces';
import Rooms from './Rooms';

function App() {
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
