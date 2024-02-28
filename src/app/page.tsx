import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <Button type="default">Button Default</Button>
      <Button type="primary">Button Primary</Button>
    </main>
  );
}
