//imp! JavaScript Variable Declaration
const submitButton = document.getElementById('submit-btn');
const inputEl = document.getElementById('userInput');
const ulEl = document.querySelector('.list-item-main-div ul');
const liItem = document.getElementsByTagName('li');
const listItemsMainDiv = document.querySelector('.list-item-main-div');
let taskNum = 1;
let liItemLength;

function inputLength(){
    return inputEl.value.length;
}
function createListElement() {
    let newliEl = document.createElement('li');
    let newliElTextSpan = document.createElement('span');
    newliElTextSpan.appendChild(document.createTextNode(`${taskNum++}. ${inputEl.value.charAt(0).toUpperCase() + inputEl.value.slice(1)}`));
    newliEl.appendChild(newliElTextSpan);
    ulEl.appendChild(newliEl);
    liItemLength = liItem.length;
    inputEl.value ='';
    newliEl.addEventListener('click', crossOuttask);
    function crossOuttask(){
        newliEl.classList.toggle('task-done');
    }
    const closeBtn = document.createElement('button');
    closeBtn.appendChild(document.createTextNode('X'));
    newliEl.appendChild(closeBtn);
    closeBtn.addEventListener('click',deleteListItem);
    function deleteListItem(){
        newliEl.remove();
        liItemLength--;
        taskNum--;
        if(liItemLength === 0){
            listItemsMainDiv.style.display = 'none';
        }
        
    }
}

function addListAfterClick(){
    if(inputLength() > 0){
        listItemsMainDiv.style.display ='block';
        createListElement();
    }
    else if (inputLength() === 0){
        document.querySelector('.error-msg-main-div').style.display = 'block';
        setTimeout(()=>{
            document.querySelector('.error-msg-main-div').style.display = 'none';
        },2500)
    }

}
function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        listItemsMainDiv.style.display ='block';
    }
    else if (inputLength() === 0 && event.which === 13){
        document.querySelector('.error-msg-main-div').style.display = 'block';
        setTimeout(()=>{
            document.querySelector('.error-msg-main-div').style.display = 'none';
        },2500)
    }

}
submitButton.addEventListener('click',addListAfterClick);
inputEl.addEventListener('keypress',addListAfterKeypress);