import useQuery from '@/component/api/query';
import { FavorabilityIn } from '../interface';

const useService = () => {
  const { api, get } = useQuery();

  const getFavorability = async (): Promise<FavorabilityIn[]> => {
    let res = await get<FavorabilityIn[]>(api.favorabilities);
    return res.map((e) => {
      // set uuid
      e.key = window.crypto.randomUUID();
      return e;
    });
  };
  const getDataSplit = (data: FavorabilityIn[]): FavorabilityIn[] => {
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
