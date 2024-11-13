import selfie from "../assets/images/selfie.JPG";

function AboutMe() {
  return (
    <>
      <div className="flex flex-row">
        <section className="m-4 p-4 b-2 text-purple-600 text-center text-3xl">
          Hello, my name is Efrain Del Campo and I am 28 year old fullstack
          developer looking to collaborate with others. Checkout a few of my
          projects in the portfolio section and get in contact with me from
          the contact page. If you'd like to see my skillset and languages I
          know so far checkout the the resume component.
        </section>
      <img className="max-w-80 m-2 p-4 b-r-2 rounded-xl" src={selfie} atl="selfie" />
      </div>
    </>
  );
}

export default AboutMe;
