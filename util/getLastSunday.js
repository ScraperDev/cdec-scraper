export const getLastSunday = () => {
  //offset in milliseconds
  const tzoffset = (new Date()).getTimezoneOffset() * 60000; 
  const now = new Date();
  const dayOfWeek = now.getDay();
  if (dayOfWeek === 0) {
    // It's sunday. Just return 7 days ago as the ISOString's date section
    now.setDate(now.getDate() - 7);
    // does some tweaking to get ISOString for local time.
    return new Date(now - tzoffset).toISOString().slice(0, 10);
  } else {
    // Not sunday. Check how many days ago sunday was
    // & do the math to get that date
    now.setDate(now.getDate() - dayOfWeek);
    // Turns last sunday's date into ISOString & returns the date
    return new Date(now - tzoffset).toISOString().slice(0, 10);
  }
};
