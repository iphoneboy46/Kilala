export default function HeaderModule() {

    const header = document.querySelector(".header");
    if (header) {
        // add mui ten
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menuItem) => {
            if (menuItem.classList.contains("dropdown")) {
                let menuLink = menuItem.querySelector(".menu-link");
                let span = document.createElement("span");
                span.classList.add("menu-ic");
                span.innerHTML += `<i class="fas fa-caret-down"></i>`;
                menuLink.appendChild(span);
            }
        });

        //cuon trang
        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    header.classList.add("actived");
                } else {
                    header.classList.remove("actived");
                }
            });
        }

        //mui ten click

        const dropdowns = document.querySelectorAll(".dropdown");
        if (dropdowns) {
            if (window.screen.width < 1200) {
                const menuMB = document.querySelector(".menu_mb");
                dropdowns.forEach((dropdown, index) => {
                    const menuIc = dropdown.querySelector(".menu-ic");
                    const menuList = dropdown.querySelector(".menu-list");
                    if (menuIc) {
                        menuIc.addEventListener("click", (e) => {
                            e.preventDefault();
                            $(menuList).slideToggle(500);
                            menuIc.classList.toggle("actived");
                            totalMenuMB();
                        });
                        window.addEventListener("click", (e) => {
                            if (!e.target.closest(".menu-ic")) {
                                const menuList = dropdown.querySelector(".menu-list");
                                $(menuList).slideUp(500);
                                menuIc.classList.remove("actived");
                                totalMenuMB();
                            }
                        });
                    }
                });
            }
        }

        //menuMb

        const btnMb = header.querySelector(".btn-mobi");
        if (btnMb) {
            console.log("Asdsada");
            btnMb.addEventListener("click", () => {
                btnMb.classList.toggle("actived");
                const menuMB = document.querySelector(".menu_mb");
                menuMB.classList.toggle("showed");
                document.body.classList.toggle("actived");
            });
        }

        // modalMb
        const modalMb = document.querySelector(".menu_mb--modal");
        if (modalMb) {
            modalMb.addEventListener("click", () => {
                const btnMb = header.querySelector(".btn-mobi");
                btnMb.classList.remove("actived");
                const menuMB = document.querySelector(".menu_mb");
                menuMB.classList.remove("showed");
                document.body.classList.remove("actived");
            });
        }

        // ExMb
        const ExMb = document.querySelector(".menu_mb--ex");
        if (ExMb) {
            ExMb.addEventListener("click", () => {
                const btnMb = header.querySelector(".btn-mobi");
                btnMb.classList.remove("actived");
                const menuMB = document.querySelector(".menu_mb");
                menuMB.classList.remove("showed");
                document.body.classList.remove("actived");
            });
        }


        //chieu cao menuMb
        function totalMenuMB() {
            const menuMb = document.querySelector(".menu_mb");
            if (menuMb) {
                const wrap = menuMb.querySelector(".menu_mb--wrap");
                const menuLogo = menuMb.querySelector(".custom-logo-link");
                const menuList = menuMb.querySelector(".menu-list");
                const menuInfo = menuMb.querySelector(".menu_mb--info");
                const menuBtn = menuMb.querySelector(".menu_mb--btn");
                let heightMenuInfo = menuInfo.clientHeight;
                let heightMenuMb = wrap.clientHeight;
                // let heightMenuBtn = menuBtn.clientHeight;

                let heightTotal = heightMenuMb - heightMenuInfo - menuLogo.clientHeight;

                if (menuList) {
                    menuList.style.maxHeight = heightTotal + "px";
                }
            }
        }
        totalMenuMB();

       

        function checkBtnHeader() {
            if (window.screen.width < 600) {
                window.addEventListener("scroll", () => {
                    const headerBtns = header.querySelector(".header_btns");
                    const footer = document.querySelector(".footer"); // Chọn footer
                    const footerPosition = footer.getBoundingClientRect().top; // Lấy vị trí so với viewport
                    const screenHeight = window.innerHeight; // Lấy chiều cao viewport


                    if (footerPosition < screenHeight) {
                        headerBtns.style.display = "none";
                    } else {
                        headerBtns.style.display = "flex";
                    }
                });
            }
        }

        

        checkBtnHeader();

        window.addEventListener("resize", () => {
            totalMenuMB();
            checkBtnHeader();
        });

        
    }

}