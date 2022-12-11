export const hotelFieldsValidate = (Hotel: any): any => {
  const requiredFields = [
    "name",
    "type",
    "city",
    "address",
    "distance",
    "title",
    "description",
    "cheapestPrice",
  ];

  if (!Hotel) return "No data provided";

  for (const field of requiredFields) {
    if (!Hotel[field]) return `No hotel ${field} provided`;
  }

  return null;
};
