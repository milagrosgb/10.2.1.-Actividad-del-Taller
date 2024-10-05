document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("storedData");
    document.getElementById("data").textContent = storedData ? storedData : "No hay datos guardados.";
});
