// filepath: /Users/melekmoalla/Desktop/study/study/holbertonschool-web_react/react_hooks/task_5/dashboard/src/hooks/useLogin.jsx
import { useState } from 'react';

const useLogin = (onLogin) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateForm = (data) => {
    const { email, password } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;
    setEnableSubmit(isEmailValid && isPasswordValid);
  };

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setFormData((prevData) => {
      const updatedData = { ...prevData, email: newEmail };
      validateForm(updatedData);
      return updatedData;
    });
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setFormData((prevData) => {
      const updatedData = { ...prevData, password: newPassword };
      validateForm(updatedData);
      return updatedData;
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    onLogin(email, password);
  };

  return {
    formData,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
};

export default useLogin;