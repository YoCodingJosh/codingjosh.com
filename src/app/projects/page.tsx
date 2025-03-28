export default function Projects() {
  return (
    <div className="flex flex-col max-w-xl font-[family-name:var(--font-geist-mono)] gap-4">
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Active Projects
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Video Streaming Site</h2>
            <p className="text-sm/6">
              Platform for watching licensed media. Uses Astro, Hono, React,
              TypeScript, TailwindCSS hosted on Cloudflare Workers for frontend
              and API layer; Go with Gin for backend. PostgreSQL (Supabase) for
              database.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">AI-augmented business software</h2>
            <p className="text-sm/6">
              AI utilities to enhance day-to-day operations to allow
              stakeholders to make informed decisions. Uses Hono and Cloudflare
              Workers for backend. React, TailwindCSS, TanStack Query, TanStack
              Router, and Vite for frontend.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Kablam Go!</h2>
            <p className="text-sm/6">
              Clone of Kaboom, a retro game, but written in Go using Ebitengine.
            </p>
            <p className="text-sm/6">
              This project was created to learn more about game development in
              Go and Ebitengine.
            </p>
            <a
              href="https://github.com/YoCodingJosh/kablam_go"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Stale Projects
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Yozora</h2>
            <p className="text-sm/6">
              Developer utility for one-off stuff like generating UUIDs,
              decoding base64, and more. Uses Go with Wails, using React and
              TailwindCSS for the frontend.
            </p>
            <a
              href="https://github.com/HYPEWORKS/yozora"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">MyAnimeList Stats</h2>
            <p className="text-sm/6">
              Pulls the latest data for a user&apos;s MyAnimeList account and
              displays their stats and fun facts. Doing a re-write using React
              and TailwindCSS for the frontend and Hono for the backend.
            </p>
            <a
              href="https://github.com/YoCodingJosh/anime-stats"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Brick Blaster!</h2>
            <p className="text-sm/6">
              Simple breakout type game written using Vue.js with TypeScript
              using Canvas.
            </p>
            <div className="flex flex-row gap-3">
              <a
                href="https://github.com/YoCodingJosh/brick-blaster"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                GitHub
              </a>
              &bull;
              <a
                href="https://brick-blaster.codingjosh.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Play!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
