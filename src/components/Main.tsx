import React from "react";

interface TitleProps {
  title: string;
}

const Main = ({ title }: TitleProps) => {
  return <main className="mx-auto w-[420px] mt-3 ">{title}</main>;
};

export default Main;
