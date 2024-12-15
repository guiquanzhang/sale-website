function initGroupBuyingCountdown() {
    const itemIds = ['time-left', 'time-left2', 'time-left3']; // 对应HTML中的ID

    function updateCountdowns() {
        itemIds.forEach((itemId, index) => {
            const timeLeftElement = document.getElementById(itemId);
            if (!timeLeftElement) return;

            // 假设初始时间为HTML中指定的时间（HH:mm:ss）
            let [hours, minutes, seconds] = timeLeftElement.textContent.split(':').map(Number);

            if (hours < 0 || minutes < 0 || seconds < 0) {
                // 如果时间已经结束，则停止倒计时并显示已结束的信息
                timeLeftElement.textContent = '团购已结束';
                return;
            }

            // 每秒递减1秒
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                // 时间结束
                timeLeftElement.textContent = '团购已结束';
                return;
            }

            // 更新DOM元素内容
            timeLeftElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        });
    }

    // 初始化倒计时
    updateCountdowns();
    
    // 每隔一秒更新一次倒计时
    setInterval(updateCountdowns, 1000);
}

// 确保DOM完全加载后再执行初始化函数
document.addEventListener('DOMContentLoaded', initGroupBuyingCountdown);