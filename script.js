const mainDiv = document.createElement('div')
const btnAlert = document.getElementById('btnAlert')
document.body.appendChild(mainDiv);
mainDiv.classList.add('mainDiv');

function gridMaker(columns, rows, columnSize, rowSize){
    mainDiv.style.width = rowSize + "px";
    mainDiv.style.height = columnSize + "px";
    mainDiv.innerHTML = "";
    for(let i = 1; i <= columns; i++){
        for(let j = 1; j <= rows; j++){
            const childDiv = document.createElement('div')
            childDiv.addEventListener('mouseover', () => {
                childDiv.style.backgroundColor = '#696969';
            })
            mainDiv.appendChild(childDiv);
            childDiv.classList.add('childDiv');
        }
    }
}
    

btnAlert.addEventListener('click', () => {
    
    let columns = Number(prompt('Define how many boxes for columns'))
    let rows = Number(prompt('Define how many boxes for rows'))
    let columnSize = columns * 100
    let rowSize = rows * 100
    console.log(columns, rows)
    gridMaker(columns, rows, columnSize, rowSize);
})
