export function defineInformationUser(name) {
  return {
    type: '@contacts/DEFINE_INFORMATION_USER',
    payload: {
      name,
    },
  };
}
export function requestToPageAddContact() {
  return {
    type: '@contacts/REQUEST_TO_PAGE_ADD_CONTACT',
  };
}
