import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Features />
        <Testimonials />
        <Team />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;