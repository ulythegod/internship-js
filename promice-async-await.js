//Промисы, async/await
// showCircle(150, 150, 100, (div: any) => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// showCircle1(150, 150, 100).then(div => {
//     div.classList.add('message-ball');
//     div.append("Hello, world!");
// });
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
//Перепишите, используя async/await
function loadJson(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch(url);
        if (result.status == 200) {
            return result.json();
        }
        else {
            throw new Error("Status: " + result.status);
        }
    });
}
// loadJson('no-such-user.json')
//   .catch(alert);
//Перепишите, используя async/await
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
function loadJson2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch(url);
        if (result.status == 200) {
            return result.json();
        }
        else {
            throw new Error("Status: " + result.status);
        }
    });
}
// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
    return __awaiter(this, void 0, void 0, function* () {
        let name = prompt("Введите логин?", "iliakan");
        let result;
        try {
            result = yield loadJson2(`https://api.github.com/users/${name}`);
        }
        catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            }
            else {
                throw err;
            }
        }
        console.log(`Полное имя: ${result.name}.`);
    });
}
//demoGithubUser();
//Вызовите async–функцию из "обычной"
function wait() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return 10;
    });
}
function f() {
    wait().then(answer => console.log(answer));
}
f();
