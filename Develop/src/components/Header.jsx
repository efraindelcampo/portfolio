function HeaderAndNav() {
  return (
    <>
      <header className="text-white bg-purple-600 text-center text-5xl m-4 p-4 border-r-3 font-bold rounded-xl">
        Efrain Del Campo
      </header>
      <nav className="text-white bg-purple-600 text-center m-4 p-4 border-r-3 font-bold rounded-xl">
        <ul className="flex flex-row justify-evenly">
          <li>
            <a href="/aboutme">AboutMe</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderAndNav;
