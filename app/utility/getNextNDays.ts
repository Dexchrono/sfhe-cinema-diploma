export default function getNextNDays(daysCount: number): Date[] {
  const dates: Date[] = [];

  for (let i = 0; i < daysCount; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i); // Safely increments the day (handles month-ends automatically!)
    dates.push(date);
  }

  return dates;
}
