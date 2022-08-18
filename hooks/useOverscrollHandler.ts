import { useEffect } from "react";

export const useOverscrollHandler = () => {
  useEffect(() => {
    const onScroll = (e: any) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};
