const editBtnList = document.getElementsByClassName("edit-btn");

for (editBtn of editBtnList) {
    editBtn.addEventListener("click", (event) => {
        const inputElement = event.target.parentElement.previousElementSibling;
        const inputElement2 = event.target.previousElementSibling;

        inputElement.disabled = false;
        inputElement.focus();

        inputElement2.disabled = false;
        inputElement2.focus();
    });
}