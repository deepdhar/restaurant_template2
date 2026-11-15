'use client';

import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from './ScrollAnimation';

export default function Footer() {
  return (
    <>
      {/* Pre-Footer: Locations */}
      <section className="bg-dark text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase mb-12">
              LOCATIONS
            </h3>
          </FadeUp>

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Brooklyn */}
            <StaggerItem className="space-y-2">
              <h4 className="text-lg font-bold tracking-wider uppercase text-white mb-2">
                BROOKLYN
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                123 Demo Street New York, NY 12345
              </p>
              <p className="text-white/70 text-sm leading-relaxed">(555) 555-5555</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Monday - Sunday 10am - 10pm
              </p>
            </StaggerItem>

            {/* Queens */}
            <StaggerItem className="space-y-2">
              <h4 className="text-lg font-bold tracking-wider uppercase text-white mb-2">
                QUEENS
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                123 Demo Street New York, NY 12345
              </p>
              <p className="text-white/70 text-sm leading-relaxed">(555) 555-5555</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Monday - Sunday 10am - 10pm
              </p>
            </StaggerItem>

            {/* Food Truck */}
            <StaggerItem className="space-y-2">
              <h4 className="text-lg font-bold tracking-wider uppercase text-white mb-2">
                FOOD TRUCK
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                123 Demo Street New York, NY 12345
              </p>
              <p className="text-white/70 text-sm leading-relaxed">(555) 555-5555</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Monday - Thursday 1pm - 7pm
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-darkest text-white/60 py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://www.yelp.com/biz/squarespace-new-york"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
              aria-label="Yelp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09l-1.35-3.08 2.92 1.69-1.57 1.39zm-3.69-1.28l1.49-3.02 1.48 3.02-2.97 0zm-2.73-3.19l2.92-1.69-1.35 3.08-1.57-1.39zm.9-4.8l2.76 1.94-3.37.5 0-.01.61-2.43zm6.27 1.94l2.76-1.94.61 2.43-3.37-.49zm-1.84-2.88l-1.32 3.1-1.32-3.1 2.64 0z" />
              </svg>
            </a>
            <a
              href="http://instagram.com/squarespace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="http://facebook.com/squarespace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>

          <div className="text-xs tracking-wider uppercase text-white/50">
            Made with Squarespace
          </div>
        </div>
      </footer>
    </>
  );
}
