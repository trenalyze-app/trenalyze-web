'use client';
import { useEffect, useRef, useState } from 'react';

interface ComparisonItem {
  keyword: string;
  geo: string;
  time: string;
}

interface EmbedData {
  comparisonItem: ComparisonItem[];
  category: number;
  property: string;
}

interface EmbedOptions {
  exploreQuery: string;
  guestPath: string;
}

declare global {
  interface Window {
    trends: {
      embed: {
        renderExploreWidget: (
          widgetType: string,
          data: EmbedData,
          options: EmbedOptions
        ) => void;
        renderExploreWidgetTo?: (
          container: HTMLElement,
          widgetType: string,
          data: EmbedData,
          options: EmbedOptions
        ) => void;
      };
    };
  }
}

const EmbedWidget = () => {
  const trendsContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ssl.gstatic.com/trends_nrtr/4031_RC01/embed_loader.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setScriptLoaded(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShowWidget = () => {
    const container = trendsContainerRef.current;

    if (
      scriptLoaded &&
      window.trends &&
      window.trends.embed &&
      typeof window.trends.embed.renderExploreWidgetTo === 'function' &&
      container
    ) {
      window.trends.embed.renderExploreWidgetTo(
        container,
        'GEO_MAP',
        {
          comparisonItem: [
            { keyword: 'kopi', geo: 'ID', time: 'today 12-m' },
            { keyword: 'teh', geo: 'ID', time: 'today 12-m' }
          ],
          category: 0,
          property: ''
        },
        {
          exploreQuery: 'geo=ID&q=kopi,teh&hl=id&date=today 12-m,today 12-m',
          guestPath: 'https://trends.google.com:443/trends/embed/'
        }
      );
      setWidgetVisible(true);
    }
  };

  return (
    <div className="bg-red-500 min-h-screen flex flex-col justify-center items-center space-y-8 p-4">
      <h1 className="text-3xl font-bold underline text-black">Hello world!</h1>
      <div
        ref={trendsContainerRef}
        className={`w-full max-w-4xl h-[400px] bg-white transition-all duration-500 ${
          widgetVisible ? 'mt-8' : 'hidden'
        }`}
      />
      <button
        onClick={handleShowWidget}
        className="bg-white text-black font-semibold px-6 py-2 rounded-lg shadow"
        disabled={!scriptLoaded || widgetVisible}
      >
        {widgetVisible ? 'Widget sudah ditampilkan' : 'Tampilkan Widget'}
      </button>
      
    </div>
  );
};

export default EmbedWidget;
