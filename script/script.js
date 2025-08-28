// function to get id 
function getId(id) {
    return document.getElementById(id);
}

getId('add-btn').addEventListener('click', function () {
    const inputValue = getId('to-do-value').value
    const listContainer = getId('list-container')
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
        <div class="flex items-center gap-3 overflow-hidden mb-3">
                    <i class="check-btn fa-solid fa-circle-check text-xl text-gray-400"></i>
                    <h1 id="to-do-text">${inputValue}</h1>
                </div>
    `
    listContainer.append(newDiv)

    getId('to-do-value').value = "";
})


