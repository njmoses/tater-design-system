import React, { useState } from 'react';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { CarouselArrow } from './CarouselArrow';
import { CarouselIndicator } from './CarouselIndicator';

export interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

export interface CarouselProps {
  items: CarouselItem[];
  theme?: Theme;
}

export function Carousel({ items, theme = 'light' }: CarouselProps) {
  const t = useTokens(theme);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === items.length - 1;

  const handlePrev = () => {
    if (!isFirst) setActiveIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (!isLast) setActiveIndex((i) => i + 1);
  };

  const leftItem = items[activeIndex - 1] ?? null;
  const centerItem = items[activeIndex];
  const rightItem = items[activeIndex + 1] ?? null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Cards row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: `${t.layoutSpacing.md}px`,
        }}
      >
        <CarouselArrow
          direction="left"
          status={isFirst ? 'disabled' : 'default'}
          onClick={handlePrev}
          theme={theme}
        />

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Left card slot — always reserves space using center card as invisible placeholder */}
          <div
            style={{
              transform: 'scale(0.85)',
              opacity: leftItem ? 0.7 : 0,
              visibility: leftItem ? 'visible' : 'hidden',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              pointerEvents: leftItem ? 'auto' : 'none',
            }}
          >
            {leftItem ? leftItem.content : centerItem?.content}
          </div>

          {/* Center card */}
          <div
            style={{
              transform: 'scale(1)',
              opacity: 1,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
          >
            {centerItem?.content}
          </div>

          {/* Right card slot — always reserves space using center card as invisible placeholder */}
          <div
            style={{
              transform: 'scale(0.85)',
              opacity: rightItem ? 0.7 : 0,
              visibility: rightItem ? 'visible' : 'hidden',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              pointerEvents: rightItem ? 'auto' : 'none',
            }}
          >
            {rightItem ? rightItem.content : centerItem?.content}
          </div>
        </div>

        <CarouselArrow
          direction="right"
          status={isLast ? 'disabled' : 'default'}
          onClick={handleNext}
          theme={theme}
        />
      </div>

      {/* Indicators */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${t.layoutSpacing.xsm}px`,
          marginTop: `${t.layoutSpacing.md}px`,
        }}
      >
        {items.map((item, index) => (
          <CarouselIndicator
            key={item.id}
            state={index === activeIndex ? 'active' : 'inactive'}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}
