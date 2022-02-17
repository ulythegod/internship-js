//Промисы, async/await
// showCircle(150, 150, 100, (div: any) => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });
function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    document.body.append(div);
    div.style.borderRadius = radius + "px";
    div.style.top = cx + "px";
    div.style.left = cy + "px";
    div.style.width = "0px";
    div.style.height = "0px";
    div.className = "red-ball";
    setTimeout(() => {
        div.style.width = (radius * 2) + "px";
        div.style.height = (radius * 2) + "px";
    }, 1000);
    setTimeout(() => {
        let textDiv = document.createElement('div');
        textDiv.style.textAlign = "center";
        textDiv.style.marginTop = "90px";
        div.append(textDiv);
        callback(textDiv);
    }, 2000);
}
//Задержка на промисах
function delay(ms) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("done"), ms);
    });
    return promise;
}
//delay(3000).then(() => console.log('выполнилось через 3 секунды'));
//Анимация круга с помощью промиса
showCircle1(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});
function showCircle1(cx, cy, radius) {
    let div = document.createElement('div');
    document.body.append(div);
    div.style.borderRadius = radius + "px";
    div.style.top = cx + "px";
    div.style.left = cy + "px";
    div.style.width = "0px";
    div.style.height = "0px";
    div.className = "red-ball";
    let promise = new Promise(resolve => setTimeout(() => {
        div.style.width = (radius * 2) + "px";
        div.style.height = (radius * 2) + "px";
        let textDiv = document.createElement('div');
        textDiv.style.textAlign = "center";
        textDiv.style.marginTop = "90px";
        div.append(textDiv);
        resolve(textDiv);
    }, 1000));
    return promise;
}
