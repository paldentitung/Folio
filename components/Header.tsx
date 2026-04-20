import Link from "next/link";
import MainButton from "./MainButton";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-2">
        <span className="bg-black rounded-full text-white w-8 h-8 flex items-center justify-center text-center  p-2 ">
          F
        </span>
        <h1 className="text-2xl">Folio</h1>
      </div>
      <nav className="flex gap-7">
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>

      <div>
        <Link href={"/about"}>
          <MainButton name="Read Blog" />
        </Link>
      </div>
    </header>
  );
}
