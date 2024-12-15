// 获取返回首页按钮
const backToHomeButton = document.querySelector('.back-to-home-btn');
// 获取查看个人信息按钮（可根据实际需求完善对应功能逻辑）
const viewProfileButton = document.querySelector('.view-profile-btn');
// 获取所有移除商品按钮
const removeButtons = document.querySelectorAll('.remove-item-btn');
// 获取数量输入框
const quantityInputs = document.querySelectorAll('.quantity-input');
// 获取总价显示元素
const totalPriceElement = document.getElementById('total-price');
// 获取去结算按钮
const checkoutButton = document.querySelector('.checkout-btn');

// 商品单价数组，这里模拟一些价格，你可以根据实际从后台获取的数据来替换
const itemPrices = [99.00]; 

function updateTotalPrice() {
  let total = 0;
  quantityInputs.forEach((input, index) => {
    const quantity = parseInt(input.value);
    total += itemPrices[index] * quantity;
  });
  totalPriceElement.textContent = total.toFixed(2);
}

removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 模拟移除商品逻辑，这里简单移除对应的DOM元素，实际可结合后端操作
    button.closest('.cart-item').remove();
    updateTotalPrice();
  });
});

quantityInputs.forEach(input => {
  input.addEventListener('change', updateTotalPrice);
});

checkoutButton.addEventListener('click', () => {
  // 这里可以添加跳转到结算页面或者执行其他结算相关逻辑的代码
  window.location.href = 'checkout.html';
});

backToHomeButton.addEventListener('click', () => {
  // 这里可以添加跳转到首页的逻辑，比如修改window.location.href指向首页地址
  window.location.href = 'index.html'; // 假设首页文件名为index.html，需根据实际调整
});

viewProfileButton.addEventListener('click', () => {
  // 修改此处，使其跳转到名为profile.html的页面，需确保该页面存在且路径正确
  window.location.href = 'mysuiyi.html'; 
});

updateTotalPrice();