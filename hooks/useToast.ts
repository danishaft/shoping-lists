import { toast } from 'react-toastify';

const useToast = () => {
  const showToast = (message: string, options = {}) => {
    toast(message, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      ...options,
    });
  };

  const showSuccessToast = (message:string, options = {}) => {
    showToast(message, { type: 'success', ...options });
  };

  const showErrorToast = (message: string, options = {}) => {
    showToast(message, { type: 'error', ...options });
  };

  const showInfoToast = (message: string, options = {}) => {
    showToast(message, { type: 'info', ...options });
  };

  return {
    showSuccessToast,
    showErrorToast,
    showInfoToast,
  };
};

export default useToast;