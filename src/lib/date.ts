import { format, addDays } from "date-fns";
import { fr } from "date-fns/locale";

export function getFormattedHour(hour: number): string {
  if (hour < 0 || hour > 23) {
    throw new Error("Hour must be between 0 and 23.");
  }

  return `${hour.toString().padStart(2, "0")}:00`;
}

export function getNextSevenDays() {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => addDays(today, i));
}

export function getRandomHours(): number[] {
  const arrayLength = Math.floor(Math.random() * 10) + 1;

  const randomIntegers = Array.from(
    { length: arrayLength },
    () => Math.floor(Math.random() * (20 - 8 + 1)) + 8
  );

  randomIntegers.sort((a, b) => a - b);

  return randomIntegers;
}

export function getDateOnlyInFrenchLocale(day: Date): {
  dayOfWeek: string;
  dateAndMonth: string;
} {
  return {
    dayOfWeek: format(day, "EEEE", { locale: fr }),
    dateAndMonth: format(day, "d MMMM", { locale: fr }),
  };
}
