import { Link } from "@heroui/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1>Entrepreneurship Cell, a team of visionaries.</h1>
      </div>
      <div className="flex gap-4">
        <Link href="/apply">Apply</Link>
        <Link href="/task">task</Link>
      </div>
    </section>
  );
}
