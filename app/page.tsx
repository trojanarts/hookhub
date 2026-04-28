import { HOOKS } from '@/data/hooks';
import { CATEGORIES, type Category } from '@/lib/categories';
import HookCard from '@/components/HookCard';
import CategoryFilter from '@/components/CategoryFilter';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const raw = typeof category === 'string' ? category : undefined;
  const activeCategory: Category | null =
    raw && (CATEGORIES as readonly string[]).includes(raw)
      ? (raw as Category)
      : null;

  const hooks = activeCategory
    ? HOOKS.filter((h) => h.category === activeCategory)
    : HOOKS;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            hookhub
          </h1>
          <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
            A directory of open-source Claude Code hooks.
          </p>
        </header>

        <CategoryFilter active={activeCategory} />

        {hooks.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hooks.map((hook) => (
              <HookCard key={hook.slug} hook={hook} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-zinc-400">
            No hooks in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
