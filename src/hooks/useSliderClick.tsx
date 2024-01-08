import { useState } from "react";

const useClicks = (initialClicks: number, maxClicks: number) => {
    const [clicks, setClicks] = useState(initialClicks);

    const handleClick = (direction: string) => {
        if (direction === 'next' && clicks < maxClicks) {
          setClicks((prevClicks) => prevClicks + 1);
        } else if (direction === 'prev' && clicks > 0) {
          setClicks((prevClicks) => prevClicks - 1);
        }
      };
    
    return {
        clicks,
        handleClick,
    };
};

export default useClicks;