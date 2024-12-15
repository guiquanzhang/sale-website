function initCountdown() {
    const productCount = 3; // 假设页面有3个商品展示，可根据实际数量修改
    const countdownElements = [];
    for (let i = 1; i <= productCount; i++) {
        const daysId = `days${i}`;
        const hoursId = `hours${i}`;
        const minutesId = `minutes${i}`;
        const secondsId = `seconds${i}`;

        const daysElement = document.getElementById(daysId);
        const hoursElement = document.getElementById(hoursId);
        const minutesElement = document.getElementById(minutesId);
        const secondsElement = document.getElementById(secondsId);

        countdownElements.push({
            days: daysElement,
            hours: hoursElement,
            minutes: minutesElement,
            seconds: secondsElement
        });
    }

    const endTimes = [];
    for (let i = 0; i < productCount; i++) {
        // 这里可以根据每个商品实际的闪购结束时间来设置不同的时间，示例同样设置为当前时间1小时后，可修改
        const endTime = new Date();
        endTime.setDate(endTime.getDate() + 1);
        endTime.setHours(endTime.getHours() + 1);
        endTimes.push(endTime);
    }

    function updateCountdown() {
        for (let i = 0; i < productCount; i++) {
            const now = new Date();
            const timeDiff = endTimes[i] - now;

            if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                countdownElements[i].days.textContent = days < 10? `0${days}` : days;
                countdownElements[i].hours.textContent = hours < 10? `0${hours}` : hours;
                countdownElements[i].minutes.textContent = minutes < 10? `0${minutes}` : minutes;
                countdownElements[i].seconds.textContent = seconds < 10? `0${seconds}` : seconds;
                console.log('已更新元素内容', countdownElements[i].days.textContent);
            } else {
                // 倒计时结束后的处理，比如隐藏倒计时区域或者显示已结束等提示信息
                countdownElements[i].days.textContent = '00';
                countdownElements[i].hours.textContent = '00';
                countdownElements[i].minutes.textContent = '00';
                countdownElements[i].seconds.textContent = '00';
            }
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

window.onload = initCountdown;