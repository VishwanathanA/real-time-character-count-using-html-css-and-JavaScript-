function count() {
    const val = document.getElementById("t");
    const n = document.getElementById("c1");
    const m = document.getElementById("c2");

    val.addEventListener("input", function () {
        let count = val.value.length;
        n.innerHTML = count;
        m.innerHTML = (500 - count);
    });
}
document.addEventListener("DOMContentLoaded", count);