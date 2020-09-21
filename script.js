document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div")
    let button = document.createElement("button");

    button.innerHTML = "Add Square";
    document.body.appendChild(button);
    document.body.appendChild(div);
    div.appendChild(button);
    let idArray = []
    let id = 0;
    button.addEventListener('click', () => {
        id++;
        let divSquare = document.createElement('div')
        divSquare.style.backgroundColor = 'black';
        divSquare.style.height = "100px";
        divSquare.style.width = "100px";
        divSquare.style.margin = "2px";
        divSquare.style.float = "left";
        divSquare.style.color = "white";
        divSquare.style.textAlign = "center";
        divSquare.style.verticalAlign = "middle";
        divSquare.style.lineHeight = "100px";
        divSquare.style.fontSize = "50px";
        divSquare.id = `${id}`;
        idArray.push(id);
        // console.log('This is the ID array after it is pushed', idArray);
        let textNode = document.createTextNode(`${id}`);
        document.body.appendChild(divSquare);
        divSquare.addEventListener("mouseover", () => {
            divSquare.appendChild(textNode);
        });
        divSquare.addEventListener("mouseout", () => {
            divSquare.removeChild(textNode);
        })
        const colorArray = ["red", "orange", "yellow", "blue", "green", "purple"];
        divSquare.addEventListener("click", function () {
            changeBackgroundColor(divSquare);

            function changeBackgroundColor(element) {
                const randomNum = Math.floor((Math.random() * colorArray.length));
                element.style.backgroundColor = colorArray[randomNum];
            };
        });
        if (divSquare.id % 2 == false) {
            divSquare.addEventListener("dblclick", () => {
                let index = idArray.indexOf(Number(divSquare.id));
                if (index > -1) {
                    let squareBefore = document.getElementById(idArray[index - 1]);
                    if (squareBefore) {
                        document.body.removeChild(squareBefore);
                        idArray.splice(index - 1, 1);
                        console.log("after Splice", idArray);
                    } else {
                        alert("Evens can't remove anything from the left");
                    };
                }
            });
        } else {
            divSquare.addEventListener("dblclick", () => {
                let index = idArray.indexOf(Number(divSquare.id));
                if (index > -1) {
                    let squareAfter = document.getElementById(idArray[index + 1]);
                    if (squareAfter) {
                        document.body.removeChild(squareAfter);
                        idArray.splice(index + 1, 1);
                        console.log("after Splice", idArray);
                    } else {
                        alert("Odds can't remove anymore from the right");
                    };
                }
            });
        };
    });
});