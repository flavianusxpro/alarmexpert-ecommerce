import { useState } from 'react';

const useHomepageLayoutNavbar = () => {
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false);

  const handleOpenModalAuth = (value: boolean) => {
    setOpenModalAuth(value);
  };

  return {
    openModalAuth,
    handleOpenModalAuth,
  };
};

export default useHomepageLayoutNavbar;
