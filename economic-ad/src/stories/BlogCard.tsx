import React from 'react';

export interface BlogCardProps {
  width: string;
  image: string;
  date: string;
  cardTitle: string;
  cardDescription: string;
  onClick?: () => void;
}

export const BlogCard = ({ width = "md:w-1/2", image, date, cardTitle, cardDescription }: BlogCardProps) => {
    return (
      <div className="w-full flex justify-center">
        <div className={`w-full px-4 ${width}`}>
          <div className="mb-10 w-full">
            <div className="mb-6 overflow-hidden rounded">
              <img src={image} alt="" className="w-full" />
            </div>
            <div>
              {date && (
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-1 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
                  {date}
                </span>
              )}
              <h3>
                <a
                  href="/#"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {cardTitle}
                </a>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };