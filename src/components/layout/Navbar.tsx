import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-extrabold text-yellow-400">
          CineSpoilers
        </h1>

        <nav className="flex items-center gap-3">
          <Button variant="ghost">
            Catálogo
          </Button>

          <Button variant="ghost">
            Estrenos
          </Button>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            S/ 0
          </Button>
        </nav>
      </div>
    </header>
  );
}