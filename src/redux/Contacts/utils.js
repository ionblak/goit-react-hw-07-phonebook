export const addConditionalContact = (state, payload) => {
  const includedInContacts = state.find(item => item.name === payload.name);

  if (includedInContacts !== undefined) {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
  return [...state, payload];
};
