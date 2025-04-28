const Weekdays = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay(); // 0 (Sun) to 6 (Sat)
  
  // Reorder array to start from today
  const reorderedWeekdays = [
    ...weekdays.slice(today),
    ...weekdays.slice(0, today)
  ];

  return (
    <ul>
      {reorderedWeekdays.map((day, i) => (
        <li key={i}>{day}</li>
      ))}
    </ul>
  );
};

export default Weekdays;