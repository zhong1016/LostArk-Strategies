import useQuery from '@/component/api/query';
import { favorabilityIn } from '../interface';

const useService = () => {
  const { api, get } = useQuery();

  const getFavorability = async (): Promise<favorabilityIn[]> => {
    let res = await get<favorabilityIn[]>(api.favorabilities);

    return res.map((e, i) => {
      e.key = i;
      return e;
    });
  };

  const getDataSplit = (data: favorabilityIn[]): favorabilityIn[] => {
    return data.map((e, i) => {
      e.attention = e.attention.toString().split('、');
      e.friendly = e.friendly.toString().split('、');
      e.trust = e.trust.toString().split('、');
      return e;
    });
  };
  return { getFavorability, getDataSplit };
};

export default useService;
