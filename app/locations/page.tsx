import Hero from '@/components/Hero';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/ScrollAnimation';

export default function LocationsPage() {
  return (
    <div>
      <Hero
        title="LOCATIONS"
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102921603-0GUHAO8BZJ0X2CG9QEKF/IMG_3616.jpg"
        minHeight="60vh"
      />

      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Main 3 Locations */}
          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20 border-b border-black/10"
          >
            {/* Brooklyn */}
            <StaggerItem className="space-y-3 p-8 bg-white border border-black/5 hover:border-black/20 hover:shadow-md transition-all rounded-sm">
              <h4 className="text-xl font-bold tracking-wider uppercase mb-2">
                BROOKLYN
              </h4>
              <p className="text-sm text-black/70">
                123 Demo Street New York, NY 12345
              </p>
              <p className="text-sm text-black/70">
                (555) 555-5555
                <br />
                <a
                  href="mailto:email@example.com"
                  className="underline hover:text-black"
                >
                  email@example.com
                </a>
              </p>
              <p className="text-sm font-medium text-black/80 pt-2">
                Monday - Sunday 10am – 10pm
              </p>
            </StaggerItem>

            {/* Queens */}
            <StaggerItem className="space-y-3 p-8 bg-white border border-black/5 hover:border-black/20 hover:shadow-md transition-all rounded-sm">
              <h4 className="text-xl font-bold tracking-wider uppercase mb-2">
                QUEENS
              </h4>
              <p className="text-sm text-black/70">
                123 Demo Street New York, NY 12345
              </p>
              <p className="text-sm text-black/70">
                (555) 555-5555
                <br />
                <a
                  href="mailto:email@example.com"
                  className="underline hover:text-black"
                >
                  email@example.com
                </a>
              </p>
              <p className="text-sm font-medium text-black/80 pt-2">
                Monday - Sunday 10am – 10pm
              </p>
            </StaggerItem>

            {/* Food Truck */}
            <StaggerItem className="space-y-3 p-8 bg-white border border-black/5 hover:border-black/20 hover:shadow-md transition-all rounded-sm">
              <h4 className="text-xl font-bold tracking-wider uppercase mb-2">
                FOOD TRUCK
              </h4>
              <p className="text-sm text-black/70">
                123 Demo Street New York, NY 12345
              </p>
              <p className="text-sm text-black/70">
                (555) 555-5555
                <br />
                <a
                  href="mailto:email@example.com"
                  className="underline hover:text-black"
                >
                  email@example.com
                </a>
              </p>
              <p className="text-sm font-medium text-black/80 pt-2">
                Monday - Thursday 1pm – 7pm
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Media & PR Inquiries */}
          <div className="pt-20">
            <StaggerContainer
              staggerDelay={0.2}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <StaggerItem>
                <h4 className="text-lg font-bold tracking-wider uppercase mb-2">
                  MEDIA INQUIRIES
                </h4>
                <p className="text-sm text-black/70 leading-relaxed">
                  (555) 555-5555
                  <br />
                  <a
                    href="mailto:email@example.com"
                    className="underline hover:text-black"
                  >
                    email@example.com
                  </a>
                </p>
              </StaggerItem>

              <StaggerItem>
                <h4 className="text-lg font-bold tracking-wider uppercase mb-2">
                  PUBLIC RELATIONS
                </h4>
                <p className="text-sm text-black/70 leading-relaxed">
                  (555) 555-5555
                  <br />
                  <a
                    href="mailto:email@example.com"
                    className="underline hover:text-black"
                  >
                    email@example.com
                  </a>
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
