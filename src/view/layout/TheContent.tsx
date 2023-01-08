import React from 'react';
import Sidebar from './TheSidebar';
interface ContentIn {
  component: React.ReactNode;
}

const Content: React.FC<ContentIn> = ({ component }: ContentIn) => {
  return (
    <div className='w-full h-full flex '>
      <aside className='h-full w-48 '>
        <div className='h-10 w-full'></div>
        <div className='h-[calc(100%-40px)] w-full'>
          <Sidebar />
        </div>
      </aside>
      <section className='h-full w-[calc(100%-192px)] '>
        <div className='h-10 flex flex-wrap'>
          <div className=' flex-none w-1/2 flex items-center'>
            <h1 className='text-2xl font-bold px-4'>LostArk Strategies</h1>
          </div>
        </div>
        <div className='h-[calc(100%-40px)] w-full bg-black p-4'>
          <div className='w-full h-full bg-gray-500/30 rounded-md'>
            {component}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
