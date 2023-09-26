import ServiceCard from "./ServiceCard";
import servicesData from "../data/services";

export default function Services() {
  const datas = servicesData;

  return (
    <>
      <section className="services py-24 px-5" id="services">
        <main>
          <div className="section-heading mb-[20px]">
            <h2>Services</h2>
            <p>See Which Services I Give</p>
          </div>

          <div className="section-body w-full">
            <div className="services-box w-full flex flex-wrap items-center justify-center gap-5 mt-10">
              {datas.map((data) => {
                return (
                  <div key={data.id}>
                    <ServiceCard props={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
