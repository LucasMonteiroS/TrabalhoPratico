import { Modal, Button } from 'antd';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';


interface CartModalProps {
    open: boolean;
    closeModal: () => void;
  }

  const CartModal: React.FC<CartModalProps> = ({ open, closeModal }) => {
const { removeProduct, cart, clearCart } = useCart();
useEffect(() => {
    // Essa função será executada sempre que o 'cart' mudar
    console.log('Cart updated:', cart);
  }, [cart]); // Assim, o useEffect observará apenas mudanças no 'cart'
if (!cart) {
        return (
          <Modal
            title="Carrinho de Compras"
            visible={open}
            onCancel={closeModal}
            footer={[
              <Button key="close" onClick={closeModal}>
                Fechar
              </Button>,
            ]}
          >
            <p>O carrinho está vazio.</p>
          </Modal>
        );
      }
      return (
        <Modal
          title="Carrinho de Compras"
          visible={open}
          onCancel={closeModal}
          footer={[
            <Button key="clear" onClick={clearCart}>
              Limpar Carrinho
            </Button>,
            <Button key="close" onClick={closeModal}>
              Fechar
            </Button>,
          ]}
        >
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <Button onClick={() => removeProduct(item.id)}>Remover</Button>
            </div>
          ))}
        </Modal>
      );
    };

export default CartModal;