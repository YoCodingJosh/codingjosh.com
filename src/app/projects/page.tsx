export default function Projects() {
  return (
    <div className="flex flex-col max-w-xl font-[family-name:var(--font-geist-mono)]">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Project 1</h2>
          <p className="text-lg">Description of Project 1</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Project 2</h2>
          <p className="text-lg">Description of Project 2</p>
        </div>
      </div>
    </div>
  );
}
