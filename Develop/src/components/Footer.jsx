import Github from "../assets/images/github.png";

function Footer() {
  return (
    <>
      <footer>
        <a href="https://github.com/efraindelcampo">
          <img
            className="w-40 mx-auto my-auto mt-40"
            src={Github}
            alt="github logo"
          ></img>
        </a>
      </footer>
    </>
  );
}

export default Footer;
