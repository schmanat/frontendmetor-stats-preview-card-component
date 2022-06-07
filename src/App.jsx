import HeroImage from "./assets/images/image-header-desktop.jpg";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-very-dark-blue font-lexend">
      <div className="rounded-lg w-[327px] desktop:w-[1110px] bg-dark-desaturated-blue m-5 desktop:flex desktop:flex-row-reverse">
        <div className="relative desktop:w-1/2">
          <div className="w-full h-full z-20 absolute bg-soft-violet/50 "></div>
          <img
            src={HeroImage}
            alt="symbol bild"
            className="rounded-t-lg desktop:rounded-t-none desktop:rounded-r-lg z-10 w-full"
          />
        </div>
        <div className="p-8 desktop:w-1/2 desktop:pl-[75px]">
          <h1 className="text-white text-[1.7rem] text-center desktop:text-left desktop:mt-16 font-inter font-bold">
            Get <span className="text-soft-violet">insights</span> that help
            your business grow.
          </h1>
          <p className="text-slightly-white text-normal desktop:text-left desktop:w-[352px] font-inter mt-6 text-center">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col desktop:flex-row desktop:space-y-0 text-center space-y-7 mt-14 desktop:mt-20 desktop:justify-between desktop:w-[352px]">
            <div>
              <h2 className="text-white text-2xl font-bold">10k+</h2>
              <p className="text-slightly-white-transparent uppercase text-xs font-normal mt-2">
                Companies
              </p>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">314</h2>
              <p className="text-slightly-white-transparent uppercase text-xs font-normal mt-2">
                Templates
              </p>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">12M+</h2>
              <p className="text-slightly-white-transparent uppercase text-xs font-normal mt-2">
                Queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
