export const getLastSunday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  if (dayOfWeek === 0) {
    // It's sunday. Just return 7 days ago as the ISOString's date section
    now.setDate(now.getDate() - 7);
    return now.toISOString().substring(0, 10);
  } else {
    // Not sunday. Check how many days ago sunday was
    // & do the math to get that date
    now.setDate(now.getDate() - dayOfWeek);
    // Turns last sunday's date into ISOString & returns the date
    return now.toISOString().substring(0, 10);
  }
};
