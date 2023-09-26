import { useState } from "react";
import Items from "../data/portfolio";

export default function Portfolio() {
  const datas = Items;
  const [items, setItems] = useState(datas);

  const filterItem = (catItems) => {
    const filteredItem = Items.filter((currElement) => {
      return currElement.category === catItems;
    });

    setItems(filteredItem);
  };

  return (
    <>
      <section className="porfolio py-24 px-5" id="portfolio">
        <main>
          <div className="section-heading mb-10">
            <h2>Portfolio</h2>
            <p>Show My Recent Projects</p>
          </div>

          <div className="section-body w-full">
            {/* <!-- buttons start --> */}
            <div className="portfolio-nav flex flex-wrap items-center justify-center">
              <button
                onClick={() => setItems(datas)}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                All
              </button>
              <button
                onClick={() => filterItem("WebTemplate")}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Web Design
              </button>
              <button
                onClick={() => filterItem("Frontend")}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Frontend Development
              </button>
              <button
                onClick={() => filterItem("WebApplication")}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Web App
              </button>
              <button
                onClick={() => filterItem("Wordpress")}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Wordpress
              </button>
            </div>
            {/* <!-- buttons end --> */}

            {/* <!-- items start --> */}
            <div className="portfolio-cards mt-10 flex flex-wrap items-center justify-center gap-10">
              {items.map((data) => {
                return (
                  <div key={data.id}>
                    <div className="p-card w-[320px] mb-8">
                      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                          <img
                            className="rounded-t-lg  h-[212px] object-cover"
                            src={data.image}
                            alt=""
                          />
                        </a>
                        <div className="p-5">
                          <a href="#">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                              {data.name}
                            </h5>
                          </a>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                            {data.description}
                          </p>
                          <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center mt-4"
                          >
                            See Details{" "}
                            <i className="bx bx-right-arrow-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <!-- items end --> */}
          </div>
        </main>
      </section>
    </>
  );
}
