import { Offcanvas, Stack } from "react-bootstrap";
import useShoppingCart from "../context/useShoppingCart";
import CartItem from "./cartItem";
import formatCurrency from "../utilities/formatCurrency";
import storeItem from "../data/items.json";

type shoppingCartProps = {
  isOpen: boolean;
};

const shoppingCart = ({ isOpen }: shoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header className={"border"} closeButton>
        <Offcanvas.Title>CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total :{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItem.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default shoppingCart;
