export default function About() {
  return (
    <div className="flex flex-col max-w-xl font-[family-name:var(--font-geist-mono)]">
      <h1 className="text-2xl font-semibold mb-4 text-center">About Me</h1>
      <div className="text-sm/6 gap-4 flex flex-col">
        <div className="flex flex-col gap-3 pb-4">
          <p>
            Hey there! I&apos;m Josh, an experienced software engineer from
            Kansas City with a passion for building innovative solutions.
          </p>
          <p>
            I&apos;m passionate about writing code and constantly learning new
            things. Whether it&apos;s crafting user-friendly software or
            exploring the latest technologies, I&apos;m always up for the
            challenge!
          </p>
          <p>
            In my coding journey, I strive to create solutions that people not
            only use but enjoy using.
          </p>
          <p>
            Collaboration is key, and I find fulfillment in empowering others to
            reach their full potential.
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-4">
          <h3 className="text-lg font-semibold">Quick Fun Facts</h3>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://www.16personalities.com/isfp-personality"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                ISFP-T
              </a>
            </li>
            <li>Enthusiastic about Japanese culture, anime, and manga.</li>
            <li>Avid enjoyer of junk food, especially pizza and soda.</li>
            <li>Passionate about coding and learning new technologies.</li>
            <li>
              Enjoys playing video games, especially retro games, puzzle games,
              FPS games.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 pb-4">
          <h3 className="text-lg font-semibold">My Skills</h3>
          <p>I really like coding in: TypeScript, Go, SQL, C#, JavaScript.</p>
          <p>I have experience with Ruby, PHP, C/C++, Java, Python.</p>
          <p>
            Frameworks: React, Next.js, Astro, Vue.js, Nuxt, React Native
            (Expo), Ruby on Rails, Spring Boot, FastAPI.
          </p>
        </div>
      </div>
    </div>
  );
}
