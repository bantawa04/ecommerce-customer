import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const createTypographyComponent = (
  baseClassName: string,
  defaultTag: React.ElementType = 'p'
) => {
  const Component: React.FC<TypographyProps> = ({ 
    children, 
    className, 
    as 
  }) => {
    const Tag = (as || defaultTag) as React.ElementType;
    return (
      <Tag className={cn(baseClassName, className)}>
        {children}
      </Tag>
    );
  };
  Component.displayName = `Typography.${String(defaultTag)}`;
  return Component;
};

export const Typography = {
  DisplayLarge: createTypographyComponent(
    'text-[40px] leading-[44px] sm:text-[48px] sm:leading-[52px] lg:text-[52px] lg:leading-[56px] tracking-[-0.02em]',
    'h1'
  ),
  
  DisplaySmall: createTypographyComponent(
    'text-[36px] leading-[40px] sm:text-[40px] sm:leading-[44px] lg:text-[44px] lg:leading-[48px] tracking-[-0.02em]',
    'h2'
  ),
  
  H1: createTypographyComponent(
    'text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px] tracking-[-0.02em]',
    'h1'
  ),
  
  H2: createTypographyComponent(
    'text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[-0.02em]',
    'h2'
  ),
  
  H3: createTypographyComponent(
    'text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[-0.02em]',
    'h3'
  ),
  
  H4: createTypographyComponent(
    'text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[24px] md:leading-[32px] lg:text-[28px] lg:leading-[36px] tracking-[-0.02em]',
    'h4'
  ),
  
  H5: createTypographyComponent(
    'text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px] tracking-[-0.02em]',
    'h5'
  ),
  
  H6: createTypographyComponent(
    'text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] tracking-[-0.02em]',
    'h6'
  ),
  
  P: createTypographyComponent(
    'text-[16px] leading-[24px] sm:text-[18px] sm:leading-[28px]',
    'p'
  ),
  
  PMedium: createTypographyComponent(
    'text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px]',
    'p'
  ),
  
  PSmall: createTypographyComponent(
    'text-[12px] leading-[18px] sm:text-[14px] sm:leading-[20px]',
    'p'
  ),
  
  PXSmall: createTypographyComponent(
    'text-[11px] leading-[16px] sm:text-[12px] sm:leading-[18px]',
    'p'
  ),
};

export default Typography;