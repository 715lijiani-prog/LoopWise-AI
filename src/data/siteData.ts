import heroCafeImg from '../assets/images/hero_melbourne_circular_1794816301207.jpg';
import scannerDemoImg from '../assets/images/ai_waste_scanner_demo_1794816301903.jpg';
import zoosVictoriaImg from '../assets/images/case_zoos_victoria_1794816300741.jpg';
import mirvacBuildingImg from '../assets/images/case_mirvac_commercial_1794816300750.jpg';
import communityGardenImg from '../assets/images/community_garden_loop_1794816301178.jpg';

export type PageRoute =
  | 'home'
  | 'solutions'
  | 'learning-hub'
  | 'success-stories'
  | 'contact'
  | 'about';

export const IMAGES = {
  heroCafe: heroCafeImg,
  scannerDemo: scannerDemoImg,
  zoosVictoria: zoosVictoriaImg,
  mirvacBuilding: mirvacBuildingImg,
  communityGarden: communityGardenImg,
};

export interface PageSEO {
  title: string;
  description: string;
  jsonLd: Record<string, unknown>;
}

export const PAGE_SEO: Record<PageRoute, PageSEO> = {
  home: {
    title: 'LoopWise AI | Coffee Ground & Soft Plastic Recycling Melbourne',
    description:
      'LoopWise AI helps Melbourne households, cafés, and Victorian businesses turn coffee grounds and soft plastics into measurable circular economy impact.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'LoopWise AI',
      description:
        'Circular economy social enterprise in Melbourne providing coffee ground recycling, soft plastic recycling, AI waste scanning, and commercial waste audits across Victoria.',
      slogan: 'Scan smarter. Waste less. Loop better.',
      areaServed: {
        '@type': 'State',
        name: 'Victoria, Australia',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '42 Kerr Street',
        addressLocality: 'Fitzroy',
        addressRegion: 'VIC',
        postalCode: '3065',
        addressCountry: 'AU',
      },
      knowsAbout: [
        'Coffee Ground Recycling Melbourne',
        'Soft Plastic Recycling Melbourne',
        'Commercial Waste Audit Victoria',
        'Social Traders Certified Waste Service',
      ],
    },
  },
  solutions: {
    title: 'AI Waste Scanner & ESG Impact Calculator | LoopWise AI Victoria',
    description:
      'Explore LoopWise AI solutions: instant AI Waste Scanner, AI Sustainability Coach, and ESG Impact Calculator for commercial waste audits in Victoria.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'LoopWise AI — Circular Economy Technology',
      description:
        'AI Waste Scanner, AI Sustainability Coach, and ESG Impact Calculator for commercial waste audits in Victoria and sustainable café waste management.',
      areaServed: 'Victoria, Australia',
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'AI Waste Scanner',
            applicationCategory: 'UtilitiesApplication',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Waste Audit Victoria',
          },
        },
      ],
    },
  },
  'learning-hub': {
    title: 'Learning Hub | Circular Economy Social Enterprise Melbourne',
    description:
      'Practical guides on coffee ground recycling in Melbourne, why soft plastic fails kerbside recycling, worm farming ratios, and Victorian ESG reporting.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline:
            "Coffee grounds don't just go into the trash can: 400 cafés in Melbourne are already doing this",
          author: {
            '@type': 'Organization',
            name: 'LoopWise AI',
          },
          datePublished: '2026-09-18',
          description:
            'How 400 Melbourne cafés divert spent coffee grounds from landfill into community gardens and commercial soil regeneration.',
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Why can't soft plastic go into municipal recycling bins in Melbourne?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Flexible soft plastics wrap around optical sorting rollers at Victorian Material Recovery Facilities, causing equipment jams and contaminating clean paper bales.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the ideal coffee ground composting ratio for community gardens?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Treat spent coffee grounds as a nitrogen-rich green material and blend no more than 15–20% coffee grounds by volume with brown carbon mulch, dry leaves, or shredded cardboard.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where can households get free coffee grounds for a garden in Melbourne?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Melbourne residents can check postcode eligibility on our Community Booking page to reserve free 5kg and 10kg spent coffee ground pails from participating local cafés.',
              },
            },
          ],
        },
      ],
    },
  },
  'success-stories': {
    title: 'Success Stories | Zoos Victoria & Mirvac Waste Audits | LoopWise AI',
    description:
      'Verified Victorian case studies: Zoos Victoria coffee ground composting partnership and Mirvac Building 7 commercial waste audit.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'LoopWise AI',
      description:
        'Verified circular economy case studies across Victoria including Zoos Victoria composting and Mirvac Building 7 commercial waste audits.',
      areaServed: 'Victoria, Australia',
    },
  },
  contact: {
    title: 'Book Waste Audit or Free Coffee Grounds Melbourne | LoopWise AI',
    description:
      'Request a B2B commercial waste audit in Victoria, schedule café coffee waste collection, or check postcode eligibility for free coffee grounds in Melbourne.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Coffee Waste Collection & Commercial Waste Audit Victoria',
      provider: {
        '@type': 'LocalBusiness',
        name: 'LoopWise AI',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Fitzroy',
          addressRegion: 'VIC',
          postalCode: '3065',
          addressCountry: 'AU',
        },
      },
      areaServed: {
        '@type': 'State',
        name: 'Victoria',
      },
      offers: {
        '@type': 'Offer',
        description:
          'B2B hospitality coffee waste collection, commercial ESG waste audits, and free community coffee ground pails for Melbourne gardens.',
      },
    },
  },
  about: {
    title: 'About LoopWise AI | Social Traders Certified Waste Service Melbourne',
    description:
      'Meet LoopWise AI, a Social Traders certified circular economy social enterprise in Melbourne connecting cafés, ESG teams, and local gardens.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'LoopWise AI',
      description:
        'Social Traders certified circular economy social enterprise headquartered in Fitzroy, Victoria.',
      award: 'Social Traders Certified Social Enterprise',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '42 Kerr Street',
        addressLocality: 'Fitzroy',
        addressRegion: 'VIC',
        postalCode: '3065',
        addressCountry: 'AU',
      },
    },
  },
};

export interface LearningArticle {
  id: string;
  title: string;
  category: 'Circular Economy' | 'Recycling Guides' | 'Sustainability Tips' | 'ESG Resources';
  readTime: string;
  published: string;
  summary: string;
  body: string[];
  keyTakeaway: string;
}

export const LEARNING_ARTICLES: LearningArticle[] = [
  {
    id: '400-melbourne-cafes-coffee-grounds',
    title: "Coffee grounds don't just go into the trash can: 400 cafés in Melbourne are already doing this",
    category: 'Circular Economy',
    readTime: '5 min read',
    published: 'Oct 2026',
    summary:
      'How inner-Melbourne hospitality venues shifted spent espresso pucks out of landfill bins into clean, traceable soil loops.',
    body: [
      'Across Fitzroy, Collingwood, South Yarra, and the CBD, a busy specialty café generates between 25 kg and 65 kg of wet spent coffee grounds every week. Sent to landfill, those grounds decompose anaerobically and release methane—roughly 28 times more potent than carbon dioxide over a 100-year horizon.',
      'Over 400 Melbourne cafés now separate espresso pucks directly at the knock-box into sealed, returnable LoopWise AI caddies. Using electric cargo trikes and route-optimised EV vans, grounds are collected within 48 hours before mould develops.',
      'Each collection is weighed and logged in the venue portal, giving hospitality operators auditable monthly diversion figures while supplying local urban farms and conservation precincts with clean nitrogen-rich organic matter.',
    ],
    keyTakeaway:
      'Separating grounds at the knock-box adds under 20 seconds per shift while cutting typical café wet-bin weight by 28%.',
  },
  {
    id: 'why-soft-plastic-fails-kerbside-bins',
    title: "Why can't soft plastic go into municipal recycling bins? The truth of 90% entering landfill",
    category: 'Recycling Guides',
    readTime: '6 min read',
    published: 'Oct 2026',
    summary:
      'A clear breakdown of Victorian Material Recovery Facility machinery, film contamination, and verified soft plastic recycling pathways.',
    body: [
      'When scrunchable soft plastics—coffee bean pouches, bread bags, stretch wrap, and snack wrappers—enter yellow-lid municipal kerbside bins, they wrap tightly around high-speed star screens at sorting facilities.',
      'Operators must halt sorting lines multiple times per shift to cut tangled film off rotating shafts. Worse, stray films flatten onto cardboard and paper streams, causing optical scanners to misclassify entire bales that are then rejected to landfill.',
      'LoopWise AI helps cafés, offices, and households identify recyclable mono-material PE/PP films versus multi-layer foil laminates using the AI Waste Scanner, routing clean dry soft plastic into verified Victorian reprocessing streams.',
    ],
    keyTakeaway:
      'Use the scrunch test plus AI label verification: keep soft plastics out of yellow kerbside bins and route clean mono-films to dedicated collection pods.',
  },
  {
    id: 'cafe-to-vegetable-garden-hyperlocal-cycle',
    title: "From café to vegetable garden: how LoopWise AI's hyper-local cycle works",
    category: 'Circular Economy',
    readTime: '4 min read',
    published: 'Sep 2026',
    summary:
      'Tracing a 72-hour urban nutrient loop from morning flat whites on Gertrude Street to raised veggie beds in Brunswick and Carlton.',
    body: [
      'Traditional waste haulage ships organic scraps 60 kilometres out of Melbourne to regional tips. LoopWise AI reverses that haulage footprint with micro-precinct loops averaging under 7.4 km per round trip.',
      'Baristas empty spent pucks into colour-coded caddies. When a hub hits capacity—or a community garden books a free pail online—our routing engine pairs the nearest café drop with local household and garden pickups.',
      'Every kilogram transferred is tracked for both the donor café’s sustainability ledger and the receiving garden’s soil regeneration log, proving that hyper-local circular logistics outcompete long-haul disposal.',
    ],
    keyTakeaway:
      'Short-radius loops preserve soil biology freshness and slash transport emissions by 81% compared to municipal compactor trucks.',
  },
  {
    id: 'community-garden-coffee-ground-composting-ratios',
    title: 'Community garden guide: coffee ground composting ratios and worm farm usage',
    category: 'Sustainability Tips',
    readTime: '5 min read',
    published: 'Sep 2026',
    summary:
      'Exact carbon-to-nitrogen blending ratios, moisture checks, and safe worm farm feeding limits for Melbourne home gardeners.',
    body: [
      'Spent coffee grounds are surprisingly close to neutral pH (6.5–6.8) because brewing washes out most water-soluble acids, making them rich in nitrogen, potassium, and trace magnesium.',
      'However, dumping thick layers of wet grounds straight onto garden soil creates a hydrophobic crust that blocks water and oxygen. Always treat coffee grounds as a "green" input: mix 1 part coffee grounds with 4 parts dry "brown" carbon such as autumn leaves, straw, or shredded unbleached cardboard.',
      'For worm farms, limit coffee grounds to no more than 15% of weekly bedding additions and sprinkle crushed eggshells or agricultural lime monthly to keep bedding aerated and balanced.',
    ],
    keyTakeaway:
      'Follow the 1:4 rule (20% coffee grounds to 80% dry carbon mulch) and cap worm farm feeds at 15% by volume.',
  },
  {
    id: 'victoria-commercial-waste-audit-checklist',
    title: 'Preparing for a Commercial Waste Audit in Victoria: 5 data points ESG teams need',
    category: 'ESG Resources',
    readTime: '7 min read',
    published: 'Aug 2026',
    summary:
      'How property managers and corporate workplaces structure baseline bin audits for NABERS Waste and Victorian EPA compliance.',
    body: [
      'With Victorian commercial landfill levies rising steadily, unmeasured general waste skips hide significant recyclable value—often 40% to 60% recoverable organics and clean soft plastics by weight.',
      'A rigorous commercial waste audit in Victoria captures five baseline fields: stream weight by floor, contamination percentage per bin type, moisture-adjusted organic fraction, vendor collection frequency, and Scope 3 emissions factor.',
      'LoopWise AI replaces one-off clipboard snapshots with continuous AI scan logs and weighbridge-verified certificates ready for annual ESG disclosures.',
    ],
    keyTakeaway:
      'Baseline bin-by-bin contamination data unlocks 25–40% immediate haulage savings before renegotiating waste contracts.',
  },
  {
    id: 'hospitality-soft-plastic-and-caddy-stations',
    title: 'Designing low-contamination sorting stations for high-volume Melbourne cafés',
    category: 'Recycling Guides',
    readTime: '4 min read',
    published: 'Aug 2026',
    summary:
      'Ergonomic back-of-house layouts that stop milk-crate film, coffee chaff, and compostable cups from crossing streams.',
    body: [
      'Hospitality teams work at high speed during the 7:30 am to 10:30 am rush. When waste bins sit further than two steps from the espresso machine or prep bench, contamination spikes.',
      'Position a stainless steel knock-box caddy directly under the grinder station, mount a dry soft-plastic pouch sleeve beside the cool-room door for milk bladders and bean liners, and keep general waste out of arm’s reach behind the bar.',
      'Pairing physical station cues with weekly 60-second AI Waste Scanner spot checks lifts café diversion accuracy above 90% within three weeks.',
    ],
    keyTakeaway:
      'Stream placement beats staff posters: move the coffee caddy closer than the landfill bin.',
  },
];

export interface ScannerPreset {
  id: string;
  item: string;
  material: string;
  stream: string;
  diversionPath: string;
  contaminationRisk: 'Low' | 'Medium' | 'High';
  advice: string;
}

export const SCANNER_PRESETS: ScannerPreset[] = [
  {
    id: 'espresso-grounds',
    item: 'Spent Espresso Grounds',
    material: '100% Organic Coffee Residue (58% Moisture)',
    stream: 'LoopWise Coffee Caddy',
    diversionPath: 'Hyper-local soil blend & Zoos Victoria botanical compost',
    contaminationRisk: 'Low',
    advice:
      'Tap straight from portafilter into sealed caddy. Exclude paper filters unless certified unbleached.',
  },
  {
    id: 'coffee-bean-bag',
    item: 'Soft Plastic Coffee Bean Bag (Valve Foil)',
    material: 'Multi-layer LDPE / Metallised PET Laminate',
    stream: 'Specialist Commercial Soft Plastic Pod',
    diversionPath: 'Victorian chemical & advanced thermal polymer recovery',
    contaminationRisk: 'High',
    advice:
      'Never place in yellow kerbside recycling. Shake out residual beans and fold flat into the dry soft-plastic sleeve.',
  },
  {
    id: 'milk-stretch-wrap',
    item: 'Clear Pallet & Dairy Delivery Wrap',
    material: 'Mono-material LDPE (#4)',
    stream: 'Clean Soft Plastic Recycling Melbourne',
    diversionPath: 'Reprocessed into Victorian civil drainage & timber-alternative planks',
    contaminationRisk: 'Medium',
    advice:
      'Remove paper shipping labels first. Must remain dry and free of dairy residue before collection.',
  },
  {
    id: 'pla-takeaway-cup',
    item: 'PLA-Lined "Compostable" Cup',
    material: 'Paperboard with Bioplastic Lining (AS4736)',
    stream: 'Industrial Composting Only (Not Home Worm Farm)',
    diversionPath: 'Commercial high-temperature Victorian organics facility',
    contaminationRisk: 'High',
    advice:
      'Separate plastic lids before disposal. Do not mix with pure coffee grounds destined for community gardens.',
  },
];

export interface CaseStudy {
  id: string;
  sector: 'Conservation & Community' | 'Hospitality & Precincts';
  organization: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  metrics: {label: string; value: string}[];
  challenge: string;
  solution: string;
  result: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'zoos-victoria',
    sector: 'Conservation & Community',
    organization: 'Zoos Victoria',
    title: 'Zoos Victoria Botanical & Habitat Composting Partnership',
    location: 'Parkville & Werribee, VIC',
    image: zoosVictoriaImg,
    imageAlt:
      'Rich dark compost blended with spent coffee grounds in a Zoos Victoria conservation garden bed surrounded by native ferns',
    metrics: [
      {label: 'Coffee Grounds Diverted', value: '68.4 t/yr'},
      {label: 'Synthetic Fertiliser Cut', value: '-42%'},
      {label: 'Participating Cafés Linked', value: '84 venues'},
    ],
    challenge:
      'Horticulture teams needed consistent, pathogen-free nitrogen-rich organic inputs for native fern gullies and browse plantations without relying on synthetic petroleum fertilisers or long-haul commercial soil deliveries.',
    solution:
      'LoopWise AI established a dedicated coffee waste collection loop linking 84 inner-north Melbourne cafés directly to Zoos Victoria’s on-site composting bays, using AI Waste Scanner intake checks to guarantee <0.5% physical contamination.',
    result:
      'Over 68.4 tonnes of spent coffee grounds were diverted from Melbourne landfill in 12 months, producing high-humus soil improver that cut synthetic fertiliser purchases by 42% and created a verified circular conservation loop.',
  },
  {
    id: 'mirvac-building-7',
    sector: 'Hospitality & Precincts',
    organization: 'Mirvac — Building 7',
    title: 'Mirvac Building 7 Commercial Waste Audit & Tenant Loop',
    location: 'Docklands, Melbourne VIC',
    image: mirvacBuildingImg,
    imageAlt:
      'Sustainable timber and indoor greenery atrium inside Mirvac commercial building in Melbourne Docklands',
    metrics: [
      {label: 'Landfill Diversion Rate', value: '89.6%'},
      {label: 'Soft Plastic Contamination', value: '-76%'},
      {label: 'Annual CO2e Avoided', value: '54.2 t'},
    ],
    challenge:
      'Across 14 commercial office floors and ground-floor lobby cafés, mixed kitchenette bins suffered 38% recycling contamination—driven largely by soft plastic food wrappers and takeaway coffee waste—threatening NABERS Waste targets.',
    solution:
      'LoopWise AI conducted a 30-day commercial waste audit across Docklands Building 7, deploying AI Waste Scanner QR prompts at floor hubs, isolated ground-floor coffee caddies, and automated monthly ESG Impact Calculator reporting for facility managers.',
    result:
      'Within 90 days, total building landfill diversion climbed from 58% to 89.6%, soft plastic contamination in paper streams dropped by 76%, and Mirvac’s ESG team gained audit-ready Scope 3 diversion ledgers.',
  },
  {
    id: 'fitzroy-carlton-collective',
    sector: 'Conservation & Community',
    organization: 'Fitzroy & Carlton Café Collective',
    title: 'Hyper-Local Free Coffee Grounds for Community Gardens',
    location: 'Fitzroy, Carlton & Brunswick VIC',
    image: communityGardenImg,
    imageAlt:
      'Community volunteers harvesting kale and herbs from timber raised beds mulched with Melbourne coffee ground compost',
    metrics: [
      {label: 'Active Local Cafés', value: '112'},
      {label: 'Community Gardens Fed', value: '48'},
      {label: 'Avg. Loop Distance', value: '4.8 km'},
    ],
    challenge:
      'Independent neighbourhood cafés wanted sustainable café waste management without expensive commercial compactor minimums, while nearby urban gardens and home growers struggled to source clean bulk organic matter.',
    solution:
      'Through our Social Traders certified waste service, LoopWise AI paired electric cargo-bike collection from 112 cafés with a self-serve postcode booking portal offering free coffee grounds for gardens in Melbourne.',
    result:
      '48 community gardens and over 1,900 local households now collect free 5 kg and 10 kg coffee-ground compost pails every month within an average 4.8 km radius.',
  },
];

// Active inner-Melbourne & suburban Victorian postcodes for immediate free community collection
export const ACTIVE_MELBOURNE_POSTCODES: Record<string, {suburb: string; hub: string; schedule: string}> = {
  '3000': {suburb: 'Melbourne CBD', hub: 'Queen Victoria Market Micro-Hub', schedule: 'Tue, Thu & Sat (7am–2pm)'},
  '3002': {suburb: 'East Melbourne', hub: 'Fitzroy Gardens Edge Locker', schedule: 'Daily (8am–6pm)'},
  '3003': {suburb: 'West Melbourne', hub: 'Flagstaff Roastery Drop Point', schedule: 'Mon–Fri (7:30am–3pm)'},
  '3004': {suburb: 'St Kilda Road / South Yarra West', hub: 'Fawkner Park Community Shed', schedule: 'Wed & Sat (8am–1pm)'},
  '3006': {suburb: 'Southbank', hub: 'Boyd Community Hub', schedule: 'Tue–Sat (9am–4pm)'},
  '3008': {suburb: 'Docklands', hub: 'Building 7 Civic Pail Rack', schedule: 'Mon–Fri (8am–5pm)'},
  '3051': {suburb: 'North Melbourne', hub: 'Errol Street Roasters', schedule: 'Daily (7am–3pm)'},
  '3052': {suburb: 'Parkville', hub: 'Zoos Victoria Outer Gate Nursery', schedule: 'Sat & Sun (9am–3pm)'},
  '3053': {suburb: 'Carlton', hub: 'Lygon Street Espresso Exchange', schedule: 'Daily (7:30am–4pm)'},
  '3054': {suburb: 'Carlton North / Princes Hill', hub: 'Rathdowne Village Pantry', schedule: 'Tue–Sun (8am–3pm)'},
  '3056': {suburb: 'Brunswick', hub: 'CERES Community Compost Bay', schedule: 'Daily (8am–5pm)'},
  '3057': {suburb: 'Brunswick East', hub: 'Lygon & Albion Café Collective', schedule: 'Mon–Sat (7am–3pm)'},
  '3058': {suburb: 'Coburg', hub: 'Coburg Farmers Market Depot', schedule: 'Sat (8am–1pm) & Wed'},
  '3065': {suburb: 'Fitzroy', hub: 'LoopWise Kerr Street HQ', schedule: 'Mon–Sat (7:30am–5pm)'},
  '3066': {suburb: 'Collingwood', hub: 'Smith Street Roastery Hub', schedule: 'Daily (7am–3pm)'},
  '3067': {suburb: 'Abbotsford', hub: 'Abbotsford Convent Garden Shed', schedule: 'Wed, Fri & Sun (9am–4pm)'},
  '3068': {suburb: 'Fitzroy North / Clifton Hill', hub: 'Edinburgh Gardens Compost Corner', schedule: 'Tue–Sun (8am–4pm)'},
  '3070': {suburb: 'Northcote', hub: 'High Street Growers Co-op', schedule: 'Thu–Sun (8am–3pm)'},
  '3071': {suburb: 'Thornbury', hub: 'Station Street Bulk Pantry', schedule: 'Wed–Sun (9am–4pm)'},
  '3121': {suburb: 'Richmond / Cremorne', hub: 'Burnley Backyard Compost Hub', schedule: 'Tue–Sat (8am–4pm)'},
  '3141': {suburb: 'South Yarra', hub: 'Prahran Market Organic Lane', schedule: 'Tue, Thu–Sun (7am–4pm)'},
  '3181': {suburb: 'Prahran / Windsor', hub: 'Chapel Off Chapel Garden Pail Bay', schedule: 'Wed–Sun (8am–4pm)'},
  '3182': {suburb: 'St Kilda', hub: 'Veg Out Community Gardens', schedule: 'Wed, Sat & Sun (9am–3pm)'},
  '3205': {suburb: 'South Melbourne', hub: 'South Melbourne Market Eco Stall', schedule: 'Wed, Fri–Sun (8am–4pm)'},
  '3206': {suburb: 'Albert Park / Middle Park', hub: 'Gasworks Arts Park Garden', schedule: 'Sat & Sun (8:30am–2pm)'},
  '3207': {suburb: 'Port Melbourne', hub: 'Bay Street Café Collective', schedule: 'Mon–Sat (7am–3pm)'},
};
