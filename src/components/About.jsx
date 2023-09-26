export default function About() {
  return (
    <>
      <section className="about py-24 px-5" id="about">
        <main>
          <div className="section-heading mb-[20px]">
            <h2>About</h2>
            <p>Know About Me</p>
          </div>

          <div className="section-body w-full mt-10">
            <div className="flex items-center justify-between w-full">
              <div className="width-half hidden md:block">
                <img src="../../public/main.png" alt="My Photo" />
              </div>
              <div className="width-half p-4">
                <p className="i-am">Hello, I am</p>
                <h1 className="about-i-am">Muhammad Saroar</h1>
                <p className="my-1">Web Developer</p>
                <p>
                  I am a{" "}
                  <strong>
                    Professional Web Developer & Web Application Expert{" "}
                  </strong>
                  from Bangladesh. I am working With Web Template Design,
                  Frontend Development, Web Application, Wordpress &
                  WooCommerce. I am using React JS, Next JS, Elementor, PHP &
                  Laravel, Vue JS to create a stanning & Eye catching Websites &
                  Web Applications. I have created hundreds of Web Applications
                  for my clients & they are fully satisfied. You can see my
                  portflio and recently created projects form below.
                </p>
                <button
                  type="button"
                  className="mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  See Portfolio
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
