import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AddtoCardPage = () => {
  const carditems = useSelector((state) => state.fooditemsCard.items);

  const totalPrice = carditems.reduce((acc, item) => acc + item.price, 0);
 
  const makePayment = async () => {
    try {
      const checkout = await axios.post(
        "http://localhost:2000/session/checkout", carditems);
     
      console.log("Checkout response:", checkout);
        openRazorpay(checkout.data)
         
    } catch (error) {
      console.warn("Error during Payment", error);
    }
  };
  
  const navigate = useNavigate();
  const openRazorpay = (checkout) => {
    console.log( 'pene', checkout.amount , checkout.currency , checkout.id)
    var option = {
      key: "rzp_test_sEo5WMzgsyPPPR",
      amount: checkout.amount,
      currency: checkout.currency,
      name: "BN Technology",
      description: "Transaction",
      order_id: checkout.id,
      handler: async function (response) {
        try {
            console.log(response)
          const payment = await axios.post(
            "http://localhost:2000/session/payment",
             {response : response}
          );
          console.log(payment);
          navigate("/success");
        } catch (error) {
          console.log(error);
          navigate("/failed");
        }
      },
    };
  
    var rzp = new window.Razorpay(option);
    rzp.open();
  };
  
  

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 p-4 bg-gradient-to-r">
        <div className="lg:pt-20 pt-12 pb-5 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to the
              <span className="text-blue-500 pl-5">Card</span>
            </h2>
          </div>
        </div>

        {/* table */}
        {carditems.map((items) => (
          <div key={items.id}>
            <div className="lg:ml-10 mt-5 mb-5 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-100 md:max-w-xl md:flex-row">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={items.images[0]}
                alt="ghjgf"
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium">{items.title}</h5>
                <p className="mb-4 text-base">{items.description}</p>
                <p className="text-lg">Price : {items.price}</p>
              </div>
            </div>
          </div>
        ))}

        {/* customer details */}
        <div className="my-12 flex flex-col md:flex-row justify-between items-start">
          <div className="space-x-3 md:w-1/2">
            <h2 className="font-bold mb-4">Customer Details</h2>
            <p>Name :- Asif Ali</p>
            <p>Email :- exaple@gmail.com</p>
          </div>

          <div className="space-x-3 md:w-1/2">
            <h2 className="font-bold mb-4">Shoping Details</h2>
            <p className="pb-2">
              Total items :-
              <span className="text-blue-600">{carditems.length}</span>
            </p>
            <div className="flex pb-2">
              Total Price :-
              <span className="text-blue-600">{totalPrice}</span>
            </div>

            <button
              onClick={makePayment}
              className="cursor-pointer rounded-md font-semibold overflow-hidden relative z-100 border border-blue-500 group px-8 py-2"
            >
              <span className="relative z-10 text-blue-500 group-hover:text-white text-xl duration-500">
                Checkout
              </span>
              <span className="absolute w-full h-full bg-blue-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-blue-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCardPage;
