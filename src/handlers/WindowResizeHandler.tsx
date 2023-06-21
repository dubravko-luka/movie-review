import { useEffect } from "react";

import { useAppState } from "@/contexts";

const WindowResizeHandler = () => {
  const { appState, setAppState } = useAppState();

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setAppState((prevState) => ({
        ...prevState,
        widthClient: newWidth,
      }));
    };

    if (appState?.widthClient === 0) {
      setAppState((prevState) => ({
        ...prevState,
        widthClient: window.innerWidth,
      }));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default WindowResizeHandler;
