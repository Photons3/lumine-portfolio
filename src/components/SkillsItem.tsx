import React from "react";

interface Props {
  title: string;
  year: string;
}
const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        Anim proident non aliqua duis do minim enim velit eu voluptate laborum
        velit duis. Proident laborum ullamco adipisicing et ea nulla mollit
        eiusmod ea eu labore. Nostrud eiusmod dolore dolor Lorem exercitation id
        aliquip dolor officia do id et in. Nostrud laborum laborum labore magna
        proident adipisicing do eu ex consectetur. Dolore aliqua id non id in
        incididunt anim ea duis Lorem nisi minim culpa. Eiusmod laborum ex
        excepteur incididunt reprehenderit anim amet sunt culpa laboris aliquip
        veniam irure labore. Fugiat non excepteur proident et laboris anim
        cillum.
      </p>
    </div>
  );
};

export default SkillsItem;
