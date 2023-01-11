import { Table } from 'antd';
import { useEffect, useState } from 'react';
import useService from './service';
const Favorability = () => {
  /**
   * hook
   */
  const { getFavorability, getDataSplit } = useService();

  /**
   * Effect
   */
  useEffect(() => {}, []);

  // init
  const init = async () => {};

  return (
    <div className='w-full'>
      <div className=' flex flex-wrap'>
        <div className='flex-none w-1/2'>
          <div className='font-bold m-4 text-xl border-l-4 border-red-500'>
            <span className='px-2'>冒險之書</span>
          </div>
        </div>
      </div>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
    </div>
  );
};

export default Favorability;
