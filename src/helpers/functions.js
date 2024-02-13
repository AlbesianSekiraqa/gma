export const findDataBySlug = (object, key, value) => {
  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (prop === key && object[prop] === value) {
        return object;
      } else if (typeof object[prop] === "object") {
        const result = findDataBySlug(object[prop], key, value);
        if (result) {
          return result;
        }
      }
    }
  }
  return null;
};

export function createSlug(inputString) {
  const slug = inputString
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-{2,}/g, "-");

  return slug;
}

export function filterTicketsFromProject(data, type) {
  const tickets = data.tickets.filter((ticket) => ticket.status === type);

  return tickets;
}
