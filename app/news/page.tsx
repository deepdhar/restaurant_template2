'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { FadeUp, StaggerContainer, StaggerItem, ScaleUp } from '@/components/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const ARTICLES = [
  {
    id: 'new-desserts',
    date: 'March 21, 2019',
    title: 'NEW DESSERTS',
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908274-I0R5DP9UAWCHCJIQM7CO/IMG_5157+%281%29.jpg',
    excerpt:
      'Nulla non mauris vel orci condimentum vulputate. Aliquam erat volutpat. Aenean feugiat felis dui, id rutrum elit placerat vitae. Aenean lobortis dictum lacus nec scelerisque. Vivamus gravida magna enim, vel varius metus fermentum.',
    body:
      'Suspendisse potenti. Vestibulum cursus, leo at auctor mollis, dui ante porttitor orci, vel venenatis tellus magna nec nulla. Cras dolor dolor, facilisis viverra orci pellentesque, suscipit luctus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus lacinia mauris porta dapibus. Integer condimentum massa eget leo ornare accumsan et id ex. Nulla fringilla lectus et justo lobortis, sit amet sagittis magna bibendum. Suspendisse elementum, ante sed pellentesque malesuada, augue nulla ultrices orci, quis dictum dui nulla a tortor. In nec dignissim sapien. Sed convallis convallis pretium.',
  },
  {
    id: 'dish-of-the-month',
    date: 'February 19, 2019',
    title: 'DISH OF THE MONTH',
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908309-VJM95AP4LYT7K5VL4WVD/IMG_4431+%281%29.jpg',
    excerpt:
      'Morbi vitae nisl nec velit gravida fringilla. Mauris a ex sit amet est aliquam auctor ac non turpis. Nam suscipit, enim sit amet varius auctor, nisi dolor malesuada lectus, eget dictum velit magna eget erat. Donec nunc odio, consectetur ut ante at, rutrum condimentum velit.',
    body:
      'Integer viverra odio augue, nec pharetra est finibus a. Ut ullamcorper faucibus quam, vel hendrerit mauris scelerisque eu. Phasellus quis viverra massa. Phasellus et sapien massa. Curabitur sit amet augue neque. Aliquam rutrum varius malesuada. Pellentesque in diam accumsan, vulputate urna nec, rutrum lorem. Suspendisse id dui rutrum, egestas quam sed, consequat magna. Quisque ultricies gravida turpis. Aliquam consectetur at est sollicitudin lobortis. Pellentesque ut fringilla tortor. Proin tempus mi enim, in mattis metus sodales a. In sit amet ante eu arcu rhoncus tincidunt id eget urna. Duis ullamcorper porttitor turpis eget euismod. Morbi a metus finibus, dictum dolor vel, ultricies tortor. Praesent feugiat ante ex, eget venenatis felis porttitor et. Sed convallis quam eu vulputate fermentum. Etiam ut felis a est tempus tempus. Cras semper eros justo, eu venenatis odio bibendum tincidunt. Fusce porttitor finibus rutrum. Vivamus luctus nisl quis lectus tincidunt porta. Sed eget placerat ante. Vivamus sed elit turpis. Fusce odio odio, tincidunt at dui vitae, volutpat accumsan diam. Maecenas auctor ornare lacus eu blandit. Quisque malesuada justo risus, et consequat ante consectetur quis. Integer interdum hendrerit sem, vitae vehicula lacus feugiat eget. Praesent sit amet pretium sem, vel eleifend lacus.',
  },
  {
    id: 'meet-the-chefs',
    date: 'January 19, 2019',
    title: 'MEET THE CHEFS',
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908282-N5QPCFZAM9X7FRGWMDXX/Stocksy_txp0f79248d7x2100_Large_543118.jpg',
    excerpt:
      'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    body:
      'Etiam pellentesque ac tellus sit amet mattis. Proin lobortis diam nec imperdiet vestibulum. Vivamus mauris lectus, interdum non purus ac, dictum condimentum orci. Cras magna nunc, malesuada eu sodales eget, tristique id neque. Donec ornare faucibus ultricies. Ut nibh magna, sollicitudin ut nunc vel, feugiat interdum sapien. Nam non lobortis augue, id varius leo. Nulla sagittis viverra dignissim. Maecenas tristique, elit id vestibulum pretium, lorem ex elementum diam, at ultricies metus quam vitae augue. Integer augue eros, semper vel suscipit ut, dapibus et erat. Cras luctus non neque semper tincidunt. Maecenas ac dapibus ligula, et tincidunt sapien. Sed sagittis vitae risus vel dictum. Curabitur a blandit arcu. Phasellus lorem ligula, luctus et maximus ut, interdum in risus. Ut aliquet nulla vitae odio pharetra, a scelerisque mauris vulputate.',
  },
  {
    id: 'why-we-buy-local',
    date: 'November 8, 2018',
    title: 'WHY WE BUY LOCAL',
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908296-7U3UBTDP09X36NOPIQKS/IMG_4607_sm.jpg',
    excerpt:
      'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.',
    body:
      'Praesent vel mauris id libero placerat congue. Nullam vestibulum risus et neque ultrices fermentum. Aliquam erat volutpat. Pellentesque malesuada vulputate ullamcorper. Nam sapien augue, lacinia ut est quis, malesuada accumsan lorem. Morbi id fermentum tellus. Suspendisse et rutrum turpis, eu viverra libero. Suspendisse potenti. Sed eu lobortis justo, ut pellentesque nisl. Integer rutrum aliquet pellentesque. Phasellus et fringilla ligula. Suspendisse leo metus, placerat quis lorem in, sagittis maximus urna. Proin mollis metus sed diam pulvinar blandit. Fusce quis enim ex. Aenean varius tortor tortor, varius lobortis enim egestas id. Nullam et massa eget mauris aliquam euismod. Etiam auctor ac leo nec consectetur. Quisque magna dolor, placerat sit amet maximus non, imperdiet nec mi. Duis id eleifend tellus. Duis nec laoreet ligula, a vestibulum lorem. Donec scelerisque ac tellus eu blandit. Proin ligula mauris, tincidunt gravida lectus non, viverra dictum nunc. Maecenas nunc elit, malesuada a eleifend pharetra, aliquet id diam. Vivamus commodo porttitor tortor sed molestie. Proin at leo sit amet dolor vulputate lacinia. Suspendisse porttitor viverra purus, nec interdum justo eleifend eu. Duis hendrerit justo at ornare rhoncus. Curabitur eleifend magna in odio congue maximus.',
  },
];

export default function NewsPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Hero
        title="NEWS"
        bgImage="https://images.squarespace-cdn.com/content/v1/624b503b3a6154640a1517ce/1649102908354-8Q5O3R9H0D79W6YB1E4J/unspecified-17.jpg"
        minHeight="60vh"
      />

      <section className="py-24 md:py-32 bg-lightest">
        <div className="max-w-4xl mx-auto px-6 space-y-24">
          {ARTICLES.map((art) => {
            const isExp = !!expanded[art.id];
            return (
              <FadeUp key={art.id}>
                <article className="border-b border-black/10 pb-20 last:border-0">
                  <ScaleUp>
                    <div className="overflow-hidden aspect-[16/9] mb-8 bg-neutral-200">
                      <img
                        src={art.img}
                        alt={art.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </ScaleUp>

                  <div className="text-xs font-semibold tracking-[0.15em] uppercase text-black/50 mb-3">
                    {art.date}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-wider uppercase mb-4 text-black">
                    {art.title}
                  </h2>

                  <p className="text-base text-black/75 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>

                  <button
                    onClick={() => toggleExpand(art.id)}
                    className="text-xs font-bold uppercase tracking-[0.15em] pb-1 border-b-2 border-black hover:border-black/50 transition-colors"
                  >
                    {isExp ? 'Read Less' : 'Read More'}
                  </button>

                  <AnimatePresence>
                    {isExp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-black/10 text-sm text-black/70 leading-relaxed space-y-4">
                          <p>{art.body}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </section>
    </div>
  );
}
