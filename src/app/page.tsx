import React from "react";

import { Button } from "@/components/ui/button";
import {
  getDateOnlyInFrenchLocale,
  getFormattedHour,
  getNextSevenDays,
  getRandomHours,
} from "@/lib/date";

const Calendar = () => {
  const days = getNextSevenDays();

  return (
    <ol className="grid grid-cols-7">
      {days.map((day) => {
        const hours = getRandomHours();

        return (
          <li key={day.getTime()} className="text-center p-4">
            <ol className="flex flex-col gap-2">
              <h4>{getDateOnlyInFrenchLocale(day)}</h4>
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
  );
};

export default Calendar;
