document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // 这里可以添加代码进行登录验证，比如发送请求到服务器验证用户名和密码是否正确等
      // 目前仅简单提示登录信息
      alert(`正在尝试登录，用户名：${username}，密码：${password}`);
    });
  });