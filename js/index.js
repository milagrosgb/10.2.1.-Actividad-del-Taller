document.getElementById("buttonText").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    localStorage.setItem("storedData", inputText);
    alert("Datos guardados en localStorage.");
});
