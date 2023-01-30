import React from "react";

interface TitleProps {
  title: string;
}

const Main = ({ title }: TitleProps) => {
  return (
    <main className="mx-auto w-[420px] mt-3 flex justify-center items-center font-bold relative top-10 text-white">
      {title}
    </main>
  );
};

export default Main;
