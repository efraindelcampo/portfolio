function Contact() {
  return (
    <main>
      <div className="card-body text-white bg-purple-600 m-4 p-4 border-2 rounded-xl text-bold text-center">
        Contact Me
        <form>
          <input
            className="m-2 p-2 b-2 rounded-xl text-black"
            placeholder="Your name"
            name="username"
            type="text"
          />
          <input
            className="m-2 p-2 b-2 rounded-xl text-black"
            placeholder="Your email"
            name="email"
            type="text"
          />
          <input
            className="m-2 p-2 b-2 rounded-xl text-black"
            placeholder="Enter text here"
            name="password"
            type="text"
          />
          <button style={{ cursor: "pointer" }} type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
