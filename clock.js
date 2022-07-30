clockDisplay = document.getElementById("clockDisplay")

function showTime() {
    const d = new Date()
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();


    h = (h < 10)? "0"+h:h;
    m = (m < 10)? "0"+m:m;
    s = (s < 10)? "0"+s:s;


    const t = `${h} : ${m} : ${s}`
    clockDisplay.textContent = t

    setTimeout(showTime, 1000)
}

showTime()