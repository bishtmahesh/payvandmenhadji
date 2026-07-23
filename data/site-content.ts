// Content for Treatments and Conditions pages, transcribed from the
// client document "Dr_Menhadji_Website_Content" (sections 5, 6 and 10).

export type Tone = "ivory" | "parchment" | "sand";

export type Block =
  | { kind: "prose"; eyebrow?: string; heading: string; body: string }
  | { kind: "cards"; eyebrow?: string; heading: string; intro?: string; items: { title: string; text: string }[] }
  | { kind: "list"; eyebrow?: string; heading: string; items: { title: string; text: string }[] }
  | { kind: "accordion"; eyebrow?: string; heading: string; items: { title: string; text: string; meta?: string }[] }
  | { kind: "bullets"; eyebrow?: string; heading: string; items: string[] }
  | { kind: "process"; eyebrow?: string; heading: string; steps: string[] };

export type ContentPage = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  preheading: string;
  heroTitle: string;
  heroSub?: string;
  summary: string;
  blocks: Block[];
  ctaTitle: string;
  ctaCopy?: string;
};

export const treatments: ContentPage[] = [
  {
    slug: "periodontal-therapy",
    navLabel: "Periodontal Therapy",
    metaTitle: "Non-surgical Gum Treatment in London | Dr Menhadji",
    metaDescription:
      "Specialist non-surgical periodontal therapy in London. Effective treatment for gingivitis and periodontitis. Book a consultation.",
    preheading: "Treatments",
    heroTitle: "Stopping gum disease before it costs you teeth.",
    heroSub: "A staged, evidence-based course of non-surgical treatment to bring active gum disease under control.",
    summary: "A staged, evidence-based course of non-surgical treatment to bring active gum disease under control.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "The foundation of periodontal care.",
        body: "Non-surgical periodontal therapy, sometimes called deep cleaning or root surface debridement, is the foundation of periodontal care. The aim is to remove the bacterial biofilm and hardened deposits from beneath the gum line, allowing inflamed tissues to heal and the pockets around the teeth to shrink.",
      },
      {
        kind: "prose",
        eyebrow: "Who It Is For",
        heading: "Gum disease at any stage.",
        body: "Patients with gingivitis or periodontitis at any stage. For most people with gum disease, this is the first, and often the only, treatment required.",
      },
      {
        kind: "accordion",
        eyebrow: "What To Expect",
        heading: "A measured, staged pathway.",
        items: [
          { title: "Initial diagnostic appointment", text: "Full periodontal charting and radiographs where appropriate.", meta: "01" },
          { title: "One or two treatment sessions", text: "Carried out under local anaesthetic. Most patients describe it as uncomfortable rather than painful.", meta: "02" },
          { title: "Re-evaluation", text: "A review appointment six to eight weeks later to measure the response to treatment.", meta: "03" },
          { title: "Personalised maintenance", text: "A tailored maintenance plan, usually shared with your general hygienist.", meta: "04" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Results",
        heading: "Stopping disease progression.",
        body: "In the majority of patients, properly performed non-surgical therapy stops disease progression, reduces bleeding, and removes the need for further surgical treatment. Where surgery is still required, this stage gives the best possible starting point for it.",
      },
    ],
    ctaTitle: "Bring active gum disease under control.",
    ctaCopy: "Indicative fees are confirmed in writing after your consultation.",
  },
  {
    slug: "surgical-periodontal-treatment",
    navLabel: "Surgical Periodontal Treatment",
    metaTitle: "Periodontal Surgery in London | Dr Payvand Menhadji",
    metaDescription:
      "Targeted periodontal surgery under local anaesthetic for deep pockets, bone loss and furcation defects, by a London Specialist Periodontist.",
    preheading: "Treatments",
    heroTitle: "When non-surgical care isn't enough.",
    summary: "Targeted, day-case surgery to access and reshape the supporting tissues where pockets persist.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Access where it is needed.",
        body: "In a minority of cases, gum disease leaves behind deep pockets or defects that cannot be reached or resolved without lifting the gum tissue. Periodontal surgery is a targeted, day-case procedure performed under local anaesthetic, often a single visit per area of the mouth, to gain access to the root surface and reshape or regenerate the supporting tissues.",
      },
      {
        kind: "cards",
        eyebrow: "Who It Is For",
        heading: "Where surgery earns its place.",
        items: [
          { title: "Persistent deep pockets", text: "Pockets that remain after a full course of non-surgical therapy." },
          { title: "Localised bone loss", text: "Defects that may benefit from regeneration." },
          { title: "Furcation defects", text: "Bone loss between the roots of molar teeth." },
        ],
      },
      {
        kind: "accordion",
        eyebrow: "What To Expect",
        heading: "Carefully planned and reviewed.",
        items: [
          { title: "Surgical planning appointment", text: "Including 3D imaging where indicated.", meta: "01" },
          { title: "The procedure", text: "Usually 60–90 minutes under local anaesthetic, with the option of sedation by a colleague where requested.", meta: "02" },
          { title: "Suture removal", text: "Sutures are removed at one to two weeks.", meta: "03" },
          { title: "Healing assessment", text: "Healing fully assessed at three and six months.", meta: "04" },
        ],
      },
    ],
    ctaTitle: "Discuss your options.",
  },
  {
    slug: "gum-grafting",
    navLabel: "Gum Grafting",
    metaTitle: "Gum Grafting in London | Specialist Periodontist",
    metaDescription:
      "Modern gum grafting techniques to restore the gum line, treat recession and protect exposed tooth roots.",
    preheading: "Treatments",
    heroTitle: "Restoring the gum line where it has receded.",
    summary: "Rebuilding lost tissue where recession exposes the root, causes sensitivity, or affects the smile.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Rebuilding lost tissue with biological respect.",
        body: "When the gum has receded, exposing the root, causing sensitivity, or making a tooth look longer than its neighbour, grafting can rebuild the lost tissue. The technique used depends on the cause of the recession and what we are trying to achieve: root coverage, thicker gum to prevent further recession, or both.",
      },
      {
        kind: "cards",
        eyebrow: "Techniques Offered",
        heading: "Technique follows objective.",
        items: [
          { title: "Connective tissue grafts", text: "The gold standard for root coverage." },
          { title: "Free gingival grafts", text: "Where additional attached tissue is the priority." },
          { title: "Tunnel & coronally advanced flap", text: "Minimally invasive approaches with excellent aesthetic outcomes." },
          { title: "Biologic agents & substitutes", text: "Used where appropriate to avoid taking tissue from the palate." },
        ],
      },
      {
        kind: "accordion",
        eyebrow: "Who It Is For",
        heading: "When grafting is considered.",
        items: [
          { title: "Visible recession", text: "Recession that is bothering you cosmetically.", meta: "01" },
          { title: "Progressive recession", text: "Recession that risks the long-term survival of a tooth.", meta: "02" },
          { title: "Root sensitivity", text: "Sensitivity from exposed root surfaces.", meta: "03" },
          { title: "Pre-orthodontic assessment", text: "Recession around teeth being planned for orthodontics.", meta: "04" },
        ],
      },
    ],
    ctaTitle: "Discuss gum recession with a specialist.",
  },
  {
    slug: "periodontal-regeneration",
    navLabel: "Periodontal Regeneration",
    metaTitle: "Periodontal Regeneration London | Dr Menhadji",
    metaDescription:
      "Guided tissue regeneration and biologic materials to partly rebuild bone and ligament lost to periodontitis, in selected cases.",
    preheading: "Treatments",
    heroTitle: "Rebuilding what gum disease has taken.",
    summary: "Regrowing bone and ligament lost to periodontitis, in carefully selected cases.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Regenerating lost support.",
        body: "In carefully selected cases, the bone and ligament lost to periodontitis can be partly regrown. This is achieved using a combination of guided tissue regeneration, biologic agents and bone substitute materials placed during a small surgical procedure.",
      },
      {
        kind: "prose",
        eyebrow: "Honest Expectations",
        heading: "Not a universal solution.",
        body: "Regeneration works best in specific defect shapes and in patients with controlled disease, good oral hygiene and no active smoking. Where indicated, it can save teeth that would otherwise need to be extracted, but it is not suitable for every case, and that is discussed honestly at consultation.",
      },
    ],
    ctaTitle: "See whether regeneration is suitable.",
  },
  {
    slug: "crown-lengthening",
    navLabel: "Crown Lengthening",
    metaTitle: "Crown Lengthening London | Aesthetic & Functional",
    metaDescription:
      "Aesthetic and functional crown lengthening to reshape the gum line or save a damaged tooth.",
    preheading: "Treatments",
    heroTitle: "Reshaping the gum line, for a better smile or to save a tooth.",
    summary: "Aesthetic reshaping for a gummy smile, or functional lengthening to make a tooth restorable.",
    blocks: [
      {
        kind: "cards",
        eyebrow: "Two Objectives",
        heading: "Aesthetic and functional.",
        items: [
          { title: "Aesthetic crown lengthening", text: "For a gummy smile or uneven tooth heights, the gum line, and sometimes the underlying bone, is reshaped to reveal more of the natural tooth, for a balanced smile without changing the teeth themselves." },
          { title: "Functional crown lengthening", text: "When a tooth is broken or decayed near the gum line, repositioning the gum and bone creates the space a crown or filling needs, often turning an unrestorable tooth into a restorable one." },
        ],
      },
      {
        kind: "process",
        eyebrow: "What To Expect",
        heading: "A short, coordinated pathway.",
        steps: [
          "A single procedure under local anaesthetic",
          "Healing assessed at three to six months",
          "Close coordination with your restorative dentist",
        ],
      },
    ],
    ctaTitle: "Plan your crown lengthening.",
  },
  {
    slug: "dental-implants",
    navLabel: "Dental Implants",
    metaTitle: "Specialist Dental Implants London | Dr Payvand Menhadji",
    metaDescription:
      "Dental implants planned and placed by a Specialist Periodontist. Single tooth, multiple teeth and complex cases.",
    preheading: "Treatments",
    heroTitle: "Replacing missing teeth, designed to last.",
    summary: "Single tooth, multiple teeth or full-arch replacement, planned for long-term stability.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "The closest thing to a natural tooth.",
        body: "A dental implant is a small titanium fixture that integrates with the jawbone to support a crown, bridge or denture. Implants are the closest thing modern dentistry has to a natural tooth, but only when they are planned and placed with care.",
      },
      {
        kind: "list",
        eyebrow: "My Approach",
        heading: "Planned around the final result.",
        items: [
          { title: "Healthy gums first", text: "Implants are placed only after the gums are healthy. This single rule prevents most long-term failures." },
          { title: "Digital planning", text: "Every case is planned digitally using 3D imaging, with the final tooth designed first and the implant positioned to support it." },
          { title: "Augmentation where needed", text: "Bone or gum augmentation is performed where needed to ensure stable, healthy tissue around the implant." },
          { title: "Co-owned with your team", text: "The final crown is made by your restorative dentist, so aesthetics and function are shared by your wider team." },
        ],
      },
      {
        kind: "accordion",
        eyebrow: "Types Of Cases",
        heading: "From single teeth to complex sites.",
        items: [
          { title: "Single missing tooth", text: "A single implant-supported crown.", meta: "01" },
          { title: "Multiple missing teeth", text: "Bridges supported on implants.", meta: "02" },
          { title: "Replacing a failing tooth", text: "Including immediate placement where indicated.", meta: "03" },
          { title: "Complex cases", text: "Requiring bone or sinus augmentation.", meta: "04" },
        ],
      },
    ],
    ctaTitle: "Find out whether implants are right for you.",
  },
  {
    slug: "peri-implantitis",
    navLabel: "Treatment of Peri-implantitis",
    metaTitle: "Peri-implantitis Treatment London | Dr Menhadji",
    metaDescription:
      "Specialist treatment for failing dental implants. Non-surgical and surgical management of peri-implantitis.",
    preheading: "Treatments",
    heroTitle: "Saving implants that are in trouble.",
    summary: "Specialist management of infection around implants, one of the most common reasons for referral.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Gum disease around an implant.",
        body: "Peri-implantitis is gum disease around a dental implant. It can develop years after the implant was placed, often silently, and is one of the most common reasons dentists refer to me. Left untreated, it leads to bone loss and eventually loss of the implant itself.",
      },
      {
        kind: "list",
        eyebrow: "How It Is Treated",
        heading: "Matched to the stage of disease.",
        items: [
          { title: "Full diagnostic assessment", text: "Including specialist imaging." },
          { title: "Non-surgical decontamination", text: "Of the implant surface where the disease is early." },
          { title: "Surgical access", text: "Decontamination, sometimes combined with regeneration, for more advanced cases." },
          { title: "Long-term maintenance", text: "A plan to keep the implant stable." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Outcomes",
        heading: "The right time to ask is early.",
        body: "Many implants can be saved if treated early. The right time to ask about peri-implantitis is at the first sign of bleeding, recession or discomfort around an implant, not when it is loose.",
      },
    ],
    ctaTitle: "Book an assessment.",
  },
  {
    slug: "bone-grafting",
    navLabel: "Bone Grafting & Ridge Augmentation",
    metaTitle: "Bone Grafting & Ridge Augmentation London",
    metaDescription:
      "Bone grafting and ridge augmentation to support dental implants where bone has been lost.",
    preheading: "Treatments",
    heroTitle: "Rebuilding the foundation before placing an implant.",
    summary: "Rebuilding lost bone volume so an implant can be placed in the correct position.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Restoring lost volume.",
        body: "When a tooth has been missing for some time, the bone that used to hold it shrinks. Bone grafting and ridge augmentation rebuild that lost volume so that a dental implant can be placed in the correct position, not just wherever there happens to be bone.",
      },
      {
        kind: "cards",
        eyebrow: "Techniques Offered",
        heading: "The right technique for the site.",
        items: [
          { title: "Socket preservation", text: "Carried out at the time of extraction." },
          { title: "Guided bone regeneration", text: "Using particulate grafts and membranes." },
          { title: "Sinus augmentation", text: "A sinus lift for upper back teeth." },
          { title: "Soft-tissue augmentation", text: "Alongside bone work for the best long-term result." },
        ],
      },
    ],
    ctaTitle: "Build the foundation for your implant.",
  },
];

export const conditions: ContentPage[] = [
  {
    slug: "gum-disease",
    navLabel: "Gum Disease (Gingivitis & Periodontitis)",
    metaTitle: "Gum Disease (Gingivitis & Periodontitis) | London Specialist",
    metaDescription:
      "Specialist information on gingivitis and periodontitis from a London Specialist Periodontist. Signs, causes and treatment.",
    preheading: "Conditions",
    heroTitle: "The most common disease no one talks about.",
    summary: "A chronic bacterial infection of the tissues that hold your teeth in place. Around half of UK adults have it.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Two stages, one disease.",
        body: "Gum disease is a chronic, bacterial infection of the tissues that hold your teeth in place. It has two stages: gingivitis, in which the gums are inflamed but the underlying bone is still intact, and periodontitis, in which bone is actively being lost. Around half of UK adults have some form of it.",
      },
      {
        kind: "bullets",
        eyebrow: "Signs To Look For",
        heading: "What to watch for.",
        items: [
          "Bleeding when you brush or floss: never normal, even occasionally.",
          "Red, swollen or tender gums.",
          "Gums that look as though they are pulling away from the teeth.",
          "Persistent bad breath.",
          "Teeth that feel loose, drifting or longer than they used to be.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "What Can Be Done",
        heading: "Caught early, it can be stopped.",
        body: "Caught early, gingivitis is fully reversible. Periodontitis cannot be reversed, but in almost every case it can be stopped, and most patients keep their teeth for life with the right care. Treatment starts with non-surgical periodontal therapy; surgery is only required in a minority of cases.",
      },
    ],
    ctaTitle: "Have your gums assessed.",
  },
  {
    slug: "gum-recession",
    navLabel: "Gum Recession",
    metaTitle: "Gum Recession Treatment London | Dr Menhadji",
    metaDescription:
      "What causes gum recession, why it matters and how it can be treated by a Specialist Periodontist in London.",
    preheading: "Conditions",
    heroTitle: "When the gum line retreats.",
    summary: "The gradual loss of gum tissue along a tooth, exposing the root.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Why recession happens.",
        body: "Recession is the gradual loss of gum tissue along the side of a tooth, exposing the root. It can be caused by gum disease, brushing too hard, the position of the tooth in the jaw, a thin biotype of gum, or orthodontic treatment.",
      },
      {
        kind: "cards",
        eyebrow: "Why It Matters",
        heading: "More than a cosmetic concern.",
        items: [
          { title: "Sensitivity", text: "Sensitive teeth, especially to cold." },
          { title: "Cosmetic concerns", text: "Teeth looking longer or uneven." },
          { title: "Root decay", text: "A higher risk of decay on exposed roots." },
          { title: "Tooth survival", text: "In severe cases, eventual loss of the tooth." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What Can Be Done",
        heading: "Monitored or restored.",
        body: "Mild recession is often best monitored. Where recession is progressing, causing symptoms, or affecting your smile, gum grafting can restore the tissue. Modern techniques are far less invasive than they used to be, and can be planned around a single tooth or a whole row.",
      },
    ],
    ctaTitle: "Discuss gum recession.",
  },
  {
    slug: "bleeding-gums",
    navLabel: "Bleeding Gums",
    metaTitle: "Bleeding Gums: Causes & Treatment | London Periodontist",
    metaDescription:
      "Bleeding gums are the earliest sign of gum disease. A London Specialist Periodontist explains the causes and what to do.",
    preheading: "Conditions",
    heroTitle: "Bleeding gums are never normal.",
    summary: "The earliest and most reliable sign of gum disease. Healthy gums do not bleed.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "An early warning sign.",
        body: "Bleeding when you brush or floss is the earliest and most reliable sign of gum disease. Healthy gums do not bleed.",
      },
      {
        kind: "bullets",
        eyebrow: "Common Causes",
        heading: "What lies behind it.",
        items: [
          "Build-up of plaque and tartar along the gum line.",
          "Hormonal changes, including pregnancy.",
          "Certain medications, including blood thinners.",
          "Smoking, which can mask bleeding rather than prevent it.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "What To Do",
        heading: "Have it checked.",
        body: "If your gums have been bleeding for more than a week, please have them checked, by your dentist, hygienist, or directly by a periodontist. Most cases settle quickly with the right cleaning and a tailored home-care routine.",
      },
    ],
    ctaTitle: "Get bleeding gums checked.",
  },
  {
    slug: "loose-teeth",
    navLabel: "Loose Teeth",
    metaTitle: "Loose Teeth in Adults: Causes & Treatment | London",
    metaDescription:
      "In adults, teeth should never feel loose. A London Specialist Periodontist explains the causes and how loose teeth can be stabilised.",
    preheading: "Conditions",
    heroTitle: "Loose teeth in adults are a warning sign.",
    summary: "Mobility is a late sign of bone loss, occlusal overload, or trauma.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Teeth should not move.",
        body: "In adults, teeth should never feel loose. Mobility is a late sign of bone loss from periodontitis, occlusal overload (grinding or a bad bite), or trauma.",
      },
      {
        kind: "prose",
        eyebrow: "What Can Be Done",
        heading: "Many loose teeth can be kept.",
        body: "The right treatment depends on the cause. Many loose teeth can be stabilised and kept long-term with a combination of periodontal therapy, bite adjustment and splinting. Some require surgery. A small number cannot be saved, and where that is the case, replacing the tooth with an implant is usually the best long-term option.",
      },
    ],
    ctaTitle: "Have loose teeth assessed.",
  },
  {
    slug: "bad-breath",
    navLabel: "Bad Breath (Halitosis)",
    metaTitle: "Bad Breath (Halitosis): Causes & Treatment | London",
    metaDescription:
      "Persistent bad breath is almost always caused by something in the mouth. A London Specialist Periodontist explains the causes and treatment.",
    preheading: "Conditions",
    heroTitle: "Persistent bad breath, properly diagnosed.",
    summary: "Almost always caused by something in the mouth, most often the bacteria of gum disease.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Usually a sign from the mouth.",
        body: "Persistent bad breath is almost always caused by something in the mouth, most commonly the bacteria associated with gum disease, decay, or coatings on the tongue. Less often, it has a systemic cause.",
      },
      {
        kind: "prose",
        eyebrow: "What Can Be Done",
        heading: "Treat the source.",
        body: "A specialist assessment will identify the source. Treating the underlying cause, usually gum disease, resolves it in the great majority of patients.",
      },
    ],
    ctaTitle: "Find the cause.",
  },
  {
    slug: "peri-implantitis",
    navLabel: "Peri-implantitis",
    metaTitle: "Peri-implantitis: Signs & Treatment | London Specialist",
    metaDescription:
      "Peri-implantitis is gum disease around a dental implant. Learn the signs and how it is treated by a London Specialist Periodontist.",
    preheading: "Conditions",
    heroTitle: "Gum disease around an implant.",
    summary: "Like its cousin around natural teeth, it is usually painless, until it isn't.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "Often silent, until late.",
        body: "Peri-implantitis is gum disease around a dental implant. Like its cousin around natural teeth, it is usually painless, until it isn't.",
      },
      {
        kind: "bullets",
        eyebrow: "Signs",
        heading: "What to look for.",
        items: [
          "Bleeding when the area around an implant is cleaned.",
          "Gum recession around an implant.",
          "A grey shadow where the implant collar is becoming visible.",
          "In late stages, looseness or discomfort.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "What Can Be Done",
        heading: "Caught early, it can be controlled.",
        body: "Caught early, peri-implantitis can be controlled non-surgically. More advanced cases require surgical decontamination and, in some cases, regeneration of the lost bone. Routine monitoring of every implant, annually at a minimum, is the best way to catch it in time.",
      },
    ],
    ctaTitle: "Protect your implant.",
  },
  {
    slug: "missing-teeth",
    navLabel: "Missing Teeth",
    metaTitle: "Missing Teeth: Replacement Options | London Periodontist",
    metaDescription:
      "A missing tooth is more than cosmetic. A London Specialist Periodontist explains implants, bridges and dentures.",
    preheading: "Conditions",
    heroTitle: "A missing tooth is more than cosmetic.",
    summary: "Neighbouring teeth tilt, the opposing tooth over-erupts, and the bone in the gap shrinks.",
    blocks: [
      {
        kind: "prose",
        eyebrow: "What It Is",
        heading: "What happens after a tooth is lost.",
        body: "A missing tooth is more than a cosmetic problem. Over time, neighbouring teeth tilt into the gap, the opposing tooth over-erupts, and the bone in the gap shrinks, making any future replacement harder.",
      },
      {
        kind: "cards",
        eyebrow: "Options",
        heading: "Choosing the right replacement.",
        items: [
          { title: "Dental implants", text: "Usually the best long-term option, where suitable." },
          { title: "Bridges", text: "Fixed restorations supported by adjacent teeth." },
          { title: "Removable partial dentures", text: "Useful in some situations, particularly as a temporary measure." },
        ],
      },
    ],
    ctaTitle: "Explore your options.",
  },
];

export const treatmentsNav = treatments.map((t) => ({
  label: t.navLabel,
  href: `/treatments/${t.slug}`,
}));

export const conditionsNav = conditions.map((c) => ({
  label: c.navLabel,
  href: `/conditions/${c.slug}`,
}));

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
