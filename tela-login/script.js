function temaEscuro() {
    remove()
    document.getElementById("bg").classList.add("dark")
}
function temaClaro() {
    remove()
    document.getElementById("bg").classList.add("ligth")
}
function remove() {
    document.getElementById("bg").classList.remove("dark", "ligth")
}