export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
        CommunityCircle MVP · Pack 1
      </span>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Screen-light family meetups for your neighborhood.
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Project scaffolding is ready. Next packs will add auth, onboarding, events, messaging,
        moderation, analytics, and admin tooling.
      </p>
    </main>
  );
}
