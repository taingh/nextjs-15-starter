import { BlogCard } from "@/app/[locale]/blogs/BlogCard";
import { Locale } from "@/i18n/routing";
import { getPosts } from "@/lib/getBlogs";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blogs" });

  return constructMetadata({
    page: "Blogs",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/blogs`,
    canonicalUrl: `/blogs`,
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const { posts } = await getPosts(locale);

  const t = await getTranslations("Blogs");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} locale={locale} post={post} />
        ))}
      </div>
    </div>
  );
}
