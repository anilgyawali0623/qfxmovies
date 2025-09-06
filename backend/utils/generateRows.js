const generateRows = (totalRows, seatsPerRows) => {
  const rows = [];
  const starChar = "A".charCodeAt(0);
  for (let i = 0; i < totalRows; i++) {
    const rowLabel = String.fromCharCode(starChar + i);
    const seats = [];
    for (let j = 1; j <= seatsPerRows; j++) {
      seats.push({ number: j, isBooked: false });
    }
    rows.push({ rowLabel, seats });
  }
  return rows;
};

export default generateRows;
