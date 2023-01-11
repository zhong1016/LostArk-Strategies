const hostname =
  location.hostname === 'zhong1016.github.io'
    ? '/LostArk-Strategies'
    : '/public';

const baseURL = hostname + '/api/v1';

const useService = () => {
  // 因為只有 GET Public , 所以只微封裝 fetch
  const onFetch = async <T,>(
    api: string,
    method: 'GET' | 'POST' = 'GET',
    body?: BodyInit
  ): Promise<T> => {
    return fetch(baseURL + api, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then((r) => r.json());
  };

  return { onFetch };
};

export default useService;
