import { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  outsideClick: () => void,
) => {
  useEffect(() => {
    const pointerDownCallback = (e: PointerEvent) => {
      const element = ref.current;

      if (element && !element.contains(e.target as Node)) {
        outsideClick();
      }
    };

    document.addEventListener('pointerdown', pointerDownCallback);

    return () => {
      document.removeEventListener('pointerdown', pointerDownCallback);
    };
  }, [ref, outsideClick]);
};

export default useOutsideClick;
