import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-3 p-4 border-b">
      <Image src="/next.svg" alt="Crediya logo" width={40} height={40} />
      <span className="font-semibold text-xl">Crediya</span>
    </header>
  );
}
