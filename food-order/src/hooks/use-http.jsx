import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((requestConfig, applyData) => {
    const internalSendRequest = async (internalRequestConfig, internalApplyData) => {
      const response = await fetch(internalRequestConfig.url, {
        method: internalRequestConfig.method ? internalRequestConfig.method : 'GET',
        headers: internalRequestConfig.headers ? internalRequestConfig.headers : {},
        body: internalRequestConfig.body ? JSON.stringify(internalRequestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error('The request has failed');
      }
      const data = response.json();
      internalApplyData(data);
      setIsLoading(false);
    };

    setIsLoading(true);
    setError(null);

    internalSendRequest(requestConfig, applyData)
      .catch((err) => {
        setError(err || 'Something went wrong!');
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
