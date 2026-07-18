import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Seminar } from '@/sections/Seminar';
import { Termine } from '@/sections/Termine';
import { Angebote } from '@/sections/Angebote';
import { UeberMich } from '@/sections/UeberMich';
import { Tlc } from '@/sections/Tlc';
import { Blog } from '@/sections/Blog';
import { Footer } from '@/sections/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Seminar />
        <Termine />
        <Angebote />
        <UeberMich />
        <Tlc />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
