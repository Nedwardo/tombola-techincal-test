import { Bean } from "./Bean";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "./CartHelpers";
import { useContext, useId, useState } from "react";
import { CartContext } from "./CartContext";
import { NumberField } from "@base-ui-components/react/number-field";
import styles from './index.module.css';

export default function AddToCartComponent(props: { bean: Bean }) {
  const { cart, setCart, setShowCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);
  const id = useId();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <NumberField.Root
      id={id}
      defaultValue={1}
      min={1}
      max={999}
      onValueChange={(val: number | null) => val && setQuantity(val)}
    >
      <NumberField.ScrubArea className={styles.ScrubArea}>
        <NumberField.ScrubAreaCursor className={styles.ScrubAreaCursor}>
          <CursorGrowIcon />
        </NumberField.ScrubAreaCursor>
      </NumberField.ScrubArea>

      <NumberField.Group className={styles.Group}>
        <NumberField.Decrement className={styles.Decrement}>
          <MinusIcon />
        </NumberField.Decrement>
        <NumberField.Input className={styles.Input} />
        <NumberField.Increment className={styles.Increment}>
          <PlusIcon />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
      <Button onClick={() => addToCart(props.bean, cart, setCart, setShowCart, quantity)}>
        Add to cart <AddShoppingCartIcon />
      </Button>
    </div>
  );
}

function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H10" />
    </svg>
  );
}
