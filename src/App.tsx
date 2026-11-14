import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import Index from './pages/Index';

const Privacidade = lazy(() => import('./pages/Privacidade'));
const Termos = lazy(() => import('./pages/Termos'));

function ScrollTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollTopOnRoute />
          <Suspense fallback={<div className="min-h-screen bg-areia" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="*" element={<Index />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}
