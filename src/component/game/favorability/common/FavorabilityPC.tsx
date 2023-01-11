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
      className='hidden xl:block w-full'
    >
      <Column
        title='Npc'
        render={(value: any, record: favorabilityIn) => {
          return (
            <div>
              <p>{record.npc}</p>
              <p>位置 : {record.location}</p>
              <p>{!!record.love ? `愛情 : ${record.love}` : ''}</p>
            </div>
          );
        }}
      />
      <Column
        title='關注'
        render={(value: any, record: favorabilityIn) => {
          let arr = record.attention as string[];
          return (
            <>
              {arr.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </>
          );
        }}
      />
      <Column
        title='友好'
        render={(value: any, record: favorabilityIn) => {
          let arr = record.friendly as string[];
          return (
            <>
              {arr.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </>
          );
        }}
      />
      <Column
        title='最大好感度'
        dataIndex='maxAffinity'
        key='maxAffinity'
        width={180}
      />
      <Column title='普通' dataIndex='normal' key='normal' />
      <Column
        title='信賴'
        render={(value: any, record: favorabilityIn) => {
          let arr = record.trust as string[];
          return (
            <>
              {arr.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </>
          );
        }}
      />
    </Table>
  );
};

export default FavorabilityPC;
