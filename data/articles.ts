import { rawSrc } from "../components/CldImg";
// ─── Content Block Types ────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "list";
      items: {
        icon?: string;
        iconColor?: string;
        title?: string;
        text: string;
      }[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
      color?: "blue" | "green" | "red" | "orange" | "purple";
    }
  | { type: "image-grid"; images: { src: string; alt: string }[] }
  | {
      type: "metric-list";
      items: { metric: string; target: string; icon: string }[];
    };

// ─── Article Interface ───────────────────────────────────────────────────────

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  read: string;
  img: string;
  author: string;
  authorImg: string;
  authorTitle: string;
  authorBio: string;
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
  excerpt?: string;
  content: ContentBlock[];
}

// ─── Articles Data ───────────────────────────────────────────────────────────

export const articles: Article[] = [
  // ── 1. Preventive Cardiology ─────────────────────────────────────────────
  {
    id: "preventive-cardiology",
    title: "5 Essential Tips for Preventive Heart Health",
    subtitle:
      "Taking proactive steps today can significantly reduce your risk of heart disease tomorrow. Our cardiologists share evidence-based strategies for maintaining cardiovascular wellness.",
    category: "Health Tips",
    date: "Feb 14, 2026",
    read: "6 min read",
    img: "/images/articles/article-1-hero.jpg",
    author: "Dr. Mark Williams",
    authorImg: rawSrc("/images/doctors/team-dr-mark-williams.jpg"),
    authorTitle: "Chief of Cardiology",
    authorBio:
      "Dr. Williams is a dedicated cardiologist focusing on preventive heart care and minimally invasive surgical procedures. He leads our comprehensive cardiovascular wellness program.",
    seoTitle: "Preventive Cardiology: 5 Essential Tips for Heart Health",
    seoDescription:
      "Expert cardiologist advice on preventing heart disease through lifestyle changes, regular screenings, and proactive care.",
    featured: true,
    excerpt:
      "Heart disease remains the leading cause of death globally, yet up to 80% of cardiovascular diseases are preventable. Learn the five evidence-based strategies our cardiologists recommend.",
    content: [
      {
        type: "paragraph",
        text: "Heart disease remains the leading cause of death globally, yet up to 80% of cardiovascular diseases are preventable through lifestyle modifications and early intervention. At EverLeaf Medical Center, our cardiology department emphasizes proactive care to help you maintain a healthy heart for life.",
      },
      {
        type: "paragraph",
        text: '"The best time to start caring for your heart was 20 years ago. The second best time is now," says Dr. Mark Williams, Chief of Cardiology. Here are five evidence-based strategies to protect your cardiovascular health.',
      },
      { type: "heading", text: "1. Know Your Numbers" },
      {
        type: "paragraph",
        text: "Regular health screenings are the foundation of preventive cardiology. Understanding your key health metrics enables early detection and intervention.",
      },
      {
        type: "metric-list",
        items: [
          {
            metric: "Blood Pressure",
            target: "Below 120/80 mmHg",
            icon: "favorite",
          },
          {
            metric: "Total Cholesterol",
            target: "Below 200 mg/dL",
            icon: "bloodtype",
          },
          {
            metric: "Blood Sugar",
            target: "Fasting below 100 mg/dL",
            icon: "water_drop",
          },
          {
            metric: "Body Mass Index (BMI)",
            target: "18.5 – 24.9",
            icon: "monitor_weight",
          },
        ],
      },
      { type: "heading", text: "2. Adopt a Heart-Healthy Diet" },
      {
        type: "paragraph",
        text: "Nutrition plays a crucial role in cardiovascular health. The Mediterranean diet, rich in fruits, vegetables, whole grains, and healthy fats, has been shown to reduce heart disease risk by up to 30%.",
      },
      {
        type: "image-grid",
        images: [
          {
            src: "/images/article-body-1.jpg",
            alt: "Healthy Mediterranean Diet",
          },
          {
            src: "/images/article-body-2.jpg",
            alt: "Fresh Vegetables and Fruits",
          },
        ],
      },
      { type: "heading", text: "3. Exercise Regularly" },
      {
        type: "paragraph",
        text: "The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity per week. Exercise strengthens your heart muscle, improves circulation, and helps manage weight.",
      },
      {
        type: "paragraph",
        text: "Start small if you're new to exercise. Even a 10-minute daily walk can make a difference. Gradually increase duration and intensity as your fitness improves.",
      },
      { type: "heading", text: "4. Manage Stress Effectively" },
      {
        type: "paragraph",
        text: "Chronic stress contributes to high blood pressure, inflammation, and unhealthy coping behaviors. Incorporate stress-reduction techniques into your daily routine:",
      },
      {
        type: "list",
        items: [
          {
            title: "Mindfulness meditation",
            text: "Just 10 minutes daily can lower cortisol levels.",
          },
          { title: "Quality sleep", text: "Aim for 7–9 hours per night." },
          {
            title: "Social connections",
            text: "Strong relationships buffer against stress.",
          },
          {
            title: "Professional support",
            text: "Don't hesitate to seek counseling if needed.",
          },
        ],
      },
      { type: "heading", text: "5. Quit Smoking and Limit Alcohol" },
      {
        type: "paragraph",
        text: "Smoking is one of the most significant risk factors for heart disease. Within just one year of quitting, your heart attack risk drops by 50%. EverLeaf offers comprehensive smoking cessation programs with proven success rates.",
      },
      {
        type: "paragraph",
        text: "If you drink alcohol, do so in moderation: up to one drink per day for women and two for men. Excessive alcohol can raise blood pressure and contribute to heart failure.",
      },
      {
        type: "callout",
        color: "red",
        title: "⚠ Know the Warning Signs",
        text: "Seek immediate medical attention if you experience chest pain or discomfort, shortness of breath, pain in arms, back, neck, jaw, or stomach, or sudden dizziness. Call 911 immediately for these symptoms.",
      },
    ],
  },

  // ── 2. Diabetes Management ───────────────────────────────────────────────
  {
    id: "diabetes-management",
    title: "New Breakthrough in Diabetes Management Using AI Technology",
    subtitle:
      "Artificial intelligence is revolutionizing how we approach chronic disease management, offering new hope for Type 2 diabetes patients through personalized care.",
    category: "Research",
    date: "Jan 12, 2026",
    read: "7 min read",
    img: "/images/articles/article-2-hero.jpg",
    author: "Dr. Mark Williams",
    authorImg: rawSrc("/images/doctors/team-dr-mark-williams.jpg"),
    authorTitle: "Chief of Cardiology",
    authorBio:
      "Dr. Williams is also a leading researcher in the field of endocrinology, exploring the intersections between heart health and metabolic disorders like diabetes.",
    seoTitle: "Breakthrough in Diabetes Management",
    seoDescription:
      "EverLeaf Research Center announces new AI-driven technology for proactive Type 2 diabetes management.",
    excerpt:
      "EverLeaf's latest clinical trial shows AI-driven diabetes management can reduce A1C levels by 2.5% and increase time-in-range from 55% to 78%.",
    content: [
      {
        type: "paragraph",
        text: "In a landmark development for endocrinology, EverLeaf Research Center has announced promising results from its latest clinical trial involving AI-driven diabetes management systems. This new technology leverages machine learning algorithms to predict blood sugar fluctuations before they happen, allowing for preemptive insulin adjustments.",
      },
      {
        type: "paragraph",
        text: "For decades, patients with Type 2 diabetes have relied on reactive measures—testing blood sugar and then administering medication. This new AI approach shifts the paradigm to proactive care, significantly reducing the risk of dangerous hypoglycemic events.",
      },
      { type: "heading", text: "How the AI Technology Works" },
      {
        type: "paragraph",
        text: "The system integrates with standard continuous glucose monitors (CGMs) and insulin pumps. Unlike traditional loops, this AI model analyzes a patient's historical data, dietary habits, and even sleep patterns to forecast glucose levels up to 60 minutes in advance.",
      },
      {
        type: "list",
        items: [
          {
            icon: "analytics",
            iconColor: "text-blue-500",
            title: "Predictive Analysis",
            text: "Anticipates spikes after meals based on food composition analysis.",
          },
          {
            icon: "smart_toy",
            iconColor: "text-blue-500",
            title: "Automated Dosing",
            text: "Micro-adjustments to insulin delivery every 5 minutes.",
          },
          {
            icon: "cloud_sync",
            iconColor: "text-blue-500",
            title: "Real-time Doctor Alerts",
            text: "Seamlessly shares critical anomalies with your EverLeaf endocrinologist.",
          },
        ],
      },
      { type: "heading", text: "Clinical Trial Results at EverLeaf" },
      {
        type: "paragraph",
        text: "Our recent 12-month study followed 500 patients with uncontrolled Type 2 diabetes. The results were statistically significant and clinically transformative.",
      },
      {
        type: "callout",
        color: "blue",
        title: "Key Findings",
        text: "The group using the AI-assisted management system saw a 2.5% reduction in A1C levels on average compared to the control group. Furthermore, time-in-range (the percentage of time blood sugar is within healthy limits) increased from 55% to 78%.",
      },
      { type: "heading", text: "Benefits for Type 2 Patients" },
      {
        type: "paragraph",
        text: "This technology isn't just about numbers; it's about quality of life. Patients reported significantly less \"diabetes burnout\"—the emotional exhaustion that comes from constant self-management.",
      },
      {
        type: "image-grid",
        images: [
          { src: "/images/article-body-2.jpg", alt: "Patient using app" },
          { src: "/images/article-body-3.jpg", alt: "Data visualization" },
        ],
      },
      { type: "heading", text: "The Future of Personalized Medicine" },
      {
        type: "paragraph",
        text: '"This is just the beginning," says Dr. Mark Williams. "As our datasets grow, the AI becomes smarter and more personalized for each individual. We are moving towards a future where diabetes management is nearly invisible to the patient."',
      },
      {
        type: "paragraph",
        text: "EverLeaf is currently expanding this program to all eligible patients within our network starting next month.",
      },
    ],
  },

  // ── 3. Immune System ─────────────────────────────────────────────────────
  {
    id: "immune-system",
    title: "5 Superfoods to Boost Your Immune System This Winter",
    subtitle:
      "Prepare your body for the cold season with nutrient-dense foods that naturally strengthen your defenses.",
    category: "Health Tips",
    date: "Nov 08, 2025",
    read: "4 min read",
    img: "/images/articles/article-3-hero.jpg",
    author: "Dr. Emily Rodriguez",
    authorImg: rawSrc("/images/doctors/team-dr-emily-rodriguez.jpg"),
    authorTitle: "Endocrinologist",
    authorBio:
      "Dr. Rodriguez treats hormonal disorders including diabetes, thyroid conditions, and metabolic syndrome. She is passionate about functional nutrition and its role in immune health.",
    seoTitle: "5 Superfoods to Boost Immunity",
    seoDescription:
      "Prepare your body for winter with these nutrient-dense foods recommended by our senior dietitians.",
    excerpt:
      "As winter approaches, these five superfoods can give your immune system the vitamins, minerals, and antioxidants it needs to stay strong.",
    content: [
      {
        type: "paragraph",
        text: "As winter approaches, the drop in temperature often brings an increase in colds and flu. While no single food can cure an illness, maintaining a healthy immune system gives your body a fighting chance. Incorporating specific superfoods into your daily diet can provide the vitamins, minerals, and antioxidants needed to keep your immune response strong.",
      },
      { type: "heading", text: "1. Citrus Fruits: The Vitamin C Powerhouse" },
      {
        type: "paragraph",
        text: "Most people turn to Vitamin C after they've caught a cold, but it's best used as a preventative measure. Vitamin C is thought to increase the production of white blood cells, which are key to fighting infections.",
      },
      {
        type: "list",
        items: [
          {
            icon: "check_circle",
            iconColor: "text-green-500",
            title: "Types to try",
            text: "Grapefruit, oranges, clementines, tangerines, lemons, and limes.",
          },
          {
            icon: "check_circle",
            iconColor: "text-green-500",
            title: "Daily intake",
            text: "Your body doesn't produce or store it, so you need daily Vitamin C for continued health.",
          },
        ],
      },
      {
        type: "callout",
        color: "orange",
        title: "Recipe Tip: Morning Boost Juice",
        text: "Blend 2 peeled oranges, 1/2 lemon, and a small pinch of turmeric for a zesty morning immune kick-starter.",
      },
      { type: "heading", text: "2. Ginger: The Anti-Inflammatory Root" },
      {
        type: "paragraph",
        text: "Ginger is another ingredient many turn to after getting sick. It may help decrease inflammation, which can help reduce a sore throat and other inflammatory illnesses. Ginger may also help with nausea.",
      },
      {
        type: "paragraph",
        text: "It packs some heat in the form of gingerol, a relative of capsaicin. This compound is known for its powerful medicinal properties and effectiveness in reducing chronic pain.",
      },
      { type: "heading", text: "3. Spinach: Not Just for Popeye" },
      {
        type: "paragraph",
        text: "Spinach made our list not just because it's rich in Vitamin C. It's also packed with numerous antioxidants and beta carotene, which may increase the infection-fighting ability of our immune systems.",
      },
      {
        type: "image-grid",
        images: [
          { src: "/images/article-body-1.jpg", alt: "Fresh Green Spinach" },
          { src: "/images/article-body-2.jpg", alt: "Ginger Tea Preparation" },
        ],
      },
      {
        type: "paragraph",
        text: "Similar to broccoli, spinach is healthiest when it's cooked as little as possible so that it retains its nutrients. However, light cooking makes it easier to absorb its Vitamin A and allows other nutrients to be released from oxalic acid.",
      },
      { type: "heading", text: "4. Yogurt: Probiotics for Gut Health" },
      {
        type: "paragraph",
        text: 'Look for yogurts that have "live and active cultures" printed on the label, like Greek yogurt. These cultures may stimulate your immune system to help fight diseases.',
      },
      {
        type: "paragraph",
        text: "Try to get plain yogurts rather than the kind that are flavored and loaded with sugar. You can sweeten plain yogurt yourself with healthy fruits and a drizzle of honey.",
      },
      { type: "heading", text: "5. Almonds: Vitamin E for the Win" },
      {
        type: "paragraph",
        text: "When it comes to preventing and fighting off colds, Vitamin E tends to take a backseat to Vitamin C. However, this powerful antioxidant is key to a healthy immune system.",
      },
      {
        type: "list",
        items: [
          {
            icon: "restaurant",
            iconColor: "text-primary",
            title: "Fat-soluble vitamin",
            text: "Vitamin E requires the presence of fat to be absorbed properly.",
          },
          {
            icon: "restaurant",
            iconColor: "text-primary",
            title: "Perfect snack",
            text: "A half-cup serving provides nearly 100% of the recommended daily amount.",
          },
        ],
      },
    ],
  },

  // ── 4. Pediatric Wing ────────────────────────────────────────────────────
  {
    id: "pediatric-wing",
    title: "EverLeaf Opens New Pediatric Wing in West Wing",
    subtitle:
      "Designed with our youngest patients in mind, the new wing features state-of-the-art technology in a comforting environment.",
    category: "Announcements",
    date: "Nov 01, 2025",
    read: "2 min read",
    img: "/images/articles/article-4-hero.jpg",
    author: "Dr. Emily Chen",
    authorImg: rawSrc("/images/doctors/team-dr-emily-chen.jpg"),
    authorTitle: "Senior Pediatrician",
    authorBio:
      "Dr. Chen is a passionate pediatrician known for her gentle approach and expertise in early childhood development. She oversaw the design and implementation of the new pediatric wing.",
    seoTitle: "New Pediatric Wing Opening",
    seoDescription:
      "Announcing the opening of our new West Wing facility dedicated to family-centered pediatric care.",
    excerpt:
      "EverLeaf Medical Center's new Pediatric Wing features 50 private rooms, a dedicated pediatric emergency department, and specialized play therapy zones.",
    content: [
      {
        type: "paragraph",
        text: "We are thrilled to announce the official opening of the new Pediatric Wing located in the hospital's West Wing. This expansion represents a significant investment in the health and well-being of the children in our community.",
      },
      {
        type: "paragraph",
        text: "The new facility includes 50 private patient rooms, a dedicated pediatric emergency department, and specialized play therapy zones designed to reduce anxiety during hospital stays. Every room allows for parent overnight stays, recognizing that family presence is key to a child's recovery.",
      },
      { type: "heading", text: "Features of the New Wing" },
      {
        type: "list",
        items: [
          {
            icon: "check_circle",
            iconColor: "text-red-500",
            title: "Family-Centered Rooms",
            text: "Spacious suites with sleeping accommodations for parents.",
          },
          {
            icon: "check_circle",
            iconColor: "text-red-500",
            title: "Interactive Play Areas",
            text: "Technology-free zones to encourage imaginative play.",
          },
          {
            icon: "check_circle",
            iconColor: "text-red-500",
            title: "Advanced Monitoring",
            text: "The latest in non-invasive pediatric monitoring systems.",
          },
        ],
      },
      {
        type: "paragraph",
        text: '"This new wing allows us to provide the highest level of medical care while acknowledging that children need a different kind of environment to heal effectively. Every detail, from the art on the walls to the lighting, was chosen to comfort our patients," says Dr. Emily Chen.',
      },
      {
        type: "callout",
        color: "red",
        title: "Visit Us",
        text: "The new Pediatric Wing is now open and accepting patients. Tours for families are available every Saturday morning. Contact our pediatrics department to schedule a visit.",
      },
    ],
  },

  // ── 5. Anxiety in Teens ──────────────────────────────────────────────────
  {
    id: "anxiety-in-teens",
    title: "Recognizing the Early Signs of Anxiety in Teenagers",
    subtitle:
      "Mental health is just as important as physical health. Learn how to spot the subtle signs of anxiety in adolescents.",
    category: "Medical Awareness",
    date: "Oct 28, 2025",
    read: "6 min read",
    img: "/images/articles/article-5-hero.jpg",
    author: "Dr. Rachel Green",
    authorImg: rawSrc("/images/doctors/team-dr-rachel-green.jpg"),
    authorTitle: "Clinical Psychologist",
    authorBio:
      "Dr. Green specializes in cognitive behavioral therapy and mental health support for chronic illness patients. She works closely with families to create supportive environments for teens facing anxiety and depression.",
    seoTitle: "Recognizing Anxiety in Teenagers",
    seoDescription:
      "A guide for parents on spotting the physical and emotional signs of anxiety disorders in adolescents.",
    excerpt:
      "Anxiety disorders are increasingly common among teenagers. Identifying the symptoms early can lead to better outcomes and prevent long-term struggles.",
    content: [
      {
        type: "paragraph",
        text: "Adolescence is a time of significant change, and some moodiness is normal. However, anxiety disorders are becoming increasingly common among teenagers. Identifying the symptoms early can lead to better outcomes and prevent long-term struggles.",
      },
      { type: "heading", text: "Physical vs. Emotional Symptoms" },
      {
        type: "paragraph",
        text: "Anxiety doesn't just manifest as worry. In teens, it often presents physically. Parents should look out for unexplained complaints such as:",
      },
      {
        type: "list",
        items: [
          {
            icon: "lens",
            iconColor: "text-purple-500",
            text: "Frequent headaches or stomach aches without a medical cause.",
          },
          {
            icon: "lens",
            iconColor: "text-purple-500",
            text: "Changes in sleep patterns (insomnia or oversleeping).",
          },
          {
            icon: "lens",
            iconColor: "text-purple-500",
            text: "Sudden drop in grades or avoidance of social situations.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Emotional signs might include irritability, restlessness, or an intense fear of making mistakes.",
      },
      {
        type: "callout",
        color: "purple",
        title: "When to Seek Help",
        text: "If anxiety interferes with daily activities, school work, or relationships for more than two weeks, it is advisable to consult a professional psychologist or psychiatrist.",
      },
      { type: "heading", text: "How Parents Can Help" },
      {
        type: "paragraph",
        text: 'Creating a safe, non-judgmental space for teens to express their feelings is the first step. Avoid dismissing their concerns as "just a phase." Instead:',
      },
      {
        type: "list",
        items: [
          {
            title: "Listen actively",
            text: "Give your full attention without immediately offering solutions.",
          },
          {
            title: "Validate feelings",
            text: "Acknowledge that their anxiety is real, even if the cause seems minor.",
          },
          {
            title: "Seek professional help",
            text: "A licensed therapist can provide cognitive behavioral therapy (CBT), which is highly effective for teen anxiety.",
          },
        ],
      },
    ],
  },

  // ── 6. Flu Season ────────────────────────────────────────────────────────
  {
    id: "flu-season",
    title: "Flu Season 2025: Why the Vaccine is More Important Than Ever",
    subtitle:
      "Protect yourself and your community. Here is everything you need to know about this year's flu strain.",
    category: "Health Tips",
    date: "Oct 15, 2025",
    read: "3 min read",
    img: "/images/articles/article-6-hero.jpg",
    author: "Dr. Bereket Kinfe",
    authorImg: rawSrc("/images/doctors/team-dr-bereket-kinfe.jpg"),
    authorTitle: "Infectious Disease Specialist",
    authorBio:
      "Dr. Kinfe is an expert in diagnosing and treating complex infectious diseases. He leads EverLeaf's annual community vaccination program and advises on seasonal flu prevention strategies.",
    seoTitle: "Flu Season 2025 Guide",
    seoDescription:
      "Everything you need to know about this year's flu strain and why vaccination is critical for community health.",
    excerpt:
      "With pandemic-era precautions relaxed, viruses are circulating more freely. Here's why getting your flu shot this season is more critical than ever.",
    content: [
      {
        type: "paragraph",
        text: "With winter fast approaching, health experts are predicting a potentially severe flu season. The relaxation of pandemic-era precautions means viruses are circulating more freely than in previous years.",
      },
      { type: "heading", text: "Who Should Get Vaccinated?" },
      {
        type: "paragraph",
        text: "The CDC recommends that everyone 6 months of age and older get a flu vaccine every season. It is particularly crucial for:",
      },
      {
        type: "list",
        items: [
          { text: "Adults 65 years and older." },
          { text: "Children younger than 5." },
          { text: "Pregnant people." },
          {
            text: "People with chronic health conditions (asthma, heart disease, diabetes).",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Vaccination not only reduces your risk of getting sick but also prevents hospitalization and death. It creates a community immunity barrier that protects those who cannot be vaccinated.",
      },
      { type: "heading", text: "What's Different This Year?" },
      {
        type: "paragraph",
        text: "This season's vaccine has been updated to better match the circulating strains. EverLeaf Medical Center is offering flu shots at all our locations with no appointment needed. Our pharmacists and nurses are available to answer any questions about the vaccine's safety and efficacy.",
      },
      {
        type: "callout",
        color: "green",
        title: "EverLeaf Flu Clinic Hours",
        text: "Walk-in flu shots are available Monday–Saturday, 8am–6pm at all EverLeaf locations. No appointment required. Most insurance plans cover the cost at 100%.",
      },
    ],
  },

  // ── 7. Senior Mobility ───────────────────────────────────────────────────
  {
    id: "senior-mobility",
    title: "Mobility in Seniors: The Link Between Walking and Cognitive Health",
    subtitle:
      "New studies suggest that maintaining physical mobility may be a key factor in preserving memory and cognitive function in older adults.",
    category: "Research",
    date: "Oct 10, 2025",
    read: "7 min read",
    img: "/images/articles/article-7-hero.jpg",
    author: "Dr. Sarah Johnson",
    authorImg: rawSrc("/images/doctors/team-dr-sarah-johnson.jpg"),
    authorTitle: "Senior Neurologist",
    authorBio:
      "Dr. Johnson specializes in complex neurological disorders with over 15 years of experience. Her research focuses on the connection between physical mobility and cognitive health in aging adults.",
    seoTitle: "Mobility & Cognitive Health in Seniors",
    seoDescription:
      "New research highlights the vital link between walking speed, physical activity, and brain health in older adults.",
    excerpt:
      "A new study found that seniors who maintained a brisk walking pace were 40% less likely to develop cognitive impairment. Here's what you can do.",
    content: [
      {
        type: "paragraph",
        text: "For years, doctors have known that exercise is good for the brain. However, recent research specifically highlights the connection between gait speed (how fast you walk) and the onset of dementia.",
      },
      {
        type: "paragraph",
        text: "The study, published in the Journal of Geriatric Medicine, followed 1,000 seniors over five years. It found that those who maintained a brisk walking pace were 40% less likely to develop cognitive impairment compared to those whose gait slowed significantly.",
      },
      { type: "heading", text: "Why Movement Matters" },
      {
        type: "paragraph",
        text: "Walking requires complex coordination between the brain, nervous system, and muscles. A decline in this ability often signals underlying neurological changes before memory loss becomes apparent.",
      },
      {
        type: "callout",
        color: "blue",
        title: "Doctor's Advice",
        text: '"Don\'t stop moving. Even a 20-minute daily walk can stimulate neurogenesis—the creation of new brain cells," says Dr. Sarah Johnson.',
      },
      { type: "heading", text: "Practical Steps to Stay Mobile" },
      {
        type: "list",
        items: [
          {
            title: "Daily walks",
            text: "Aim for at least 20–30 minutes of brisk walking each day.",
          },
          {
            title: "Balance exercises",
            text: "Yoga and tai chi improve coordination and reduce fall risk.",
          },
          {
            title: "Strength training",
            text: "Light resistance exercises preserve muscle mass critical for mobility.",
          },
          {
            title: "Regular check-ups",
            text: "Gait speed assessments at EverLeaf can detect early decline.",
          },
        ],
      },
    ],
  },
];
