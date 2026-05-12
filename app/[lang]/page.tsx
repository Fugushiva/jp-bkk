import { type Locale } from "@/lib/i18n";

interface LangPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function LangHome({ params }: LangPageProps) {
  const { lang } = await params;

  const greetings: Record<Locale, string> = {
    en: "Welcome",
    fr: "Bienvenue",
    th: "ยินดีต้อนรับ",
  };

  return (
    <main className="flex flex-1 items-center justify-center">
      <h1 className="font-heading text-4xl text-brand-primary">
        {greetings[lang]} — JP French Restaurant Bangkok
      </h1>
    </main>
  );
}
