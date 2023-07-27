import { useEffect, useState } from "react";

const useGetDeviceWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  });

  return width;
};


export default useGetDeviceWidth;