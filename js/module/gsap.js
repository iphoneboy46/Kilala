export default function GSAPJS() {
    gsap.registerPlugin(ScrollTrigger);
    const homeAbout = document.querySelector(".home_about")
    if (homeAbout) {
        if (window.screen.width >= 1200) {

            gsap.to(".home_about--tt-1", {
                scrollTrigger: {
                    duration: 2, // Thời gian chuyển động
                    trigger: ".home_about",
                    scrub: 2,
                    markers: false,
                    start: "-50% center",
                    end: "bottom center",
                },

                rotate:180,
                
            })

            gsap.to(".home_about--tt-2", {
                scrollTrigger: {
                    duration: 2, // Thời gian chuyển động
                    trigger: ".home_about",
                    scrub: 2,
                    markers: false,
                    start: "-50% center",
                    end: "bottom center",
                },

                rotate:-180,
                
            })

        }
    }

    const homeSlogan = document.querySelector(".home_slogan")
    if (homeSlogan) {
        const font = homeSlogan.querySelector(".home_slogan--font");
        const back = homeSlogan.querySelector(".home_slogan--back");

        const fontWidth = font.clientWidth;
        const backWidth = back.clientWidth;

        if (window.screen.width >= 1200) {

            gsap.to(".home_slogan--font-list", {
                scrollTrigger: {
                    duration: 1, 
                    trigger: ".home_slogan",
                    scrub: 1,
                    markers: false,
                    start: "-100% center",
                    end: "200% center",
                },

                x: -fontWidth / 2,
                
            })

            gsap.to(".home_slogan--back-list", {
                scrollTrigger: {
                    duration: 1,
                    trigger: ".home_slogan",
                    scrub: 1,
                    markers: false,
                    start: "-100% center",
                    end: "200% center",
                },

                x: backWidth / 2,
                
            })

        }
    }


}