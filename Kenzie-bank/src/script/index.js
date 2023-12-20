function handleModalUser() {
    const userCard = document.querySelector(".user__container");
    const modalController = document.querySelector("#userModalController");
  
    userCard.addEventListener("click", function () {
      modalController.showModal();
    });
  }
  
  function closeModalUser() {
    const userButtonClose = document.querySelector("#closeUserModal");
    const modalController = document.querySelector("#userModalController");
  
    userButtonClose.addEventListener("click", function () {
      modalController.close();
    });
  }
  
  handleModalUser();
  closeModalUser();
  
  function handleModalServices() {
    const servicesItems = document.querySelectorAll(".item__card");
  
    const modalController = document.querySelector("#servicesModalController");
  
    for (let i = 0; i < servicesItems.length; i++) {
      const currentItem = servicesItems[i];
  
      currentItem.addEventListener("click", function (event) {
        const text = event.currentTarget.children[0].innerText;
  
        modalController.innerHTML = "";
  
        const content = createModalContent(text);
  
        modalController.appendChild(content);
  
        modalController.showModal();
  
        closeModalServices();
      });
    }
  }
  
  function createModalContent(textName) {
    const divContainer = document.createElement("div");
    const title = document.createElement("h1");
    const text = document.createElement("p");
    const closeModalButton = document.createElement("button");
  
    title.innerText = textName;
    text.innerText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore veniam placeat, quis facilis sit rerum nihil eum eveniet minus, culpa vero quas sunt adipisci quidem porro, delectus rem vel illum.";
    closeModalButton.innerText = "X";
  
    divContainer.classList.add("modal__container");
    title.classList.add("services-modal__title");
    closeModalButton.id = "closeServicesModal";
  
    divContainer.append(closeModalButton, title, text);
  
    return divContainer;
  }
  
  function closeModalServices() {
    const servicesButtonClose = document.querySelector("#closeServicesModal");
    const modalController = document.querySelector("#servicesModalController");
  
    servicesButtonClose.addEventListener("click", function () {
      modalController.close();
    });
  }
  
  handleModalServices();
  
  function showMenu() {
    const menuButton = document.querySelector(".menu__button");
    const menuList = document.querySelector(".menu__list");
  
    menuButton.addEventListener("click", function () {
      menuList.classList.toggle("show__menu");
    });
  }
  showMenu();