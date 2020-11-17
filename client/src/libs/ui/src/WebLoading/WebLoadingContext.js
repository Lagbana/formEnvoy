import { createContext } from 'react';

// export interface AppLoadingContext {
//   setLoading: (loading: boolean) => void;
// }

export const WebLoadingContext = createContext({
  setLoading: () => {
    /* noop */
  },
});
