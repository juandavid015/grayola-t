import { Icons } from "./ui/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 mt-auto text-sm text-neutral-500 w-full py-8 items-center">
      <div>
        <p>
          Built and designed by{" "}
          <a
            href="https://github.com/juandavid015"
            target="_blank"
            rel="noreferrer"
            className="bg-black-md text-white font-bold w-fit h-fit"
          >
            @juandgr
          </a>
        </p>
      </div>

      <div className="flex gap-2">
        <span className="flex items-center gap-1">
          using{" "}
          <span className="inline-flex items-center gap-1" aria-label="next.js">
            <a
              className="inline-flex items-center gap-1"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.next className="h-6 text-black-md" />
            </a>
          </span>
        </span>
        <span className="flex items-center gap-1" aria-label="grayola.io">
          for{" "}
          <a
            className="inline-flex items-center gap-1"
            href="https://grayola.io/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.grayola className="h-6 text-black-md" />
          </a>
        </span>
      </div>

      <span className="border-t border-t neutral-500">
        Aplication for practicing porpuses, as part of a technical test.
      </span>
    </footer>
  );
};
export default Footer;
