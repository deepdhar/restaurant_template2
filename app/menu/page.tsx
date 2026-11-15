import Hero from '@/components/Hero';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/ScrollAnimation';

const MENU_DATA = [
  {
    category: 'APPETIZERS',
    items: [
      { name: 'Fried Spring Rolls', desc: 'chicken or vegetable' },
      {
        name: 'Tofu Tod',
        desc: 'fried tofu with a mild chili peanut sauce',
      },
      { name: 'Fried Tiger Shrimp Rolls', desc: 'with a plum sauce' },
      {
        name: 'Gai Of Nuur Satay',
        desc: 'skewered chicken or beef with a peanut sauce',
      },
      {
        name: 'Fresh Thai Summer Roll',
        desc: 'with shrimp in a tamarind sauce',
      },
      { name: 'Thai Spare Ribs', desc: 'glazed and grilled pork ribs' },
    ],
  },
  {
    category: 'ENTRÉES',
    items: [
      {
        name: 'Gai Pad Khing',
        desc: 'sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce',
      },
      {
        name: 'Nuur Kra Prow',
        desc: 'sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce',
      },
      {
        name: 'Koong Pad Khing',
        desc: 'sauteed shrimp with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce',
      },
      {
        name: 'Gai Kratiam',
        desc: 'sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce',
      },
      { name: 'Beef and Broccoli', desc: 'sauteed in oyster sauce' },
      {
        name: 'Koong Kratiam',
        desc: 'sauteed shrimp with broccoli, cabbage, carrots and onions in a fresh garlic sauce',
      },
      {
        name: 'Gai Kra Prow',
        desc: 'sauteed sliced chicken with peppers, cabbage, carrots and onions in a chili basil sauce',
      },
      {
        name: 'Gai Or Moo Prik Khing',
        desc: 'sauteed sliced chicken or pork and stringbeans in a red curry paste',
      },
      {
        name: 'Koong Kra Prow',
        desc: 'sauteed shrimp with peppers, cabbage, carrots and onions in a fresh basil sauce',
      },
      { name: 'Chicken and Broccoli', desc: 'sauteed in oyster sauce' },
      {
        name: 'Moo Kratiam',
        desc: 'sauteed sliced pork with broccoli, cabbage, carrots and onions in a fresh garlic sauce',
      },
      {
        name: 'Pla Muk Kratiam',
        desc: 'sauteed squid with broccoli, cabbage, carrots and onions in a fresh garlic sauce',
      },
      {
        name: 'Nuur Kratiam',
        desc: 'sauteed sliced beef with broccoli, cabbage, carrots and onions in a fresh garlic sauce',
      },
      {
        name: 'Moo Kra Prow',
        desc: 'sauteed sliced pork with peppers, cabbage, carrots and onions in a chili basil sauce',
      },
      {
        name: 'Pla Muk Kra Prow',
        desc: 'sauteed squid with peppers, cabbage, carrots and onions in a chili basil sauce',
      },
    ],
  },
  {
    category: 'DESSERT',
    items: [
      {
        name: 'Khao Neow Ma Muang',
        desc: 'sliced mango with sticky rice and coconut milk',
      },
      {
        name: 'Khao Tom Mud',
        desc: 'steamed sticky rice in a banana leaf with baby banana',
      },
      {
        name: 'Fried Banana',
        desc: 'deep-fried banana topped with coconut ice cream',
      },
      {
        name: 'Khao Neow Dam',
        desc: 'black sticky rice with shredded coconut',
      },
      {
        name: 'Nam Kang Sai',
        desc: 'shaved ice with grass jelly and jackfruit',
      },
      { name: 'Gelato', desc: 'seasonal flavor made in-house' },
    ],
  },
];

export default function MenuPage() {
  return (
    <div>
      <Hero
        title="MENU"
        subtitle="This mission is simple: serve delicious, affordable food that guests will want to return to week after week."
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102919116-8DR2NWOU4UOULX40RJ3C/IMG_4508.jpg"
        minHeight="65vh"
      />

      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-4xl mx-auto px-6">
          {MENU_DATA.map((cat, idx) => (
            <div key={cat.category} className="mb-20 last:mb-0">
              <FadeUp>
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-[0.18em] uppercase pb-4 inline-block border-b-2 border-black/80">
                    {cat.category}
                  </h2>
                </div>
              </FadeUp>

              <StaggerContainer
                staggerDelay={0.08}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
              >
                {cat.items.map((item) => (
                  <StaggerItem
                    key={item.name}
                    className="flex flex-col space-y-1 group"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-bold uppercase tracking-wide text-black group-hover:text-black/70 transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-sm italic text-black/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
