import { CartCounter } from "@/shopping-cart"


export const metadata = {
    title: "Shopping cart",
    description: "Un simple contador",
}

export interface CounterResponse {
    method: string;
    counter: string;
  }
  

export const getData = async () => {
    const data = await fetch("http://localhost:3000/api/counter").then(res => res.json())

}
 
export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <CartCounter value={20}/>
        </div>
    )
}