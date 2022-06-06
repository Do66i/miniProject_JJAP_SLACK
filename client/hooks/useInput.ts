import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';

type ReturnType<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initiaData: T): ReturnType<T> => {
  const [value, setValue] = useState(initiaData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;

/*
const useInput = <T = any>(initiaData: T): [T, (e: any) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initiaData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
*/

/*
const useInput = <T = any>(initiaData: T): [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initiaData);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
*/
