function Resume() {
  return (
    <section className="flex justify-center text-center">
      <div className="text-center flex flex-col m-4 p-4">
        <h3 className="text-2xl font-bold">Front-end</h3>
        <ul className="skills m-2 p-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3 className="text-2xl font-bold">Back-end</h3>
        <ul className="skills m-2 p-2">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
