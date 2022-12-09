let list = [];
const parent = document.getElementById("parent-div");
const input = document.getElementById("input");
loadItens();

function addItem() {
    const item = input.value;
    if (item) {
        list.push(item);
        localStorage.setItem("itens", list);
        input.value = "";
        renderItem(item);
    }
    input.focus()
}

function loadItens() {
    if (localStorage.getItem("itens")) {
        list = localStorage.getItem("itens").split(",");
        list.forEach((v) => {
            renderItem(v);
        });
    }
}

function clearStorage() {
    localStorage.clear();
    parent.innerHTML = "";
    list = [];
}

function renderItem(item) {
    const style = `style="border: solid 1px; font-weight: bold; background-color: white; width: 175px; overflow: hidden; margin: 0 0 2 -8px" class="ps-2 pe-2"`
    parent.innerHTML += `<div ${style}>${item}</div>`;
}
