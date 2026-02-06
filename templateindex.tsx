'use client';

import { cn } from '@/lib/utils';

interface HomeTemplateCardCTAProps {
  /** CTA 文案 */
  text: string;
  /** 是否显示（桌面端由 hover 控制，移动端常显） */
  isVisible: boolean;
  /** 点击回调 */
  onClick: (e: React.MouseEvent) => void;
  /** 自定义类名 */
  className?: string;
}

/**
 * Home 模版卡片统一 CTA 按钮
 *
 * 样式规范：
 * - 高度：28px
 * - 背景：白色
 * - 文案：黑色
 * - 字号：12px
 * - 圆角：999px (超圆角)
 * - 距离左/右/下：12px
 * - 桌面端：仅 hover 显示
 * - 移动端：常显
 */
const HomeTemplateCardCTA = ({
  text,
  isVisible,
  onClick,
  className
}: HomeTemplateCardCTAProps) => {
  return (
    <>
      {/* 底部渐变遮罩 */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-[64px] z-20 pointer-events-none',
          'bg-gradient-to-t from-black/60 to-transparent',
          'transition-opacity duration-300 ease-out',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div
        className={cn(
          'home-template-cta',
          'absolute bottom-[12px] left-[12px] right-[12px] z-30',
          'transition-opacity duration-300 ease-out',
          // 桌面端根据 isVisible 控制
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
          className
        )}
        data-visible={isVisible}
      >
        <button
          type='button'
          onClick={onClick}
          className={cn(
            'w-full h-[28px] rounded-[999px]',
            'bg-white text-black',
            'text-[12px] font-medium',
            'flex items-center justify-center',
            'cursor-pointer',
            'transition-all duration-200',
            'hover:bg-[#E5E5E5] active:scale-[0.98]'
          )}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default HomeTemplateCardCTA;

/**
 * 用于包裹模版卡片的容器组件
 * 提供统一的 hover 行为：无描边，CTA 在内部出现
 */
export const HomeTemplateCardWrapper = ({
  children,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  className,
  style
}: {
  children: React.ReactNode;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        'relative rounded-[8px] cursor-pointer',
        'group flex flex-col',
        'bg-transparent transition-all duration-300 ease-in-out',
        // hover 时背景变化，但不加描边
        'hover:bg-[#3E3E47]',
        className
      )}
      style={{
        ...style,
        zIndex: isHovered ? 50 : 'auto'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
