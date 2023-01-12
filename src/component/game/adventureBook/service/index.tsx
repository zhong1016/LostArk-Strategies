import useQuery from '@/component/api/query';
import { AdventureBookIn } from '../interface';

const useService = () => {
  const { api, get } = useQuery();

  const getAdventureBook = async (): Promise<AdventureBookIn[]> => {
    let res = await get<AdventureBookIn[]>(api.adventureBook);
    return res.map((e) => {
      // set uuid
      e.key = window.crypto.randomUUID();
      return e;
    });
  };

  return { getAdventureBook };
};

export default useService;
