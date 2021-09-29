export const TOGGLE_OPTION = 'OPTONS/TOGGLE_OPTION';

export const toggleOption = (optionId) => {
  return {
    type: TOGGLE_OPTION,
    payload: { optionId },
  };
};
