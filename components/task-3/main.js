let listEl = document.querySelectorAll(".item")

listEl.forEach(links => {
    links.addEventListener('click', (e) => {
        e.preventDefault();
        listEl.forEach(tab => {
            tab.classList.remove("text");
        })
    links.classList.add("text")
    })
})
