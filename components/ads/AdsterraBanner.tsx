"use client"

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function AdsterraBanner() {
  // 先声明所有hooks
  const [isMobile, setIsMobile] = useState(false);

  // 获取环境变量
  const adSrc = process.env.NEXT_PUBLIC_ADSTERRA_SRC || '';
  const containerId = process.env.NEXT_PUBLIC_ADSTERRA_CONTAINER_ID || '';

  // 是否应该渲染组件
  const shouldRender = Boolean(adSrc && containerId);

  useEffect(() => {
    if (!shouldRender) return;

    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [shouldRender]);

  // 如果不应该渲染组件，直接返回null
  if (!shouldRender) {
    return null;
  }

  return (
    <div className="w-full flex justify-center my-1 px-2">
      <div
        className={`
          ${isMobile ? 'max-w-[350px]' : 'max-w-[728px]'}
          rounded-lg
          shadow-sm
          transition-all duration-300
          w-full
        `}
      >
        {/* 使用官方提供的脚本方式 */}
        <Script
          async
          data-cfasync="false"
          src={adSrc}
          strategy="afterInteractive"
        />

        {/* Adsterra广告容器 */}
        <div
          id={containerId}
          className={`
            w-full
            ${isMobile ? 'max-w-[350px] mx-auto p-2' : 'max-w-[728px]'}
          `}
        />

        {/* 移动端样式控制 - 动态添加样式到容器中的图片 */}
        {isMobile && (
          <style jsx global>{`
            #${containerId} img {
              max-height: 150px !important;
              object-fit: cover !important;
            }
            
            #${containerId} .title {
              font-size: 14px !important;
              line-height: 1.3 !important;
              max-height: 2.6em !important;
              overflow: hidden !important;
            }
          `}</style>
        )}
      </div>
    </div>
  );
} 