# Topview 背景图加载动画指南 (Animation Guidelines)

为了保证产品内置 Dashboard 与首页 (Homepage) 的视觉一致性，本文档总结了背景图加载的核心动画数值与实现方案。

## 动画核心数值

首页背景图采用了**缓入缓出 (Easy In-Out)** 的渐显效果，通过特定的延迟与时长，营造出一种高级、沉浸式的加载感。

| 参数 | 数值 | 说明 |
| :--- | :--- | :--- |
| **起始状态 (Initial)** | `opacity: 0` | 初始完全透明 |
| **结束状态 (Animate)** | `opacity: 1` | 最终完全显示 |
| **延迟 (Delay)** | `2s` (2000ms) | 等待内容初步加载后的入场时机 |
| **时长 (Duration)** | `3s` (3000ms) | 极缓慢的渐显，增加呼吸感 |
| **缓动函数 (Ease)** | `easeInOut` | 平滑的起始与结束 |

---

## 实现方案

### 1. Framer Motion (推荐)

如果你在 Dashboard 中使用 `framer-motion`，可以直接复用以下配置：

```tsx
import { motion } from "framer-motion";

const BackgroundAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
      delay: 2, 
      duration: 3, 
      ease: "easeInOut" 
    }}
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
    <img src="/path/to/your-bg.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </motion.div>
);
```

### 2. CSS 原生实现

如果你希望通过原生 CSS 实现，可以使用以下关键帧代码：

```css
.bg-fade-in {
  opacity: 0;
  animation: fadeIn 3s ease-in-out forwards;
  animation-delay: 2s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 设计建议

- **一致性**: 在 Dashboard 的主要承载页（如 Project List 或 Editor 背景）应用相同的 `delay: 2s` 和 `duration: 3s`。
- **层级**: 确保背景图的 `z-index` 为最低，且设置 `pointer-events: none` 以免干扰用户的点击操作。
- **性能**: 建议背景图使用现代格式（如 WebP），配合 `object-fit: cover` 确保在不同分辨率下的适配。

> [!NOTE]
> 该动画效果提炼自首页实现：`src/app/(components)/body/body.tsx`
