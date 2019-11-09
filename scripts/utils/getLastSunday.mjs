export const getLastSunday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  if (dayOfWeek === 0) {
    console.log(now.toISOString().substring(0, 10));
  }
}