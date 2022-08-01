const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-4 lg:relative">
      <div className="flex-1 md:flex-none lg:w-[750px]">
        <img
          src="/images/hero.jpg"
          className="w-full overflow-hidden object-fill"
        />
      </div>
      <div className="w-full lg:max-w-xl lg:px-20 pt-10  lg:absolute lg:bottom-0 lg:right-[5%] bg-white lg:z-20">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Hero;
