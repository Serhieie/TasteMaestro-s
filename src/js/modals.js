// First case - Subscription has been already done 
// Second case - Subscription success

const refs = {
    backdrop: document.querySelector(".js-backdrop"),
    modalFirstCase: document.querySelector(".js-modal-first-case"),
    modalSecondCase: document.querySelector(".js-modal-second-case"),
    closeBtn: document.querySelectorAll(".js-close"),
}

function onClick() {
    refs.backdrop.classList.add("visually-hidden");
    refs.modalFirstCase.classList.add("visually-hidden");
};

function onEscape(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
        refs.backdrop.classList.add("visually-hidden");
        refs.modalFirstCase.classList.add("visually-hidden");
        document.removeEventListener("keydown", onEscape);
    }
};

function backdropClick () {
    refs.backdrop.classList.add("visually-hidden");
    refs.modalFirstCase.classList.add("visually-hidden");
      document.removeEventListener('keydown', onEscape);
};

console.log(refs.closeBtn)

function showModalFirstCase() {
    refs.backdrop.classList.remove("visually-hidden");
    refs.modalFirstCase.classList.remove("visually-hidden");

    const BtnFistCase = refs.closeBtn[0];
    BtnFistCase.addEventListener("click", onClick);
    document.addEventListener("keydown", onEscape);
    refs.backdrop.addEventListener("click", backdropClick);
};

function showModalSecondCase() {
    refs.backdrop.classList.remove("visually-hidden");
    refs.modalSecondCase.classList.remove("visually-hidden");

    const BtnSecondCase = refs.closeBtn[1];
    BtnSecondCase.addEventListener("click", onClick);
    document.addEventListener("keydown", onEscape);
    refs.backdrop.addEventListener("click", backdropClick);
}



export {showModalFirstCase, showModalSecondCase}



