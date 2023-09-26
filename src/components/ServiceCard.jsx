import React from "react";

const ServiceCard = ({ props }) => {
  const { title, slug, image, link } = props;

  return (
    <div className="service-box w-[300px] bg-white p-5 rounded-xl shadow-md h-[320px] md:w-[280px] md:h-[300px] flex flex-col justify-between mb-4">
      <div className="w-full">
        <img src={image} alt={title} className="h-24 w-24 object-cover" />
      </div>
      <div className="w-full">
        <h2 className="mt-5 text-lg mb-2 font-medium overflow-hidden whitespace-nowrap">
          {title}
        </h2>
        <p className="text-sm overflow-hidden whitespace-nowrap">{slug}</p>
        <a
          href={link}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center mt-4 w-full"
        >
          See Details <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
