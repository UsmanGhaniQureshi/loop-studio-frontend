const Footer = () => {
  return (
    <footer className="flex p-6 mt-10 md:h-60 md:px-10 items-center flex-col  md:flex-row justify-around bg-slate-900 text-white">
      <div className="flex flex-col items-center md:items-stretch justify-between">
        <h1 className="font-extrabold">loopStudio</h1>
        <nav className="flex list-none no-underline mt-4 flex-col py-4 items-start md:items-center  gap-4 md:flex-row">
          <li>
            <a className="hover:border-b hover:border-white" href="">
              About
            </a>
          </li>
          <li>
            <a className="hover:border-b hover:border-white" href="">
              Events
            </a>
          </li>
          <li>
            <a className="hover:border-b hover:border-white" href="">
              Products
            </a>
          </li>
          <li>
            <a className="hover:border-b hover:border-white" href="">
              Support
            </a>
          </li>
        </nav>
      </div>
      <div>2022 Loopstudios. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
