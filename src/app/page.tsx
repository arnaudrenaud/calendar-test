import React from "react";

import { Button } from "@/components/ui/button";
import {
  getDateOnlyInFrenchLocale,
  getFormattedHour,
  getNextSevenDays,
  getRandomHours,
} from "@/lib/date";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Calendar = () => {
  const days = getNextSevenDays();

  return (
    <main className="flex">
      <Button title="Go to previous week" variant="outline">
        <ArrowBigLeft />
      </Button>
      <ol className="grid grid-cols-7">
        {days.map((day) => {
          const hours = getRandomHours();

          return (
            <li key={day.getTime()} className="text-center pt-2 pl-4 pr-4 pb-4">
              <ol className="flex flex-col gap-2">
                <h4 className="min-h-16">{getDateOnlyInFrenchLocale(day)}</h4>
                {hours.map((hour) => (
                  <Button key={hour} variant="secondary">
                    {getFormattedHour(hour)}
                  </Button>
                ))}
              </ol>
            </li>
          );
        })}
      </ol>
      <Button title="Go to next week" variant="outline">
        <ArrowBigRight />
      </Button>
    </main>
  );
};

export default Calendar;
