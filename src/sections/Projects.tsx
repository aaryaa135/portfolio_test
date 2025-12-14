export const Projects = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">My Work</p>

      <div className="mt-12 flex w-full items-center justify-center">
        <div className="max-w-xl rounded-xl border border-black-300 bg-black-200 p-10 text-center shadow-2xl">
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Projects in Progress 🚧
          </h3>

          <p className="text-white-600 leading-relaxed">
            I’m currently working on building and refining my projects.
            This section will be updated soon with detailed case studies,
            live demos, and source code.
          </p>

          <p className="mt-4 text-sm text-white-500">
            Meanwhile, feel free to explore the rest of my portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};
