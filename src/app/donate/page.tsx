export default function Donate() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-10 border-1 border-dashed border-gray-400">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold">Donate</h1>
        <p className="text-lg font-semibold pt-2">
          I appreciate any donations of any amount!
        </p>
        <div className="flex flex-col items-center pt-3">
          <a href="https://ko-fi.com/Z8Z810D8H7" target="_blank">
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto"
              src="/ko-fi_donate.svg"
              alt="Support me on Ko-fi"
            />
          </a>
        </div>
        <div className="flex justify-center items-center pt-3 pb-3">
          <p className="text-lg">
            PayPal:{" "}
            <a
              className="text-blue-500"
              href="https://www.paypal.com/paypalme/codingjosh"
              target="_blank"
            >
              @codingjosh
            </a>
          </p>
        </div>
        <p className="text-sm">Thank you for even considering donating!</p>
      </div>
    </main>
  );
}
