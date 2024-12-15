// 获取页面元素
const backBtn = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const statusSelect = document.getElementById('status-select');
const orderList = document.getElementById('order-list');
const filterSearchBtn = document.getElementById('filter-search-btn');

// 模拟的订单数据（实际应用中应从服务器获取）
const orders = [
    {
        id: '123456',
        date: '2024-12-01',
        productName: '联想笔记本电脑',
        productDescription: '配置详情：英特尔酷睿i7处理器，16GB内存，512GB固态硬盘',
        quantity: 1,
        price: 5999,
        status: 'pending'
    },
    {
        id: '789012',
        date: '2024-12-02',
        productName: '华为手机',
        productDescription: '型号：华为P60，8GB内存，256GB存储',
        quantity: 1,
        price: 6999,
        status: 'shipped'
    }
];

// 返回首页按钮点击事件
backBtn.addEventListener('click', () => {
    // 这里可以添加返回首页的逻辑，比如修改 window.location.href 跳转到首页
    window.location.href = 'index.html';
});

