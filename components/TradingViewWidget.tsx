"use client";
import useTradingViewWidget from "@/app/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  title?: string; // Optional prop for the widget
  scriptUrl: string; // Optional prop for the script URL
  config: Record<string, unknown>; // prop for the widget configuration
  height?: number; // Optional prop for the height of the widget
  className?: string; // Optional prop for additional CSS classes
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  const container = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={container}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
        
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
