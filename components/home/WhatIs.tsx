"use client";

import { InfoIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function WhatIs() {
  const t = useTranslations("WhatIs");
  const [isClient, setIsClient] = useState(false);

  // 为避免服务端渲染与客户端渲染不匹配问题
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("title")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12 grid gap-8">
          <div className="space-y-6">
            {[1, 2, 3].map((itemNum) => (
              <div key={itemNum} className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <InfoIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">{t(`items.item${itemNum}.title`)}</h3>
                </div>
                <p className="text-muted-foreground">{t(`items.item${itemNum}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 