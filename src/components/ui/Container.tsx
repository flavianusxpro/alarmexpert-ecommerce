import { cn } from "@/utils/cn";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("flex p-8", className)}>
      {children}
    </div>
  );
};

export default Container;
