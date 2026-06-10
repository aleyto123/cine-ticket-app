import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Cine Ticket App
      </h1>

      <Button>
        Comprar Ticket
      </Button>
    </div>
  );
}

export default App;