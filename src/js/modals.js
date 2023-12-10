// First case - Subscription has been already done 
// Second case - Subscription success

const refs = {
    backdrop: document.querySelector(".js-backdrop"),
    modalFirstCase: document.querySelector(".js-modal-first-case"),
    modalSecondCase: document.querySelector(".js-modal-second-case"),
    closeBtn: document.querySelectorAll(".js-close"),
}

function onClickFirstCase() {
    refs.backdrop.classList.add("visually-hidden");
    refs.modalFirstCase.classList.add("visually-hidden");
    BtnFistCase.removeEventListener("click", onClickFirstCase);
};

function onClickSecondCase() {
    refs.backdrop.classList.add("visually-hidden");
    refs.modalSecondCase.classList.add("visually-hidden");
    BtnSecondCase.removeEventListener("click", onClickSecondCase);
};

function onEscapeFirstCase(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
        refs.backdrop.classList.add("visually-hidden");
        refs.modalFirstCase.classList.add("visually-hidden");
        document.removeEventListener("keydown", onEscape);
    }
};

function onEscapeSecondCase(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
        refs.backdrop.classList.add("visually-hidden");
        refs.modalSecondCase.classList.add("visually-hidden");
        document.removeEventListener("keydown", onEscape);
    }
};

function backdropFirstCase() {
    refs.backdrop.classList.add("visually-hidden");
    refs.modalFirstCase.classList.add("visually-hidden");
    refs.backdrop.removeEventListener("click", backdropFirstCase);
};

function backdropSecondCase() {
    refs.backdrop.classList.add("visually-hidden");
    refs.modalSecondCase.add("visually-hidden");
    refs.backdrop.removeEventListener("click", backdropSecondCase);
};

function showModalFirstCase() {
    refs.backdrop.classList.remove("visually-hidden");
    refs.modalFirstCase.classList.remove("visually-hidden");

    const BtnFistCase = refs.closeBtn[0];
    BtnFistCase.addEventListener("click", onClickFirstCase);
    document.addEventListener("keydown", onEscapeFirstCase);
    refs.backdrop.addEventListener("click", backdropFirstCase);
};

function showModalSecondCase() {
    refs.backdrop.classList.remove("visually-hidden");
    refs.modalSecondCase.classList.remove("visually-hidden");

    const BtnSecondCase = refs.closeBtn[1];
    BtnSecondCase.addEventListener("click", onClickSecondCase);
    document.addEventListener("keydown", onEscapeSecondCase);
    refs.backdrop.addEventListener("click", backdropSecondCase);
}

export {showModalFirstCase, showModalSecondCase}