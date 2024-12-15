// 获取页面元素
const cartItems = document.querySelectorAll('.item');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const backBtn = document.getElementById('back-btn');
const homeBtn = document.getElementById('home-btn');

// 计算商品总价和总计价格的函数
function calculateTotal() {
  let subtotal = 0;
  cartItems.forEach(item => {
    const quantity = item.querySelector('.quantity').value;
    const price = parseFloat(item.dataset.price);
    subtotal += quantity * price;
  });
  subtotalElement.textContent = `￥${subtotal.toFixed(2)}`;
  const shipping = parseFloat(document.getElementById('shipping').textContent.slice(1));
  const total = subtotal + shipping;
  totalElement.textContent = `￥${total.toFixed(2)}`;
}

// 初始化时计算一次总价
calculateTotal();

// 为数量输入框添加事件监听器，当数量改变时重新计算总价
cartItems.forEach(item => {
  const quantityInput = item.querySelector('.quantity');
  quantityInput.addEventListener('change', calculateTotal);
});

// 为提交订单按钮添加点击事件监听器，这里可以添加实际的提交逻辑（比如发送数据到服务器等，此处只是简单提示）
checkoutBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  if (name && address && phone) {
    alert(`订单提交成功！姓名：${name}，地址：${address}，电话：${phone}`);
    // 实际应用中可在此处发送数据到后端进行订单处理等操作
  } else {
    alert('请填写完整的收货地址信息');
  }
});

// 返回上一步操作按钮点击事件
backBtn.addEventListener('click', () => {
  history.back();
});

// 回到首页按钮点击事件
homeBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});