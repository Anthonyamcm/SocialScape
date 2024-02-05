import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount: any, error: any) => {
          const statusCode = error?.response?.status;
  
          if (statusCode && statusCode > 401 && statusCode < 500) {
            return false;
          } else {
            return failureCount < 1;
          }
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });