import React from "react";
import SEO from "../components/SEO";
import { useTranslation, Trans } from "react-i18next";

const Privacy: React.FC = () => {
  const { t } = useTranslation();
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO
        title={t("pages.privacy.hero.title")}
        description={t("pages.privacy.hero.subtitle")}
        canonical="https://everleaf-medical.com/privacy"
        type="article"
      />
      <header className="bg-white border-b border-slate-100 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
              {t("pages.privacy.hero.badge")}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t("pages.privacy.hero.title")}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t("pages.privacy.hero.subtitle")}
            </p>
            <p className="text-sm text-slate-400 mt-4">
              {t("pages.privacy.hero.lastUpdated")}
            </p>
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-1/4">
              <div className="sticky top-32 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="material-icons text-primary text-xl">
                    toc
                  </span>{" "}
                  {t("pages.privacy.toc.title")}
                </h3>
                <nav className="space-y-1">
                  <a
                    href="#terms-of-use"
                    onClick={(e) => scrollToSection(e, "terms-of-use")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.terms")}
                  </a>
                  <a
                    href="#medical-disclaimer"
                    onClick={(e) => scrollToSection(e, "medical-disclaimer")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.disclaimer")}
                  </a>
                  <a
                    href="#data-protection"
                    onClick={(e) => scrollToSection(e, "data-protection")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.protection")}
                  </a>
                  <a
                    href="#info-collection"
                    onClick={(e) => scrollToSection(e, "info-collection")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.collection")}
                  </a>
                  <a
                    href="#patient-rights"
                    onClick={(e) => scrollToSection(e, "patient-rights")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.rights")}
                  </a>
                  <a
                    href="#cookies"
                    onClick={(e) => scrollToSection(e, "cookies")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.cookies")}
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                  >
                    {t("pages.privacy.toc.items.contact")}
                  </a>
                </nav>
              </div>
            </aside>

            <main className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8 md:p-12">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {t("pages.privacy.sections.intro.title")}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("pages.privacy.sections.intro.content")}
                  </p>
                </div>

                <hr className="border-slate-100 mb-12" />

                <div id="terms-of-use" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                      <span className="material-icons">gavel</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {t("pages.privacy.sections.terms.title")}
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("pages.privacy.sections.terms.content")}
                  </p>
                  <ul className="space-y-3 text-slate-600 list-disc pl-5">
                    <li>
                      <Trans
                        i18nKey="pages.privacy.sections.terms.list.license"
                        components={[<strong key="0" />]}
                      />
                    </li>
                    <li>
                      <Trans
                        i18nKey="pages.privacy.sections.terms.list.conduct"
                        components={[<strong key="0" />]}
                      />
                    </li>
                    <li>
                      <Trans
                        i18nKey="pages.privacy.sections.terms.list.security"
                        components={[<strong key="0" />]}
                      />
                    </li>
                  </ul>
                </div>

                <div id="medical-disclaimer" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <span className="material-icons">warning</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {t("pages.privacy.sections.disclaimer.title")}
                    </h2>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <p className="text-slate-700 font-medium mb-2">
                      {t("pages.privacy.sections.disclaimer.subtitle")}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <Trans
                        i18nKey="pages.privacy.sections.disclaimer.content"
                        components={[<strong key="0" />]}
                      />
                    </p>
                    <p className="text-slate-600 text-sm mt-4">
                      <strong>
                        {t("pages.privacy.sections.disclaimer.emergency")}
                      </strong>
                    </p>
                  </div>
                </div>

                <hr className="border-slate-100 mb-12" />

                <div id="data-protection" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg text-primary">
                      <span className="material-icons">shield</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {t("pages.privacy.sections.protection.title")}
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {t("pages.privacy.sections.protection.content")}
                  </p>
                  <ul className="space-y-4">
                    {(
                      t("pages.privacy.sections.protection.list", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-icons text-green-500 mt-1 text-sm">
                          check_circle
                        </span>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="info-collection" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                      <span className="material-icons">folder_shared</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {t("pages.privacy.sections.collection.title")}
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("pages.privacy.sections.collection.content")}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        {t("pages.privacy.sections.collection.personal.title")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t(
                          "pages.privacy.sections.collection.personal.content",
                        )}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        {t("pages.privacy.sections.collection.medical.title")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t("pages.privacy.sections.collection.medical.content")}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        {t("pages.privacy.sections.collection.usage.title")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t("pages.privacy.sections.collection.usage.content")}
                      </p>
                    </div>
                  </div>
                </div>

                <div id="patient-rights" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                      <span className="material-icons">accessibility_new</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {t("pages.privacy.sections.rights.title")}
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {t("pages.privacy.sections.rights.content")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">
                        {t("pages.privacy.sections.rights.items.access.title")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t(
                          "pages.privacy.sections.rights.items.access.content",
                        )}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">
                        {t(
                          "pages.privacy.sections.rights.items.rectification.title",
                        )}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t(
                          "pages.privacy.sections.rights.items.rectification.content",
                        )}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">
                        {t("pages.privacy.sections.rights.items.erasure.title")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t(
                          "pages.privacy.sections.rights.items.erasure.content",
                        )}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">
                        {t(
                          "pages.privacy.sections.rights.items.restriction.title",
                        )}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t(
                          "pages.privacy.sections.rights.items.restriction.content",
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div id="cookies" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                      <span className="material-icons">cookie</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {t("pages.privacy.sections.cookies.title")}
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {t("pages.privacy.sections.cookies.content")}
                  </p>
                </div>

                <div
                  id="contact"
                  className="bg-blue-50 p-8 rounded-xl scroll-mt-32"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {t("pages.privacy.contact.title")}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {t("pages.privacy.contact.subtitle")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:${t("pages.privacy.contact.email")}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-primary hover:text-primary transition-colors font-medium"
                    >
                      <span className="material-icons text-sm">email</span>{" "}
                      {t("pages.privacy.contact.email")}
                    </a>
                    <a
                      href={`tel:${t("pages.privacy.contact.phone").replace(/ /g, "")}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-primary hover:text-primary transition-colors font-medium"
                    >
                      <span className="material-icons text-sm">phone</span>{" "}
                      {t("pages.privacy.contact.phone")}
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
