import type { ComponentType } from "react";

const hoc = <T,>(Component: ComponentType<T>) => {
  const HocResult = (props: T) => {
    try {
      return <Component {...(props as any)} />;
    } catch (error) {
      console.error("Higher order component error", error);
      return <p>Oops! Something went wrong!</p>;
    }
  };
  HocResult.Original = Component;
  return HocResult;
};

export default hoc;
