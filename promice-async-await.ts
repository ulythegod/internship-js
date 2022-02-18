//Промисы, async/await
// showCircle(150, 150, 100, (div: any) => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });


function showCircle(cx: number, cy: number, radius: number, callback: any): void {    
    let div: any = document.createElement('div');    
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
        let textDiv: any = document.createElement('div');
        textDiv.style.textAlign = "center";
        textDiv.style.marginTop = "90px";
        div.append(textDiv);
        callback(textDiv);
    }, 2000);
}

//Задержка на промисах
function delay(ms: number): any {
    let promise = new Promise(function(resolve, reject) {
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

function showCircle1(cx: number, cy: number, radius: number): any {    
    let div: any = document.createElement('div');    
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

        let textDiv: any = document.createElement('div');
        textDiv.style.textAlign = "center";
        textDiv.style.marginTop = "90px";
        div.append(textDiv);

        resolve(textDiv);
    }, 1000));

    return promise;
}

//Перепишите, используя async/await
async function loadJson(url: string): Promise<number> {
    let result = await fetch(url);
    
    if (result.status == 200) {
        return result.json();
    } else {
        throw new Error("Status: " + result.status);
    }
}

// loadJson('no-such-user.json')
//   .catch(alert);

//Перепишите, используя async/await
class HttpError extends Error {
    response: any;

    constructor(response: any) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson2(url: string): Promise<any> {
    let result: any = await fetch(url);
    
    if (result.status == 200) {
        return result.json();
    } else {
        throw new Error("Status: " + result.status);
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let name: any = prompt("Введите логин?", "iliakan");
    let result: any;

    try {
        result = await loadJson2(`https://api.github.com/users/${name}`);
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }

    console.log(`Полное имя: ${result.name}.`);
}

//demoGithubUser();

//Вызовите async–функцию из "обычной"
async function wait(): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(answer => console.log(answer));
}

//f();
