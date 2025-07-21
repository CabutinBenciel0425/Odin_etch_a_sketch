const mainDiv = document.createElement('div')
const btnAlert = document.getElementById('btnAlert')
const diffColor = document.getElementById('diffColor')
const diffOpacity = document.getElementById('diffOpacity')
const arrColor = ['red', 'blue', 'yellow', 'green', 'orange', 'white', 'grey', 'brown', 'beige', 'black']
const btnReset = document.getElementById('reset')

let drawMode = "default"

document.body.appendChild(mainDiv);
mainDiv.classList.add('mainDiv');

function gridMaker(columns, rows, columnSize, rowSize){
    mainDiv.style.width = rowSize + "px";
    mainDiv.style.height = columnSize + "px";
    mainDiv.innerHTML = "";
    for(let i = 1; i <= columns; i++){
        for(let j = 1; j <= rows; j++){
            const childDiv = document.createElement('div')
            childDiv.dataset.opacity = "0";
            
            childDiv.addEventListener('mouseover', () => {
                if(drawMode === "default"){
                    childDiv.style.backgroundColor = '#696969';
                }
                else if(drawMode === "color"){
                    childDiv.style.backgroundColor = randomColor();
                }
                else{
                    let current = parseFloat(childDiv.dataset.opacity);
                    if (current < 10) {
                        current += 1;
                        childDiv.dataset.opacity = current.toString();
                        const newOpacity = current / 10;
                        childDiv.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                    }
                }
                
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


diffColor.addEventListener('click', () => {
  drawMode = "color";
});

diffOpacity.addEventListener('click', () => {
  drawMode = "opacity";
});


const randomColor = () => {
    const color = arrColor[Math.floor(Math.random() * arrColor.length)]
    return color;
}

btnReset.addEventListener('click', () => {
  mainDiv.innerHTML = "";
  drawMode = "default"
});
