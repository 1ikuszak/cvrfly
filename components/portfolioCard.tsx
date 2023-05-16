import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface PortfolioCardProps {
  image: StaticImageData;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ image }) => {
  return (
    <>
      <div className="flex items-center justify-center p-2 overflow-hidden border border-dark rounded-xl">
        <div className="flex flex-col gap-3">
          <div className="rounded-xl">
            <Image
              src={image}
              alt="project img"
              className="transition duration-300 ease-in-out rounded-xl hover:scale-110 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
