"use client";

import React, { useActionState } from "react";

import { Button } from "@/components/ui/button";
import {
  getDateOnlyInFrenchLocale,
  getFormattedHour,
  getNextSevenDays,
  getRandomHours,
  isSameDateOrBefore,
} from "@/lib/date";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useAppStore } from "@/store/hooks";
import { setSelectedWeek } from "@/store/store";
import { useDispatch } from "react-redux";

const Calendar = () => {
  const days = getNextSevenDays();

  const store = useAppStore();
  const state = store.getState().calendar;
  const dispatch = useDispatch();

  const goToNextWeek = () => {
    dispatch(setSelectedWeek(state.selectedWeek + 1));
  };

  return (
    <main className="flex w-full">
      <Button
        title="Go to previous week"
        variant="outline"
        disabled={isSameDateOrBefore(days[0], new Date())}
      >
        <ArrowBigLeft />
      </Button>
      <ol className="w-full grid grid-cols-7">
        {days.map((day) => {
          const { dayOfWeek, dateAndMonth } = getDateOnlyInFrenchLocale(day);
          const hours = getRandomHours();

          return (
            <li key={day.getTime()} className="text-center pt-2 pl-4 pr-4 pb-4">
              <ol className="flex flex-col gap-2">
                <h4 className="flex flex-col gap-1 min-h-16">
                  <div>{dayOfWeek}</div>
                  <div className="font-bold">{dateAndMonth}</div>
                </h4>
                {hours.map((hour) => (
                  <Button
                    key={hour}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {getFormattedHour(hour)}
                  </Button>
                ))}
              </ol>
            </li>
          );
        })}
      </ol>
      <Button title="Go to next week" variant="outline" onClick={goToNextWeek}>
        <ArrowBigRight />
      </Button>
    </main>
  );
};

export default Calendar;
