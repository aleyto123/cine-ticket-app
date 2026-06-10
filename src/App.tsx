import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-4 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-sm text-zinc-300">
          🎬 Tickets disponibles ahora
        </div>

        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-7xl">
          La mejor experiencia
          <span className="text-yellow-400"> de cine</span>
        </h1>

        <p className="mt-6 max-w-xl text-zinc-400">
          Compra tickets para las películas más esperadas
          del momento. Rápido, moderno y sin filas.
        </p>

        <div className="mt-10 flex gap-4">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            Ver cartelera
          </Button>

          <Button variant="outline">
            Saber más
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <Card className="border-zinc-800 bg-zinc-950 text-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Catálogo completo
            </h3>

            <p className="text-zinc-400">
              Las películas más populares y recientes
              disponibles siempre.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-950 text-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Compra fácil
            </h3>

            <p className="text-zinc-400">
              Agrega tickets al carrito rápidamente
              y compra en segundos.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-950 text-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Ratings reales
            </h3>

            <p className="text-zinc-400">
              Descubre puntuaciones y opiniones
              de la comunidad cinéfila.
            </p>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
}

export default App;