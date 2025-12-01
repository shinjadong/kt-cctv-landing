'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import ReservationForm from '@/app/landing/components/ReservationForm';

function LandingContent() {
  const searchParams = useSearchParams();
  const marketerCode = searchParams.get('code');

  return (
    <>
      {/* Kakao Pixel */}
      <Script
        id="kakao-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            kakaoPixel('4341098074617891089').pageView();
          `,
        }}
      />

      {/* Config Script */}
      <Script src="/config.js" strategy="beforeInteractive" />

      <main>
        <ReservationForm marketerCode={marketerCode || undefined} />
      </main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingContent />
    </Suspense>
  );
}
