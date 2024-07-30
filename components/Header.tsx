import Link from "next/link";
import { Icons } from "./ui/icons";
import AuthButton from "./auth-button";

export default function Header() {
  return (
    <header
      className="flex gap-4 justify-between items-center w-full py-2 px-8
    border-b"
    >
      <Link href={"/"}>
        <Icons.grayola className="h-7" />
      </Link>

      <AuthButton />
    </header>
  );
}
