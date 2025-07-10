
export default function HomeJS() {

    const homeSlogan = document.querySelector(".home_slogan")
    if (homeSlogan) {
        const font = homeSlogan.querySelector(".home_slogan--font");
        const fontList = font.querySelector(".home_slogan--font-list");
        const itemFontListHtml = fontList.innerHTML;
        const copies = 20;
        for (let i = 1; i < copies; i++) {
            fontList.insertAdjacentHTML("beforeend", itemFontListHtml);
        }

        const back = homeSlogan.querySelector(".home_slogan--back");
        const backList = back.querySelector(".home_slogan--back-list");
        const itemBackListHtml = backList.innerHTML;
        const copies2 = 20;
        for (let i = 1; i < copies2; i++) {
            backList.insertAdjacentHTML("beforeend", itemBackListHtml);
        }
    }


    const homeService = document.querySelector(".home_service");
    if (homeService) {
        const items = homeService.querySelectorAll(".home_service--item");

        items.forEach((item, index) => {
            item.addEventListener("mousemove", (e) => {
                const rect = item.getBoundingClientRect(); // 👈 Lấy tọa độ & kích thước
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const moveX = (x - rect.width / 2) / (30 + index * 5);
                const moveY = (y - rect.height / 2) / (30 + index * 5);

                item.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            // Reset lại vị trí khi chuột rời đi
            item.addEventListener("mouseleave", () => {
                item.style.transform = "translate(0, 0)";
            });
        });
    }

    const homeFeature = document.querySelector(".home_feature");
    if (homeFeature) {
        let swiper = new Swiper(homeFeature.querySelector(".mySwiperFeature"), {
            slidesPerView: "auto",
            pagination: {
                el: homeFeature.querySelector(".swiper-pagination"),
                clickable: !0,
            },
            centeredSlides: false,
            loop: false,
            navigation: {
                nextEl: homeFeature.querySelector(".next"),
                prevEl: homeFeature.querySelector(".prev"),
            },
            speed: 1000,
            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            },
            breakpoints: {
                800: {
                    loop: true,
                    centeredSlides: true,
                },
                1600: {
                    loop: true,
                    centeredSlides: false,
                },
            },
        });
    }

}


