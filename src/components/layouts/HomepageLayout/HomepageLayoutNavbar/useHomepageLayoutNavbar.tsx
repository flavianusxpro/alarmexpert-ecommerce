import { useState } from 'react';

const useHomepageLayoutNavbar = () => {
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false);
  const [openModalShoppingCart, setOpenModalShoppingCart] = useState<boolean>(false)

  const handleOpenModalAuth = (value: boolean) => {
    setOpenModalAuth(value);
  };

  const handleOpenModalShoppingCart = (value: boolean) => {
    setOpenModalShoppingCart(value)
  }

  return {
    openModalAuth,
    handleOpenModalAuth,

    handleOpenModalShoppingCart,
    openModalShoppingCart,
  };
};

export default useHomepageLayoutNavbar;
