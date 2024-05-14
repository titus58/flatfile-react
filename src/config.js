
export const sheet = {
  name: "Sheet",
  slug: "sheet",
  fields: [
    {
      key: "buyerName",
      type: "string",
      label: "Buyer Name",
      description: "Name of the buyer (property or business unit) sending the payment",
      constraints: [{
        type: "required",
      }],
    },
    {
      key: "buyerId",
      type: "string",
      description: "A string that uniquely identifies the buyer",
      label: "Buyer Id",
      constraints: [{
        type: "required",
      }],
    },
  ],
};

export const workbook = {
  name: "All Data",
  labels: ["pinned"],
  namespace: "portal",
  sheets: [sheet],
};
