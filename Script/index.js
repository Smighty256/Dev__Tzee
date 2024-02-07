window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        let header = document.querySelector("header")
        header.classList.add("fixed-header")
    } else {
        let header = document.querySelector("header")
        header.classList.remove("fixed-header")
    }
})