import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./style.css";
import { FaUserEdit } from "react-icons/fa";
import CartModal from "../CartModal/CartModal";
import { useEffect, useState } from "react";
import { CartProvider, useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const { currentUser } = useUser();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cart.length)
  }, [cart]);
  
  useEffect(() => {
    if (currentUser) {
      userEmail(currentUser.email);
    }
  }, [currentUser]);

  
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const storedUserData = localStorage.getItem("@userData");
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  const userEmail = parsedUserData ? parsedUserData.email : "";
  return (
    <CartProvider>
    <div className="header">
      <Link to="/" className="links">
        LOGO
      </Link>
      <div>
        
            <Link to="" className="links" onClick={handleModalOpen}>
              <div style={{ position: "absolute" }}>
                <BsCart4 />
                {itemCount}
              </div>
          </Link>
          <label>Olá, {userEmail}</label>

          <Link to="/produto" className="links">
            Produtos
          </Link>
          <Link to="/favorito" className="links">
            Favoritos
          </Link>
          <Link to="/contato" className="links">
            Ir para Contatos
          </Link>
          <Link to="/sobre" className="links">
            Ir para Sobre
          </Link>
          <Link to="/login" className="links">
            Login
          </Link>
          <Link to="/editUser" className="links">
            <FaUserEdit />
          </Link>
          <CartModal open={modalVisible} closeModal={handleModalClose} />
      </div>
    </div>
    </CartProvider>
  );
}
export default Header;