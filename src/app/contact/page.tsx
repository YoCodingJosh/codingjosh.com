import { Link, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      Feel free to reach out to me! Click the button below to send me an email!
      <div className="flex items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]"
          href="/contact"
        >
          <Mail />
          Contact
        </Link>
      </div>
    </>
  );
}
