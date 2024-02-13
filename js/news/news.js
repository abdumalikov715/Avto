document.getElementById("applyFilterBtn").addEventListener("click", function () {
    const selectedYear = document.getElementById("filterYear").value;
    const selectedMonth = document.getElementById("filterMonth").value;
    const slider = document.querySelector(".importantSwiper");

    // Добавляем класс для временного отключения слайдера
    slider.classList.add("disabled-slider");

    const items = Array.from(document.getElementsByClassName("swiper-slide"));

    items.forEach(function (item) {
        const year = parseInt(item.getAttribute("data-year"));
        const month = parseInt(item.getAttribute("data-month"));

        if ((selectedYear === "all" || year === parseInt(selectedYear)) &&
            (selectedMonth === "all" || month === parseInt(selectedMonth))) {
            item.classList.add("visible");
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
            item.classList.remove("visible");
        }
    });

    // Удаляем класс для временного отключения слайдера после применения фильтра
    slider.classList.remove("disabled-slider");
});
