"use client";
import { Button } from "@/components/ui/button";
import { BaggageClaim } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../GlobalRedux/Features/Cart/cartSlice";
import { addProduct } from "../actions/addproducts";
type Props = {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  name: string;
};
export default function AddToCart(props: Props) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    console.log(props.product);
    dispatch(addToCart(props.product));
    addProduct(props.product);
  }
  return (
    <>
      <Button
        variant="secondary"
        onClick={(event) => {
          event.preventDefault();
          handleAddToCart();
        }}
        className="bg-pink-800 text-white hover:bg-pink-700 flex gap-2"
      >
        <BaggageClaim />
        <span>{props.name}</span>
      </Button>
    </>
  );
}
