
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-6 bg-white shadow-xl rounded-xl border border-gray-200 pointer-events-auto relative z-50", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-4",
        caption_label: "text-lg font-bold text-gray-900 tracking-wide",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-9 w-9 bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-dark p-0 hover:from-luxury-gold-light hover:to-luxury-gold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg border-0 font-bold"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1 mt-4",
        head_row: "flex mb-2",
        head_cell: "text-gray-700 rounded-md w-12 h-12 font-bold text-sm flex items-center justify-center bg-gray-50",
        row: "flex w-full mt-1",
        cell: "h-12 w-12 text-center text-sm p-0 relative focus-within:relative focus-within:z-20 rounded-lg",
        day: cn(
          "h-12 w-12 p-0 font-semibold text-gray-900 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-luxury-gold hover:to-luxury-gold-light hover:text-luxury-dark hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-luxury-gold/30"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-dark font-bold shadow-lg scale-105 border-2 border-luxury-gold/50",
        day_today: "bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-md border-2 border-blue-400",
        day_outside: "day-outside text-gray-400 opacity-50 hover:text-gray-600 hover:opacity-75",
        day_disabled: "text-gray-300 opacity-30 cursor-not-allowed",
        day_range_middle: "aria-selected:bg-blue-50 aria-selected:text-gray-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...props }) => {
          const Component = orientation === 'left' ? ChevronLeft : ChevronRight;
          return <Component className="h-5 w-5 text-luxury-dark font-bold" {...props} />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
