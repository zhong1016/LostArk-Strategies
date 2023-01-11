import { Table } from 'antd';
import React from 'react';
import { favorabilityIn } from '../interface';
const { Column } = Table;

interface favorabilityDataIn {
  favorabilityData: favorabilityIn[];
}

const FavorabilityPC: React.FC<favorabilityDataIn> = ({
  favorabilityData,
}: favorabilityDataIn) => {
  return (
    <Table
      dataSource={favorabilityData}
      pagination={false}
      className='xl:hidden w-full'
    >
      <Column
        render={(value: any, record: favorabilityIn) => {
          return (
            <div>
              <p className='text-base font-semibold'>⬩ NPN : {record.npc}</p>
              <p className='text-base font-bold'>⬩ 位置 : {record.location}</p>
              <p className='text-base font-bold'>
                {!!record.love ? `⬩ 愛情 : ${record.love}` : ''}
              </p>
              <p className='text-base font-bold'>
                ⬩ 最大好感度 : {record.maxAffinity}
              </p>
              <p className='text-base font-bold'>⬩ 普通 : {record.normal}</p>
              <p className='text-base font-bold'>⬩ 關注 : {record.attention}</p>
              <p className='text-base font-bold'>⬩ 友好 : {record.friendly}</p>
              <p className='text-base font-bold'>⬩ 信賴 : {record.trust}</p>
            </div>
          );
        }}
      />
    </Table>
  );
};
// "npc": "NPC",
// "location": "位置",
// "love": "愛情",
// "attention": "關注",
// "friendly": "友好",
// "trust": "信賴"
// "maxAffinity": "最大好感度",
// "normal": "普通",
export default FavorabilityPC;
