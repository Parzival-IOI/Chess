import Board from "@/components/Board";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen w-full max-w-7xl flex-col items-center justify-center bg-rose-200/10">
      <Board />
    </main>
  );
}
