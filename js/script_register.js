document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (password!== confirmPassword) {
        alert('两次输入的密码不一致，请重新输入');
        return;
      }
  
      // 这里可以添加代码将注册信息发送到服务器端（比如使用AJAX等技术）
      // 目前仅简单提示注册信息
      alert(`注册成功！用户名：${username}，密码：${password}`);
    });
  });