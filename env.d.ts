declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
        TURNSTILE_SECRET_KEY: string;
        // The KV Namespace binding type used here comes
        // from `@cloudflare/workers-types`, in order to
        // use it like so, make sure that you have installed
        // the package as a dev dependency and you have added
        // it to your `tsconfig.json` file under
        // `compilerOptions.types`.
        GLOBAL_CONFIG: KVNamespace;
      }
    }
  }

  export {};
