export const getLastSunday = () => {
  const lastSunday = new Date() - 28800000
  console.log(lastSunday);
}