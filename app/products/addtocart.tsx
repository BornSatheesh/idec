"use client";
import { Button } from "@/components/ui/button";
import { BaggageClaim } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../GlobalRedux/Features/Cart/cartSlice";
import { addProduct } from "../actions/addproducts";
type TProduct = {
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
export default function AddToCart({ product }: any) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    console.log(product);
    dispatch(addToCart(product));
    addProduct(product);
  }
  return (
    <>
      <Button
        variant="secondary"
        onClick={() => handleAddToCart()}
        className="bg-pink-800 text-white hover:bg-pink-700 flex gap-2"
      >
        <BaggageClaim />
        <span>Add</span>
      </Button>
    </>
  );
}
