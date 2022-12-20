import type { ToastContainerProps } from 'react-toastify';
import { cssTransition, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../toastifyStyles.css';

const Toastify = () => {
  const toastifyCfg: ToastContainerProps = {
    theme: 'dark',
    pauseOnHover: true,
    hideProgressBar: true,
    closeOnClick: true,
    autoClose: 3000,
    pauseOnFocusLoss: false,
    position: 'bottom-right',
    limit: 3,
    toastStyle: { borderRadius: '0.6rem', textAlign: 'left', fontSize: '1rem' },
  };

  const slideAnimation = cssTransition({
    enter: 'swirl-in-fwd',
    exit: 'swirl-out-bck',
  });

  return <ToastContainer {...toastifyCfg} transition={slideAnimation} />;
};

export default Toastify;
