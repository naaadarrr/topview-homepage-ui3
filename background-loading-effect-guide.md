# Topview 首页背景开屏加载效果实现指南

> **文档目的**: 为了保证产品内置 Dashboard 与首页 (Homepage) 的视觉一致性,本文档总结了背景图开屏加载的核心动画数值与完整实现方案,可直接复用到其他页面。

---

## 📊 动画核心参数

首页背景图采用了**缓入缓出 (Ease In-Out)** 的渐显效果,通过特定的延迟与时长,营造出一种高级、沉浸式的开屏加载体验。

| 参数 | 数值 | 说明 |
| :--- | :--- | :--- |
| **起始状态 (Initial)** | `opacity: 0` | 初始完全透明 |
| **结束状态 (Animate)** | `opacity: 1` | 最终完全显示 |
| **延迟 (Delay)** | `2s` (2000ms) | 等待内容初步加载后再入场 |
| **时长 (Duration)** | `3s` (3000ms) | 极缓慢的渐显,增加呼吸感 |
| **缓动函数 (Ease)** | `easeInOut` | 平滑的起始与结束 |

---

## 🎨 布局与定位规范

背景图采用**绝对定位 + 居中对齐**的布局方式,确保在不同屏幕尺寸下都能正确显示:

| 属性 | 数值 | 说明 |
| :--- | :--- | :--- |
| **Position** | `absolute` | 绝对定位,脱离文档流 |
| **Top** | `0` | 顶部对齐 |
| **Left** | `50%` | 左侧从中心开始 |
| **Transform** | `translateX(-50%)` | 水平居中 |
| **Width** | `1920px` | 固定宽度(设计稿尺寸) |
| **Height** | `1080px` | 固定高度(设计稿尺寸) |
| **Z-Index** | `0` | 最底层,不遮挡内容 |
| **Pointer Events** | `none` | 不响应鼠标事件 |
| **Object Fit** | `cover` | 图片填充方式 |

---

## 💻 实现方案

### 方案 1: Framer Motion (推荐)

这是首页实际使用的实现方式,适用于 React/Next.js 项目。

#### 完整代码示例

```tsx
"use client";

import { motion } from "framer-motion";

const BackgroundWithAnimation = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景动画层 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 2, 
          duration: 3, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
      >
        <img
          src="/hero/bg-hero.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 你的页面内容 */}
      <div className="relative z-10">
        {/* 内容区域 */}
      </div>
    </div>
  );
};

export default BackgroundWithAnimation;
```

#### 使用 Tailwind CSS 类名

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
>
  <img src="/path/to/bg.png" alt="" className="w-full h-full object-cover" />
</motion.div>
```

#### 使用内联样式

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
  style={{
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1920px',
    height: '1080px',
    zIndex: 0,
    pointerEvents: 'none'
  }}
>
  <img 
    src="/path/to/bg.png" 
    alt="" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</motion.div>
```

---

### 方案 2: CSS 原生实现

适用于不使用 Framer Motion 的项目,纯 CSS 实现相同效果。

#### HTML 结构

```html
<div class="page-container">
  <!-- 背景层 -->
  <div class="bg-hero">
    <img src="/path/to/bg.png" alt="" />
  </div>
  
  <!-- 内容层 -->
  <div class="content">
    <!-- 你的页面内容 -->
  </div>
</div>
```

#### CSS 样式

```css
.page-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-hero {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1920px;
  height: 1080px;
  z-index: 0;
  pointer-events: none;
  
  /* 动画效果 */
  opacity: 0;
  animation: bgFadeIn 3s ease-in-out 2s forwards;
}

.bg-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 10;
}

/* 关键帧动画 */
@keyframes bgFadeIn {
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
}
```

---

### 方案 3: 响应式版本

如果需要在不同屏幕尺寸下自适应,可以使用以下方案:

#### Framer Motion 响应式

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
  className="absolute inset-0 z-0 pointer-events-none"
>
  <img 
    src="/path/to/bg.png" 
    alt="" 
    className="w-full h-full object-cover"
  />
</motion.div>
```

#### CSS 响应式

```css
.bg-hero-responsive {
  position: absolute;
  inset: 0; /* top: 0; right: 0; bottom: 0; left: 0; */
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  animation: bgFadeIn 3s ease-in-out 2s forwards;
}

.bg-hero-responsive img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 🎯 实际应用场景

### 场景 1: Dashboard 主页背景

```tsx
// Dashboard.tsx
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* 背景动画 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
      >
        <img src="/dashboard-bg.png" alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Dashboard 内容 */}
      <div className="relative z-10 p-8">
        <h1>Dashboard Content</h1>
        {/* ... */}
      </div>
    </div>
  );
}
```

### 场景 2: 产品编辑器背景

```tsx
// Editor.tsx
export default function Editor() {
  return (
    <div className="editor-container">
      <div className="bg-hero">
        <img src="/editor-bg.png" alt="" />
      </div>
      
      <div className="editor-content">
        {/* 编辑器界面 */}
      </div>
    </div>
  );
}
```

### 场景 3: 登录页背景

```tsx
// Login.tsx
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* 背景动画 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img src="/login-bg.png" alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* 登录表单 */}
      <div className="relative z-10">
        {/* 登录表单内容 */}
      </div>
    </div>
  );
}
```

---

## ✅ 设计最佳实践

### 1. 视觉一致性
- ✅ 在所有主要页面使用相同的动画参数 (`delay: 2s`, `duration: 3s`)
- ✅ 保持相同的缓动函数 (`easeInOut`)
- ✅ 使用统一的背景图尺寸规范

### 2. 层级管理
- ✅ 背景层 `z-index: 0`(最底层)
- ✅ 内容层 `z-index: 10` 或更高
- ✅ 设置 `pointer-events: none` 防止背景拦截点击

### 3. 性能优化
- ✅ 使用现代图片格式(WebP, AVIF)
- ✅ 提供合适的图片尺寸,避免过大
- ✅ 使用 `object-fit: cover` 确保适配
- ✅ 考虑使用 `loading="lazy"` 延迟加载(非首屏背景)

### 4. 可访问性
- ✅ 为背景图添加空 `alt=""` 属性(装饰性图片)
- ✅ 确保文字内容在背景上有足够对比度
- ✅ 不依赖背景传达关键信息

---

## 📁 源代码参考

该动画效果的实际实现位于:

- **主实现文件**: `src/app/(components)/body/body.tsx`
- **背景图资源**: `public/hero/bg-hero.png`
- **使用的库**: `framer-motion` (React 动画库)

### 首页实际代码片段

```tsx
// src/app/(components)/body/body.tsx
export default function Body() {
  return (
    <Center bg="#000" h="100%">
      <Box w="100%" h="100%" display="flex" flexDirection="column" position="relative" overflow="hidden">
        {/* 背景图动画 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
        >
          <img
            src={imgBgHero}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 页面内容 */}
        <HeroSection />
        <VideoCarousel />
        {/* ... */}
      </Box>
    </Center>
  );
}
```

---

## 🔧 快速复用清单

复用此效果到新页面时,请确保:

- [ ] 安装 `framer-motion` 依赖(如使用方案 1)
  ```bash
  npm install framer-motion
  # 或
  yarn add framer-motion
  ```
- [ ] 准备好背景图资源(推荐 1920x1080)
- [ ] 设置父容器为 `relative` 定位
- [ ] 复制动画参数: `delay: 2, duration: 3, ease: "easeInOut"`
- [ ] 设置正确的层级关系(`z-index: 0` 背景, `z-index: 10` 内容)
- [ ] 添加 `pointer-events: none` 到背景层
- [ ] 测试在不同屏幕尺寸下的显示效果

---

## 🎨 动画参数调整指南

### 调整延迟时间

```tsx
// 立即开始(无延迟)
transition={{ delay: 0, duration: 3, ease: "easeInOut" }}

// 1秒后开始
transition={{ delay: 1, duration: 3, ease: "easeInOut" }}

// 2秒后开始(当前使用)
transition={{ delay: 2, duration: 3, ease: "easeInOut" }}

// 3秒后开始
transition={{ delay: 3, duration: 3, ease: "easeInOut" }}
```

### 调整动画时长

```tsx
// 快速渐显(1.5秒)
transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}

// 中速渐显(2秒)
transition={{ delay: 2, duration: 2, ease: "easeInOut" }}

// 慢速渐显(3秒,当前使用)
transition={{ delay: 2, duration: 3, ease: "easeInOut" }}

// 极慢渐显(5秒)
transition={{ delay: 2, duration: 5, ease: "easeInOut" }}
```

### 调整缓动函数

```tsx
// 线性(匀速)
transition={{ delay: 2, duration: 3, ease: "linear" }}

// 缓入
transition={{ delay: 2, duration: 3, ease: "easeIn" }}

// 缓出
transition={{ delay: 2, duration: 3, ease: "easeOut" }}

// 缓入缓出(当前使用)
transition={{ delay: 2, duration: 3, ease: "easeInOut" }}

// 自定义贝塞尔曲线
transition={{ delay: 2, duration: 3, ease: [0.43, 0.13, 0.23, 0.96] }}
```

---

## 🐛 常见问题排查

### 问题 1: 背景图不显示

**可能原因**:
- 图片路径错误
- 图片文件不存在
- z-index 层级被遮挡

**解决方案**:
```tsx
// 检查图片路径是否正确
// Next.js 中 public 目录下的文件使用 / 开头
<img src="/hero/bg-hero.png" alt="" />

// 检查 z-index
className="... z-0 ..."
```

### 问题 2: 动画不执行

**可能原因**:
- framer-motion 未安装
- 组件未标记为 "use client"

**解决方案**:
```tsx
"use client"; // 在文件顶部添加

import { motion } from "framer-motion";
```

### 问题 3: 背景图遮挡内容

**可能原因**:
- z-index 设置错误
- 内容层未设置 relative 定位

**解决方案**:
```tsx
// 背景层
<motion.div className="... z-0 ...">

// 内容层
<div className="relative z-10">
```

### 问题 4: 背景图拦截点击

**可能原因**:
- 未设置 pointer-events: none

**解决方案**:
```tsx
<motion.div className="... pointer-events-none ...">
```

---

## 📚 相关资源

- [Framer Motion 官方文档](https://www.framer.com/motion/)
- [CSS Animation 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

> [!TIP]
> **推荐做法**: 将背景动画封装成可复用组件,方便在多个页面中使用:
> 
> ```tsx
> // components/BackgroundAnimation.tsx
> import { motion } from "framer-motion";
> 
> interface BackgroundAnimationProps {
>   src: string;
>   delay?: number;
>   duration?: number;
> }
> 
> export default function BackgroundAnimation({ 
>   src, 
>   delay = 2, 
>   duration = 3 
> }: BackgroundAnimationProps) {
>   return (
>     <motion.div
>       initial={{ opacity: 0 }}
>       animate={{ opacity: 1 }}
>       transition={{ delay, duration, ease: "easeInOut" }}
>       className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
>     >
>       <img src={src} alt="" className="w-full h-full object-cover" />
>     </motion.div>
>   );
> }
> ```

> [!IMPORTANT]
> 确保背景图文件已正确放置在 `public` 目录下,并且路径引用正确。Next.js 项目中,`public` 目录下的文件可以通过 `/` 根路径直接访问。

---

**文档版本**: v1.0  
**最后更新**: 2026-01-28  
**维护者**: Topview Team
