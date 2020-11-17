import { useContext, useEffect } from 'react';
import { WebLoadingContext } from './WebLoadingContext';
import { isUndefined } from 'lodash';

export const useWebLoading = (loading) => {
  const context = useContext(WebLoadingContext);

  useEffect(() => {
    if (!isUndefined(loading)) {
      context.setLoading(loading);
    }
  }, [loading]);

  return context;
};
