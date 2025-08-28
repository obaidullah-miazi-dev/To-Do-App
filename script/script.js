// function to get id 
function getId(id) {
    return document.getElementById(id);
}


// add button functionality
getId('add-btn').addEventListener('click', function () {
    const inputValue = getId('to-do-value').value
    const listContainer = getId('list-container')
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
        <div class="flex justify-between items-center gap-3 overflow-hidden mb-3 bg-yellow-100 p-3 rounded-lg">
                    <div class="flex gap-3 items-center"><i class="check-btn fa-solid fa-circle-check text-2xl text-gray-400"></i>
                    <h1 id="to-do-text">${inputValue}</h1></div>
                    <div><i class="trash-btn fa-solid fa-trash-can text-gray-500"></i></div>
                </div>
    `
    listContainer.append(newDiv)

    getId('to-do-value').value = "";
})




// check button functionality
getId('list-container').addEventListener('click',function(e){

    if(e.target.className.includes('check-btn')){
        e.target.style.color = '#4ed164'



        const textElement = e.target.nextElementSibling

        textElement.style.color = '#9ca3af';

        textElement.style.textDecoration = 'line-through';
    }

})







