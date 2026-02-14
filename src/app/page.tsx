export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center gap-6 px-6 py-20">
      <span className="rounded-full bg-brand-sun/40 px-4 py-2 text-sm font-medium text-foreground">
        CommunityCircle MVP
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Build local, family-friendly meetups with less screen time.
      </h1>
      <p className="max-w-2xl text-lg text-slate-700">
        Pack 1 scaffolds the production-ready Next.js foundation, tooling, Docker setup, and docs.
      </p>
    </main>
  );
}
