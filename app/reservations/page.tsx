'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import {
  FadeUp,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/ScrollAnimation';

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partySize: '2 Guests',
    date: '',
    time: '7:00 PM',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Hero
        title="RESERVATIONS"
        subtitle="We accept a limited number of reservations up to one month in advance for parties of up to ten guests."
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102915442-9ZIBO0EDGY0EPHAYBLA9/Stocksy_txp0f79248d7x2100_Large_821143.jpg"
        minHeight="65vh"
      />

      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-4xl mx-auto px-6">
          {/* Booking Card */}
          <FadeUp>
            <div className="bg-white p-8 sm:p-12 shadow-sm border border-black/10 rounded-sm mb-20">
              <h3 className="text-2xl font-bold tracking-wider uppercase text-center mb-8">
                Book a Table
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-center space-y-2">
                  <h4 className="font-bold text-lg">Reservation Requested!</h4>
                  <p className="text-sm">
                    Thank you, <strong>{formData.name}</strong>. We received
                    your booking request for <strong>{formData.partySize}</strong>{' '}
                    on <strong>{formData.date}</strong> at{' '}
                    <strong>{formData.time}</strong>. We will confirm via{' '}
                    {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider underline text-emerald-900 hover:opacity-80"
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                        Party Size
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) =>
                          setFormData({ ...formData, partySize: e.target.value })
                        }
                        className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                        required
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5-6 Guests">5 - 6 Guests</option>
                        <option value="7-10 Guests">7 - 10 Guests (Large Table)</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                        Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                        required
                      >
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black/70">
                      Special Requests / Dietary Restrictions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know if you have any dietary restrictions or special occasions..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="p-3 border border-neutral-300 bg-neutral-50 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white text-sm font-bold tracking-[0.15em] uppercase hover:bg-neutral-800 transition-all hover:shadow-lg"
                  >
                    Find a Table
                  </button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* 2-Column Info: By Phone & Special Events */}
          <StaggerContainer
            staggerDelay={0.2}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          >
            <StaggerItem>
              <h4 className="text-lg font-bold tracking-wider uppercase mb-2">
                By Phone
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur
                blandit tempus porttitor. Curabitur blandit tempus porttitor.
              </p>
            </StaggerItem>

            <StaggerItem>
              <h4 className="text-lg font-bold tracking-wider uppercase mb-2">
                Special Events &amp; Private Parties
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur
                blandit tempus porttitor. Curabitur blandit.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Full-width Dining Room Image */}
      <section className="bg-lightest pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScaleUp>
            <div className="overflow-hidden aspect-[16/9] max-h-[600px] w-full bg-neutral-200 shadow-md">
              <img
                src="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102915456-IDMKHZBB4NJJZGJQEB5O/image-asset.jpeg"
                alt="Auburn Private Dining Room"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* Private Dining Rooms Details & Callout */}
      <section className="py-20 bg-lightest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StaggerContainer
            staggerDelay={0.2}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <StaggerItem>
              <h4 className="text-xl font-bold tracking-wider uppercase mb-1">
                The Big Room
              </h4>
              <div className="text-xs uppercase font-semibold tracking-wider text-black/50 mb-3">
                Seats up to 60
              </div>
              <p className="text-sm text-black/70 leading-relaxed">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum
                sociis natoque penatibus et magnis dis parturient montes.
              </p>
            </StaggerItem>

            <StaggerItem>
              <h4 className="text-xl font-bold tracking-wider uppercase mb-1">
                The Small Room
              </h4>
              <div className="text-xs uppercase font-semibold tracking-wider text-black/50 mb-3">
                Seats up to 15
              </div>
              <p className="text-sm text-black/70 leading-relaxed">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum
                sociis natoque penatibus et magnis dis parturient montes.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <FadeUp>
            <div className="bg-neutral-200/60 p-10 text-center rounded-sm">
              <h3 className="text-lg sm:text-2xl font-bold tracking-wider uppercase text-black">
                Call (555) 555-5555 to reserve a room for your reception or party.
              </h3>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
