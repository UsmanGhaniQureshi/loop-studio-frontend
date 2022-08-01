const OurCreation = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-center md:text">Our Creation</h1>
        <button className="px-7 py-3 hidden md:block border-2 border-black rounded-sm hover:border-blue-700 hover:bg-slate-600 hover:text-white transition-all duration-300 ">
          See All
        </button>
      </div>
      <div className="flex flex-col w-full md:flex-row gap-8 overflow-hidden mt-4">
        <div className="overflow-hidden group relative">
          <img
            src="/images/hero.jpg"
            className="object-contain group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
         <div className="absolute bottom-0 left-0 w-full h-0  bg-indigo-900 opacity-0 group-hover:h-full group-hover:opacity-10 duration-500" />
          <h1 className="absolute bottom-2 w-full text-center font-bold group-hover:-translate-y-2 group-hover:text-white ease-in-out transition-all duration-300 group-hover:tracking-widest z-50">
            Text
          </h1>
        </div>{" "}
        <div className="overflow-hidden group relative">
          <img
            src="/images/hero.jpg"
            className="object-contain group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
         <div className="absolute bottom-0 left-0 w-full h-0  bg-indigo-900 opacity-0 group-hover:h-full group-hover:opacity-10 duration-500" />
          <h1 className="absolute bottom-2 w-full text-center font-bold group-hover:-translate-y-2 group-hover:text-white ease-in-out transition-all duration-300 group-hover:tracking-widest z-50">
            Text
          </h1>
        </div>{" "}
        <div className="overflow-hidden group relative">
          <img
            src="/images/hero.jpg"
            className="object-contain group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
         <div className="absolute bottom-0 left-0 w-full h-0  bg-indigo-900 opacity-0 group-hover:h-full group-hover:opacity-10 duration-500" />
          <h1 className="absolute bottom-2 w-full text-center font-bold group-hover:-translate-y-2 group-hover:text-white ease-in-out transition-all duration-300 group-hover:tracking-widest z-50">
            Text
          </h1>
        </div>
      </div>
      {/* Container 2 */}
      <div className="flex flex-col mt-10 w-full md:flex-row gap-8 overflow-hidden">
        <div className="overflow-hidden group relative">
          <img
            src="/images/hero.jpg"
            className="object-contain group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
         <div className="absolute bottom-0 left-0 w-full h-0  bg-indigo-900 opacity-0 group-hover:h-full group-hover:opacity-10 duration-500" />
          <h1 className="absolute bottom-2 w-full text-center font-bold group-hover:-translate-y-2 group-hover:text-white ease-in-out transition-all duration-300 group-hover:tracking-widest z-50">
            Text
          </h1>
        </div>
        <div className="overflow-hidden group relative">
          <img
            src="/images/hero.jpg"
            className="object-contain group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
         <div className="absolute bottom-0 left-0 w-full h-0  bg-indigo-900 opacity-0 group-hover:h-full group-hover:opacity-10 duration-500" />
          <h1 className="absolute bottom-2 w-full text-center font-bold group-hover:-translate-y-2 group-hover:text-white ease-in-out transition-all duration-300 group-hover:tracking-widest z-50">
            Text
          </h1>
        </div>
        <div className="overflow-hidden group relative rounded-lg">
          <img
            src="/images/hero.jpg"
            className="object-contain  group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full h-0  bg-indigo-900 opacity-0 group-hover:h-full group-hover:opacity-10 duration-500" />
          <h1 className="absolute bottom-2 w-full text-center font-bold group-hover:-translate-y-2 group-hover:text-white ease-in-out transition-all duration-300 group-hover:tracking-widest z-50">
            Text
          </h1>
        </div>
      </div>
    </>
  );
};

export default OurCreation;
