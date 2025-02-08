const contactButton = document.querySelector(".header-contact");
const urgentButton = document.querySelector(".home-tag__button");
const contactCloseBtn = document.querySelector(".contacts-popup_close-btn");
const urgentCloseBtn = document.querySelector(".urgent-popup_close-btn");
const urgentPopup = document.querySelector(".urgent-popup");
const contactsPopup = document.querySelector(".contacts-popup");

contactButton.addEventListener("click", function openContactPopup() {
  contactsPopup.classList.add("contacts-popup_change");
});

contactCloseBtn.addEventListener("click", function openContactPopup() {
  contactsPopup.classList.remove("contacts-popup_change");
});

urgentButton.addEventListener("click", function openContactPopup() {
  urgentPopup.classList.add("urgent-popup_change");
});

urgentCloseBtn.addEventListener("click", function openContactPopup() {
  urgentPopup.classList.remove("urgent-popup_change");
});
