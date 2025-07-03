import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transform hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transform hover:scale-105",
        outline:
          "border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg transform hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg transform hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-200",
        luxury: "bg-gradient-gold text-luxury-dark hover:bg-gradient-luxury hover:text-luxury-text shadow-gold hover:shadow-luxury transform hover:scale-105 font-bold tracking-wide",
        premium: "bg-luxury-dark text-luxury-text border border-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark shadow-elegant hover:shadow-gold transform hover:scale-105 transition-all duration-500",
        hero: "bg-gradient-hero text-luxury-text border-2 border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark shadow-luxury hover:shadow-gold transform hover:scale-110 font-bold text-lg tracking-wider backdrop-blur-sm",
        glass: "bg-white/10 text-luxury-text border border-white/20 hover:bg-white/20 backdrop-blur-md shadow-card hover:shadow-elegant transform hover:scale-105"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
