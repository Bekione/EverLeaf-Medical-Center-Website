import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../../components/NewsletterForm";
import SEO from "../../components/SEO";
import RelatedArticles from "../../components/RelatedArticles";

const ImmuneSystem: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "5 Superfoods to Boost Your Immune System",
          text: "Great tips for staying healthy this winter!",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <SEO
        title="5 Superfoods to Boost Immunity"
        description="Prepare your body for winter with these nutrient-dense foods recommended by our senior dietitians."
        type="article"
        canonical="https://everleaf-medical.com/blog/immune-system"
        image="/images/articles/article-3-hero.jpg"
      />
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <span className="material-icons text-sm mr-1">home</span>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">
                    chevron_right
                  </span>
                  <Link
                    to="/blog"
                    className="ml-1 md:ml-2 hover:text-primary transition-colors"
                  >
                    Articles
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">
                    chevron_right
                  </span>
                  <span className="ml-1 md:ml-2 text-slate-700 font-medium">
                    5 Superfoods...
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 rounded-full border border-green-100">
                    Health Tips
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 4
                    min read
                  </span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors"
                >
                  <span className="material-icons text-lg">share</span>
                  <span className="text-sm font-medium hidden sm:inline">
                    Share
                  </span>
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                5 Superfoods to Boost Your Immune System This Winter
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic">
                Prepare your body for the cold season with nutrient-dense foods
                that naturally strengthen your defenses.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img
                src="/images/articles/article-3-hero.jpg"
                alt="Assorted Superfoods Citrus Ginger Spinach"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                As winter approaches, the drop in temperature often brings an
                increase in colds and flu. While no single food can cure an
                illness, maintaining a healthy immune system gives your body a
                fighting chance. Incorporating specific superfoods into your
                daily diet can provide the vitamins, minerals, and antioxidants
                needed to keep your immune response strong.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                1. Citrus Fruits: The Vitamin C Powerhouse
              </h2>
              <p>
                Most people turn to Vitamin C after they've caught a cold, but
                it's best used as a preventative measure. Vitamin C is thought
                to increase the production of white blood cells, which are key
                to fighting infections.
              </p>
              <ul className="space-y-2 list-none pl-0 my-6">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">
                    check_circle
                  </span>
                  <span>
                    <strong>Types to try:</strong> Grapefruit, oranges,
                    clementines, tangerines, lemons, and limes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">
                    check_circle
                  </span>
                  <span>
                    <strong>Daily intake:</strong> Your body doesn't produce or
                    store it, so you need daily Vitamin C for continued health.
                  </span>
                </li>
              </ul>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400 my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Recipe Tip: Morning Boost Juice
                </h4>
                <p className="mb-0 text-sm">
                  Blend 2 peeled oranges, 1/2 lemon, and a small pinch of
                  turmeric for a zesty morning immune kick-starter.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                2. Ginger: The Anti-Inflammatory Root
              </h2>
              <p>
                Ginger is another ingredient many turn to after getting sick. It
                may help decrease inflammation, which can help reduce a sore
                throat and other inflammatory illnesses. Ginger may also help
                with nausea.
              </p>
              <p>
                It packs some heat in the form of gingerol, a relative of
                capsaicin. This compound is known for its powerful medicinal
                properties and effectiveness in reducing chronic pain.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                3. Spinach: Not Just for Popeye
              </h2>
              <p>
                Spinach made our list not just because it's rich in Vitamin C.
                It's also packed with numerous antioxidants and beta carotene,
                which may increase the infection-fighting ability of our immune
                systems.
              </p>
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="/images/article-body-1.jpg"
                  alt="Fresh Green Spinach"
                  className="rounded-xl shadow-md object-cover h-64 w-full"
                />
                <img
                  src="/images/article-body-2.jpg"
                  alt="Ginger Tea Preparation"
                  className="rounded-xl shadow-md object-cover h-64 w-full"
                />
              </div>
              <p>
                Similar to broccoli, spinach is healthiest when it's cooked as
                little as possible so that it retains its nutrients. However,
                light cooking makes it easier to absorb its Vitamin A and allows
                other nutrients to be released from oxalic acid.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                4. Yogurt: Probiotics for Gut Health
              </h2>
              <p>
                Look for yogurts that have "live and active cultures" printed on
                the label, like Greek yogurt. These cultures may stimulate your
                immune system to help fight diseases.
              </p>
              <p>
                Try to get plain yogurts rather than the kind that are flavored
                and loaded with sugar. You can sweeten plain yogurt yourself
                with healthy fruits and a drizzle of honey.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                5. Almonds: Vitamin E for the Win
              </h2>
              <p>
                When it comes to preventing and fighting off colds, Vitamin E
                tends to take a backseat to Vitamin C. However, this powerful
                antioxidant is key to a healthy immune system.
              </p>
              <ul className="space-y-2 list-none pl-0 my-6">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">
                    restaurant
                  </span>
                  <span>
                    <strong>Fat-soluble vitamin:</strong> Vitamin E requires the
                    presence of fat to be absorbed properly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">
                    timer
                  </span>
                  <span>
                    <strong>Perfect snack:</strong> A half-cup serving provides
                    nearly 100% of the recommended daily amount.
                  </span>
                </li>
              </ul>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/doctors/team-dr-emily-rodriguez.jpg"
                alt="Emily Rodriguez"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Emily Rodriguez
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Senior Clinical Dietitian
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Emily is a Registered Dietitian with a passion for functional
                  medicine. She specializes in creating personalized nutrition
                  plans that boost immunity and improve metabolic health.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-icons text-sm">email</span>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-icons text-sm">link</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <RelatedArticles
              currentId="immune-system"
              currentCategory="Health Tips"
            />

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                Subscribe to our Newsletter
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                Get the latest nutrition tips and recipes delivered to your
                inbox weekly.
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ImmuneSystem;
