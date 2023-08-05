import React from "react";

function Card() {
  return (
    <div className="w-[187px] h-[257px] flex-col justify-start items-center inline-flex">
      <div className="w-[187px] h-[187px] relative">
        <div className="w-[187px] h-[187px] left-0 top-0 absolute bg-gray-100 border border-white" />
        <div className="w-[27.82px] h-[27.82px] left-[80px] top-[80px] absolute">
          <div className="w-[27.82px] h-[27.82px] left-0 top-0 absolute bg-zinc-300" />
        </div>
      </div>
      <div className="pt-2 pb-4 flex-col justify-start items-start gap-4 flex">
        <div className="w-[156px] h-3.5 text-neutral-800 text-sm font-medium leading-[14px]">
          레이블라우스
        </div>
        <div className="justify-start items-start gap-[63px] inline-flex">
          <div className="text-rose-600 text-sm font-bold leading-[14px]">
            10%
          </div>
          <div className="justify-start items-center gap-[3px] flex">
            <div className="text-zinc-950 text-base font-bold leading-none">
              57,600
            </div>
            <div className="text-neutral-800 text-sm font-medium leading-[14px]">
              원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
