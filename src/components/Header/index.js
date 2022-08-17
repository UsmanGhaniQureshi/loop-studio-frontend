const Header = () => {
  return (
    <div className="md:w-4/5 text-white mx-auto p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">loopstudios</h1>
        <nav className=" hidden list-none md:flex md:gap-x-4 box-border">
          <li>
            <a className="hover:border-b p-1 hover:border-zinc-900">About</a>
          </li>
          <li>
            <a className="hover:border-b  p-1 hover:border-zinc-900">Careers</a>
          </li>
          <li>
            <a className="hover:border-b  p-1 hover:border-zinc-900">Events</a>
          </li>
          <li>
            <a className="hover:border-b  p-1 hover:border-zinc-900">Product</a>
          </li>
          <li>
            <a className="hover:border-b  p-1 hover:border-zinc-900">Support</a>
          </li>
        </nav>
      </div>
      <h1 className="px-10 py-5 font-thin max-w-xs text-left text-xl font-bold md:text-4xl mt-20 rounded-sm uppercase border border-white">
        Impressive experiences that deliver
      </h1>
    </div>
  );
};

export default Header;
