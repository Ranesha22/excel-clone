//initializing grid

// top row
Sentry.init({
    dsn: "https://9c290a5f5c76ce7da39b20da3956ab59@o4507045655805952.ingest.us.sentry.io/4507045670223872",
  });
  
let topRowStr = "";
for (let i = 0; i < 26; i++) {
    topRowStr += `<div class='grid__col grid__col--top'>${String.fromCharCode(
        65 + i
    )}</div>`;
}
grid_topRow.innerHTML = topRowStr;
setTimeout(()=>{
    throw new Error("Sentry test")
},5000)

// left col
let leftColBox = "";
for (let i = 0; i < 100; i++) {
    leftColBox += `<div class='grid__left-col-box'>${i + 1}</div>`;
}
grid_leftCol.innerHTML = leftColBox;

//grid
let gridStr = "";
for (let i = 0; i < 100; i++) {
    gridStr += `<div class='grid__row'>`;
    for (let j = 0; j < 26; j++) {
        gridStr += `<div class='grid__col' rid=${i} cid=${j} contenteditable="true"></div>`;
    }
    gridStr += `</div>`;
}
grid_cellsContainer.innerHTML = gridStr;