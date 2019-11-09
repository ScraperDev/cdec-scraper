export const getLastSunday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  if (dayOfWeek === 0) {
    // It's sunday. Just returns the ISOString's date section
    return now.toISOString().substring(0, 10);
  } else {
    // Not sunday. Check how many days ago sunday was
    // & do the math to get that date
    now.setDate(now.getDate() - dayOfWeek);
    // Turns last sunday's date into ISOString & returns the date
    return now.toISOString().substring(0, 10);
  }
};
