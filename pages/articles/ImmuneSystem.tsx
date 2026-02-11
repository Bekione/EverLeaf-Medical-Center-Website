
import React from 'react';
import { Link } from 'react-router-dom';

const ImmuneSystem: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center hover:text-primary transition-colors">
                  <span className="material-icons text-sm mr-1">home</span>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">chevron_right</span>
                  <Link to="/blog" className="ml-1 md:ml-2 hover:text-primary transition-colors">Articles</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">chevron_right</span>
                  <span className="ml-1 md:ml-2 text-slate-700 font-medium">5 Superfoods...</span>
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
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 rounded-full border border-green-100">
                  Nutrition
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <span className="material-icons text-sm">schedule</span> 4 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                5 Superfoods to Boost Your Immune System This Winter
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic">
                Prepare your body for the cold season with nutrient-dense foods that naturally strengthen your defenses.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8sckMzeel2TKzkxpRLW4h0bY-CXz8YGfQ6GuyWFmGquyjMWc3iFRrGiRN7tGo8fdwdLv7F4uziH2tIoFsoGvrzlG6vIMTDY8JhsgDSalL7mi4Mgy_CThF4_cle8rDWSs0h9fXSSEeetZF1LqNmqMDZQwKNk1wjIOWl_q8IrCHn_QBjuCxu3eSCZ0lt4igBw2lXB61R0GjiumAEtGmPuIV0x4URjQhs93ybFSL0bGRoc9Q2enHs_07MbtssuCOQ8qvjyg7MPDURA" alt="Assorted Superfoods Citrus Ginger Spinach" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                As winter approaches, the drop in temperature often brings an increase in colds and flu. While no single food can cure an illness, maintaining a healthy immune system gives your body a fighting chance. Incorporating specific superfoods into your daily diet can provide the vitamins, minerals, and antioxidants needed to keep your immune response strong.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">1. Citrus Fruits: The Vitamin C Powerhouse</h2>
              <p>
                Most people turn to Vitamin C after they've caught a cold, but it's best used as a preventative measure. Vitamin C is thought to increase the production of white blood cells, which are key to fighting infections.
              </p>
              <ul className="space-y-2 list-none pl-0 my-6">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">check_circle</span>
                  <span><strong>Types to try:</strong> Grapefruit, oranges, clementines, tangerines, lemons, and limes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">check_circle</span>
                  <span><strong>Daily intake:</strong> Your body doesn't produce or store it, so you need daily Vitamin C for continued health.</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400 my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Recipe Tip: Morning Boost Juice</h4>
                <p className="mb-0 text-sm">Blend 2 peeled oranges, 1/2 lemon, and a small pinch of turmeric for a zesty morning immune kick-starter.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">2. Ginger: The Anti-Inflammatory Root</h2>
              <p>
                Ginger is another ingredient many turn to after getting sick. It may help decrease inflammation, which can help reduce a sore throat and other inflammatory illnesses. Ginger may also help with nausea.
              </p>
              <p>
                It packs some heat in the form of gingerol, a relative of capsaicin. This compound is known for its powerful medicinal properties and effectiveness in reducing chronic pain.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">3. Spinach: Not Just for Popeye</h2>
              <p>
                Spinach made our list not just because it's rich in Vitamin C. It's also packed with numerous antioxidants and beta carotene, which may increase the infection-fighting ability of our immune systems.
              </p>
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmPPqeNQ74wh13YU31prsZcMnr0TWxUPkud__az4BSRoU42L1wzmFJg0zzcj3i0HMb80Wl65zfb8WYlPwuljOwtdCfZ6k45yT2RQszqalpqIMytQYplbCZ3NtiNCF3JLUo-YPayTSrdREsHalWMqRaqSwAUxE7ToRvoaKef_B9aVhQtzhjWshdfhycY94SgpTMkb00eQx_30SSKWswW1ELFVmM0mKLxrMMeg5BIjDkvm7tFMqv7Xw7af3nSQn68BWMzQKopbZrz4g" alt="Fresh Green Spinach" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0pU1TixRLCmNAENdHN6Y9zcqmWVrA3XeASXYNRJNnR9HYPpmwTUcgevBsL_qtTiGoWjcxsL4iudBAuLmKJghLEjHLsqe23AQNMymceA855u8OQeOyly73YaUj8nSs_A2NQVnVhNZaq-vVtWvwJgCh_Dxxupb2TNuga0QAyCd0SYNZ-7tPc89xSCNWEO-zZHwUHOezrEhi5_3xxJrSjTFKEOekdZ5Nu3hE76LyxLxEoMgO4c49NnQKoPZ5qZoajrR6-JMLda4KeVg" alt="Ginger Tea Preparation" className="rounded-xl shadow-md object-cover h-64 w-full" />
              </div>
              <p>
                Similar to broccoli, spinach is healthiest when it’s cooked as little as possible so that it retains its nutrients. However, light cooking makes it easier to absorb its Vitamin A and allows other nutrients to be released from oxalic acid.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">4. Yogurt: Probiotics for Gut Health</h2>
              <p>
                Look for yogurts that have "live and active cultures" printed on the label, like Greek yogurt. These cultures may stimulate your immune system to help fight diseases.
              </p>
              <p>
                Try to get plain yogurts rather than the kind that are flavored and loaded with sugar. You can sweeten plain yogurt yourself with healthy fruits and a drizzle of honey.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">5. Almonds: Vitamin E for the Win</h2>
              <p>
                When it comes to preventing and fighting off colds, Vitamin E tends to take a backseat to Vitamin C. However, this powerful antioxidant is key to a healthy immune system.
              </p>
              <ul className="space-y-2 list-none pl-0 my-6">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">restaurant</span>
                  <span><strong>Fat-soluble vitamin:</strong> Vitamin E requires the presence of fat to be absorbed properly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">timer</span>
                  <span><strong>Perfect snack:</strong> A half-cup serving provides nearly 100% of the recommended daily amount.</span>
                </li>
              </ul>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHD5LjxZo6DK-gc1m-XNR3K5I9AvGznl1MN578ewmgDH3bYN9qIdnk8hKi_N_sH9E5VhqkFyzZr0V5CpofOcjJtfRiK3xRPjpLTwhsVFA-2i-0NLgTNrRdYb8U4FsWKzFnvwTJNIWBhac-ad4nj65nAkxNhZJ2IIPOFOF1yH4N4mcJb18Cgkmpthdam7-eXt-NNKXiiw0VoMBpRuzEjdqnv_9mwRoxEDguAQzEIiHVq7du3HO5-cnq3NQKano-mABGpDd6SfuAvNw" alt="Emily Lewis RD" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Emily Lewis, RD</h3>
                <p className="text-primary font-medium text-sm mb-3">Senior Clinical Dietitian</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Emily is a Registered Dietitian with a passion for functional medicine. She specializes in creating personalized nutrition plans that boost immunity and improve metabolic health.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <Link to="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">email</span></Link>
                  <Link to="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">link</span></Link>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100 sticky top-28">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Time for a Check-up?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nutritional advice is best when personalized. Schedule a consultation with our nutrition team today.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" id="name" placeholder="Full Name" className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary" />
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-soft">
                  Request Appointment
                </button>
              </form>
              <p className="text-xs text-slate-400 mt-4 text-center">
                Or call us directly at <a href="tel:+15551234567" className="text-primary hover:underline font-semibold">555-123-4567</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Related Articles</h3>
              <div className="space-y-6">
                {[
                  { title: '5 Tips for Heart Health: A Guide to Wellness', cat: 'Cardiology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlFjjpPkZuPmGn_DWzxakEnDEayMJLRdZ6bFiddE91zMLTj7j-B316nVmbHuzt78lCw5kS9u00JAmVWKXJdMfYRQBND1LGt7dwaIQP7dxw3s6krW8q4aHl8pxo7BL74LvTZlRtdp5-97kKIzEFqAebbq1Nb5C7ZGfxFFGH-D_kcsCzML0VVgDlyUYyBgaeA9xX5KDNP9NklCIrlc7evMWlmCQNzdAT2eQOEJc1ZtxkbeOGgwdmghmwCPoMyZ14SVGwgBVKC3p1_FM' },
                  { title: 'Why the Flu Shot is More Important Than Ever', cat: 'Prevention', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2N8yNJO2FksSY2VL9aOORd-m7aLBKqwS5B8OVUya4ee0pPbyHbmAT3hU9azuBC7SpfJSUok1yqZQZoS8Jo-m1zgVY8y8eZrSWJe8ZT-ZMWrW0aUS2NgrXnoebEHBOOKRWNBt3WiZLUlxuxhrMRZhJlSy1hj8O0UQnwf8inWRb-1w4H_qHYp59geqyccrjHMhgYiKlPLQTiOPzNwcj7Ly58ovCe0lytrx-z0cTWyLE1YvXPFHc7HP3SXn6bKLnXiGXhIh62LSbBqw' },
                  { title: 'The Hidden Benefits of Staying Hydrated', cat: 'Lifestyle', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuFBUN7DMvatkuHe2PXk6i7AfNOVLYp7qH75l0IVakiufCcGPlyZMeCJYFtYTOmmY29eJ_URHGrqmz1eC27ZzhfOYg2x-1W0Jy1J2TLqbpOjR8yDO6QpHCpy8v3ZiRe3GGGrPZAnCZrQgQHcPeSMLfofeg9aRNIdUL3CIeScdG-gBaVGkvx0B84weBhyiVElKP-PwmC2ZRZRPs9SpMeBj8xld8u930TFDyLoL7BcIosX3lnwpggL79ZB3dcmJnTNu6vrA3y2S_Th0' }
                ].map((item, i) => (
                  <Link to="#" key={i} className="group flex gap-4 items-start">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1 block">{item.cat}</span>
                      <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">{item.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Subscribe to our Newsletter</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get the latest nutrition tips and recipes delivered to your inbox weekly.</p>
              <div className="relative z-10">
                <input type="email" placeholder="Your email address" className="w-full rounded-lg border-0 bg-white/20 text-white placeholder-blue-100 focus:ring-2 focus:ring-white mb-3" />
                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ImmuneSystem;
