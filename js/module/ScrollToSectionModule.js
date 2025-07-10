export default function ScrollToSectionModule() {
  const speed = 800;
  // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
  const hash = window.location.hash;
  if ($(hash).length) scrollToID(hash, speed);


  // HÀM SCROLL CHO MƯỢT MÀ
  function scrollToID(id, speed) {
    const offSet = document.querySelector(".header").clientHeight;
    const section = $(id).offset();
    const targetOffset = section.top - offSet;
    $("html,body").animate({ scrollTop: targetOffset }, speed);
  }

  const mouse = document.querySelector(".scroll-down");
  const id_sl_pr = document.querySelector(".des-scroll");
  if (id_sl_pr) {
    mouse.addEventListener("click", () => {
      scrollToID(".des-scroll", 0);
    });
  }


  const header = document.querySelector(".header")
  if (header) {
    const menuItems = header.querySelectorAll(".menu-item")

    menuItems.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        const actived = header.querySelector(".menu-item.current-menu-item");
        actived.classList.remove("current-menu-item");
        menuItem.classList.add("current-menu-item");
        const link = menuItem.querySelector(".menu-link");
        const contentLink = link.getAttribute("href");
        scrollToID(contentLink, 800)
      })
    })
  }

  const footer = document.querySelector(".footer")
  if (footer) {
    const menuItems = footer.querySelectorAll(".menu-item")

    menuItems.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        const actived = footer.querySelector(".menu-item.current-menu-item");
        actived.classList.remove("current-menu-item");
        menuItem.classList.add("current-menu-item");
        const link = menuItem.querySelector(".menu-link");
        const contentLink = link.getAttribute("href");
        scrollToID(contentLink, 800)
      })
    })
  }

  const menuMb = document.querySelector(".menu_mb")
  if (menuMb) {
    const menuItems = menuMb.querySelectorAll(".menu-item")

    menuItems.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        const actived = menuMb.querySelector(".menu-item.current-menu-item");
        const link = menuItem.querySelector(".menu-link");
        const contentLink = link.getAttribute("href");
        menuMb.classList.remove("showed");
        document.body.classList.remove("actived");
        actived.classList.remove("current-menu-item");
        menuItem.classList.add("current-menu-item");

        scrollToID(contentLink, 800);
      })
    })
  }


}
