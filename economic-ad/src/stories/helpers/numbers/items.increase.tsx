import { atom, useSetAtom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const generateItemArray = () => {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    items.push(i);
  }
  return items;
};

//Base state atom
export const items = atom<number[]>(generateItemArray());

//================================================================================

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const [timer, setTimer] = useState<number>();
  const setItems = useSetAtom(items);
  const itemsValue = useAtom(items);  

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(Date.now());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer && itemsValue[0].length < 100) {
      setItems((prev) => {
        prev.push(prev.length);
        return [...prev, prev.length];
      });
    }
  }, [timer]);

  return <div>{children}</div>;
}
