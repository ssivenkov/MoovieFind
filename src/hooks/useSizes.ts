import { useEffect, useState } from 'react';

type SizesType = {
  width: number;
  height: number;
};

const getSizes = (): SizesType => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useSizes = (): SizesType => {
  const [size, setSize] = useState<SizesType>(() => getSizes());

  useEffect(() => {
    const handleResize = () => {
      const sizes = getSizes();

      setSize(sizes);
    };

    window.addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, []);

  return size;
};
