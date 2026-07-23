export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-xl flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-balance">Raw text file</h1>
          <p className="text-muted-foreground leading-relaxed">
            The raw file is served as plain text at{" "}
            <a href="/l" className="underline font-medium">
              /l
            </a>
            . You can fetch it or load it from anywhere.
          </p>
        </header>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-muted-foreground">Contents</h2>
          <pre className="rounded-md border bg-card text-card-foreground p-4 font-mono text-sm overflow-x-auto">
            {`print'abc'`}
          </pre>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-muted-foreground">Fetch it</h2>
          <pre className="rounded-md border bg-card text-card-foreground p-4 font-mono text-sm overflow-x-auto">
            {`const res = await fetch("/l")
const text = await res.text()
console.log(text) // print'abc'`}
          </pre>
        </section>
      </div>
    </main>
  )
}
