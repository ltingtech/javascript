
const eventLog = document.querySelector(".event_log");
let httpButton = document.querySelector("#httpquery");
httpButton.addEventListener("click", () => {
    eventLog.textContent = "";
    const httpClient = new XMLHttpRequest();
    httpClient.addEventListener("loadend", () => {
        eventLog.textContent = `${eventLog.textContent}完成，状态码${httpClient.status}\n具体内容为${httpClient.responseText}`;
    });
    httpClient.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");
    httpClient.send();
    eventLog.textContent = `${eventLog.textContent}请求已发起\n`;
});
/*
重置
*/
document.querySelector("#reloadhttp").addEventListener("click", () => {
    eventLog.textContent = "";
    document.location.reload();
})
