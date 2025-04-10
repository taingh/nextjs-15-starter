"use client";

import { FaqSection } from "@/components/ui/faq-section";
import { useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("FAQ");

  const faqs = [
    {
      question: t("questions.features.question"),
      answer: t("questions.features.answer"),
    },
    {
      question: t("questions.i18n.question"),
      answer: t("questions.i18n.answer"),
    },
    {
      question: t("questions.support.question"),
      answer: t("questions.support.answer"),
    },
  ];

  return (
    <FaqSection
      title={t("title")}
      description={t("description")}
      items={faqs}
      className="py-24"
    />
  );
} 