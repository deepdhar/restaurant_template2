import Link from 'next/link';
import Hero from '@/components/Hero';
import {
  FadeUp,
  ParallaxBanner,
  StaggerContainer,
  StaggerItem,
  ScaleUp,
} from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <div>
      {/* 1. Hero Banner */}
      <Hero
        title={
          <>
            INSPIRED THAI
            <br />
            CUISINE
          </>
        }
        subtitle="Voted New York’s Best Thai Restaurant"
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925432-S8BT3WWVCOSEW8DM87YE/IMG_4508.jpg"
        minHeight="100vh"
      />

      {/* 2. Editorial: A Destination */}
      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] uppercase mb-8">
              A DESTINATION
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-black/75 leading-relaxed md:leading-loose">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
              Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 3. Break Banner: Eat Together */}
      <ParallaxBanner
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925438-ZGS9DWD73V5KD5PPTE1I/Stocksy_txp0f79248d7x2100_Large_821143.jpg"
        minHeight="65vh"
      >
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.08em] uppercase mb-4 text-white">
            EAT TOGETHER
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Every plate achieves that elusive, cuisine-defining balance of sweet,
            salty, and sour – dessert.
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <div>
            <Link
              href="/reservations"
              className="inline-block px-10 py-3.5 border border-white text-white text-xs sm:text-sm font-medium tracking-[0.12em] rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
            >
              Make a Reservation
            </Link>
          </div>
        </FadeUp>
      </ParallaxBanner>

      {/* 4. 3-Column Features */}
      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StaggerContainer
            staggerDelay={0.18}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Feature 1 */}
            <StaggerItem className="flex flex-col">
              <ScaleUp>
                <div className="overflow-hidden mb-6 aspect-[4/3] bg-neutral-200">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925443-UK27HNRN7E6H00GDKYUB/IMG_4739.jpg"
                    alt="Crafted in the Kitchen"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScaleUp>
              <h4 className="text-lg font-bold tracking-wider uppercase mb-3 text-black">
                CRAFTED IN THE KITCHEN
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Sed posuere consectetur est at lobortis.
                Maecenas faucibus mollis interdum. Nulla vitae elit libero a
                pharetra.
              </p>
            </StaggerItem>

            {/* Feature 2 */}
            <StaggerItem className="flex flex-col">
              <ScaleUp delay={0.1}>
                <div className="overflow-hidden mb-6 aspect-[4/3] bg-neutral-200">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925448-ZPSO7AJ08AX9DW2W9LV5/IMG_4508+%281%29.jpg"
                    alt="Fresh Ingredients"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScaleUp>
              <h4 className="text-lg font-bold tracking-wider uppercase mb-3 text-black">
                FRESH INGREDIENTS
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                sit amet risus. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </StaggerItem>

            {/* Feature 3 */}
            <StaggerItem className="flex flex-col">
              <ScaleUp delay={0.2}>
                <div className="overflow-hidden mb-6 aspect-[4/3] bg-neutral-200">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925454-T4BD03248DFZ6O4VPET5/IMG_5157.jpg"
                    alt="Master Chef"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScaleUp>
              <h4 className="text-lg font-bold tracking-wider uppercase mb-3 text-black">
                MASTER CHEF
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget
                risus varius blandit sit amet non magna. Cras mattis consectetur
                purus sit amet fermentum. Integer posuere erat a ante venenatis
                dapibus posuere velit luctus sem adipiscing elit.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Break Banner: The Kitchen */}
      <ParallaxBanner
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925462-195FJT075U5MKLVWAFE7/Stocksy_txp0f79248d7x2100_Large_543118.jpg"
        minHeight="55vh"
      >
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.15em] uppercase">
            THE KITCHEN
          </h1>
        </FadeUp>
      </ParallaxBanner>

      {/* 6. Chefs Bios & Featured Dish */}
      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeUp>
              <div className="overflow-hidden aspect-[4/3] bg-neutral-200 shadow-md">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102925468-KG4VY9BUB2R71289Y2I5/IMG_4431.jpg"
                  alt="Auburn Culinary Dish"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeUp>

            {/* Bios */}
            <StaggerContainer staggerDelay={0.2} className="space-y-8">
              <StaggerItem>
                <h4 className="text-xl font-bold tracking-wider uppercase mb-1">
                  LIZ GRISAITIS
                </h4>
                <div className="text-xs uppercase font-semibold tracking-wider text-black/50 mb-3">
                  Executive Chef
                </div>
                <p className="text-sm text-black/70 leading-relaxed">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur
                  blandit tempus porttitor. Curabitur blandit tempus porttitor.
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h4 className="text-xl font-bold tracking-wider uppercase mb-1">
                  MATTEO CAPON
                </h4>
                <div className="text-xs uppercase font-semibold tracking-wider text-black/50 mb-3">
                  Chef De Cuisine
                </div>
                <p className="text-sm text-black/70 leading-relaxed">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur
                  blandit tempus porttitor. Curabitur blandit tempus porttitor.
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h4 className="text-xl font-bold tracking-wider uppercase mb-1">
                  ANGIE WALSH
                </h4>
                <div className="text-xs uppercase font-semibold tracking-wider text-black/50 mb-3">
                  Pastry Chef
                </div>
                <p className="text-sm text-black/70 leading-relaxed">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur
                  blandit tempus porttitor. Curabitur blandit tempus porttitor.
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
