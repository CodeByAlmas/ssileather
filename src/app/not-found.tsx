import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-svh flex-col justify-center py-40">
      <h1 className="display h-xl text-bone max-w-[12ch]">Page not found.</h1>
      <p className="lede mt-6">That link may have moved when we rebuilt the site. Start from the home page or see our products.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/">Go home</Button>
        <Button href="/#products" variant="ghost">
          Browse products
        </Button>
      </div>
    </section>
  );
}
