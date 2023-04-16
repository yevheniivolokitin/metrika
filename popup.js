const POPUP_OPENED_CLASSNAME = "order-service-btn";
const BODY_FIXED_CLASSNAME = "body_fixed";

const bodyNode = document.querySelector("body");
const popupNode = document.querySelector(".js-popup_container");
const btnOpenNode = document.querySelector(".js-order-service-btn");
const popupContentNode = document.querySelector(".js-popup__content");
const btnCloseNode = document.querySelector(".js-popup_close-order-service");
const btnPopupCloseNode = document.querySelector(".js-popup_close");

btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);
btnPopupCloseNode.addEventListener("click", togglePopup);

popupNode.addEventListener("click", (event) => {
   const isClickOutsideContent = !event
      .composedPath()
      .includes(popupContentNode);

   if (isClickOutsideContent) {
      togglePopup();
   }
});

function togglePopup() {
   popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
   bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
