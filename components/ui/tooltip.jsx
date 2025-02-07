"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils"; // Pastikan kamu memiliki helper 'cn'

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(
  (
    { className, side = "top", align = "center", sideOffset = 4, ...props },
    ref
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      side={side}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-gray-800 px-2 py-1 text-sm text-white shadow-md",
        className
      )}
      {...props}
    />
  )
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
