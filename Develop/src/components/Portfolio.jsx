import jateSS from "../assets/images/jateSS.png";
import bookengineSS from "../assets/images/bookengineSS.png";

function Portfolio() {
  return (
    <div className="flex flex-row justify-center m-2 p-2 b-2">
      <h1 className="m-2 p-2">Jate offline editor</h1>
      <a href="https://pwatexteditor-m09k.onrender.com/">
        <img className="w-100 h-72" src={jateSS} alt="JATE" />
      </a>

      <h1 className="m-2 p-2">Book Engine</h1>
      <a href="https://booksearchengine-1-lngm.onrender.com/">
        <img className="w-100 h-72" src={bookengineSS} alt="book engine" />
      </a>
    </div>
  );
}

export default Portfolio;
