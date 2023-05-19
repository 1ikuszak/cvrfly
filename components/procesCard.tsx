'use client';

import { FC } from 'react';

interface ProcesCardProps {
  title: string;
  description: string;
  pill: string;
}

const ProcesCard: FC<ProcesCardProps> = ({ title, description, pill }) => {
  return (
    <>
      <div className="flex flex-1">
        <div className="flex flex-col items-center justify-center p-2 rounded-l-lg bg-dark w-62">
          <div className="w-[4px] lg:w-[6px] bg-light rounded-full h-1/2"></div>
        </div>
        <div className="flex border rounded-r-lg border-dark">
          <div className="flex flex-col items-start justify-center gap-2 p-4">
            <div>
              <p className="text-xl font-semibold lg:text-3xl">{title}</p>
              <span className="px-4 text-xs font-semibold border rounded-full border-dark">
                {pill}
              </span>
            </div>
            <p className="text-base lg:text-xl">{description}</p>
          </div>
          <div className="p-2 rounded-r-lg">
            <div className="w-3 h-3 rounded-full bg-dark"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcesCard;
