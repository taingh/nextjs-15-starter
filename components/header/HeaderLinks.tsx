import { SOURCE_CODE_URL } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const headerLinks = [
  {
    name: "blogs",
    href: "/blogs",
    target: "self",
    rel: undefined,
  },
];

const HeaderLinks = () => {
  const tHeader = useTranslations("Header");
  // const locale = useLocale();

  return (
    <div className="hidden md:flex flex-row items-center gap-x-4 font-bold">
      {headerLinks.map((link) => (
        <I18nLink
          key={link.name}
          href={link.href}
          title={tHeader(link.name)}
          prefetch={false}
          target={link.target || "_self"}
          rel={link.rel || undefined}
          className="mx-2 hover:underline"
        >
          {tHeader(link.name)}
        </I18nLink>
      ))}
    </div>
  );
};
export default HeaderLinks;
