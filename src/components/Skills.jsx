import skillData from "./../data/skills";
export default function Skills() {
  const skills = skillData;

  return (
    <>
      <section className="skills py-24 px-5" id="skills">
        <main>
          <div className="section-heading mb-[20px]">
            <h2>Skills</h2>
            <p>My Technical Skills</p>
          </div>

          <div className="section-body w-full lg:w-[70%] mx-auto mt-10">
            <div className="md:flex flex-wrap items-center justify-between gap-5 w-full">
              {skills.map((skill) => {
                return (
                  <div key={skill.id} className="w-full md:w-[45%]">
                    <div className="mb-1 text-base font-medium dark:text-white">
                      {skill.language}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
                        style={{ width: `${skill.skill}` }}
                      ></div>
                    </div>
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
