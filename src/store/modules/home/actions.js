export function changePageChildren(history) {
  return {
    type: '@testeNavigation/REQUEST_CHANGE_PAGE',
    payload: {
      history,
    },
  };
}
