import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "./CartItem";


interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartItem[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storagedCart = localStorage.getItem("@cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find((product) => product.id === productId);

      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (productExists) {
        productExists.amount = amount;
      } else {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        const newProduct = {
          ...product,
          amount: 1,
        };
        
        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      localStorage.setItem("@cart", JSON.stringify(updatedCart));
      alert("Produto Adicionado com Sucesso!");
    } catch {
      alert("Erro ao Adicionar Produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex((product) => product.id === productId);

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@cart", JSON.stringify(updatedCart));

        alert("Produto Removido com Sucesso!");
      } else {
        throw Error();
      }
    } catch {
      alert("Erro na remoção do produto");
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("@cart");
    alert("Carrinho Limpado com Sucesso!");
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
