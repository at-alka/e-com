import { useEffect, useState, useRef } from "react";

/**
 * Return array
 * @typedef {Array} useHoverReturn
 * @property {string} ref This can be used for setting ref for which hover state value is needed
 * @property {string} value  Hover state of the element with the given ref
 *
 * Use this hook to get hover state of a particular component
 * @returns {useHoverReturn}
 */

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseLeave = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref.current]);
  return [ref, value];
};

export default useHover;
