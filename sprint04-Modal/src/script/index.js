function handleModal() {
    const button = document.querySelector("#showMessage");
    const modalContainer = document.querySelector("#modalController");

    button.addEventListener("click", function(){
        modalController.showModal();

        closeModal();
  });

}


function closeModal() {
    const button = document.querySelector("#closeModal");
    const modalContainer = document.querySelector("#modalController");

    button.addEventListener("click", function(){
        modalController.close();
  });
}
handleModal();