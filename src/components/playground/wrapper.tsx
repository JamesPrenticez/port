import { HTMLProps, ReactNode } from "react";

interface WrapperProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

function Wrapper({ children, className }: WrapperProps){
  return (
    <div className={`bg-gray-50 flex w-full items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default Wrapper;