import { useEffect, useState } from "react";

const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  //进行对象深拷贝，这样不会影响传进来的对象本身
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    //每次value变化以后delay秒后执行
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //每次再上一个useEffect处理完之后在运行
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debouncedValue;
};
