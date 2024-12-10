import { HeroScene } from "@/components/hero-scene";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <HeroScene />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-6">
              Welcome to Nexus
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience shopping in a new dimension with our interactive 3D product showcase
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}