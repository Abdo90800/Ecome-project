

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { removeItemFromCart } from "../../Redaux/cartslice";

export default function CardShop({ onClose, open }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.attributes.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="flex items-center ml-3 h-7">
                      <button
                        type="button"
                        onClick={() => onClose(false)}
                        className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {items.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4 text-lime-500">
                                    ${product.attributes.price}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.color}
                                </p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">
                                  Qty {product.quantity}
                                </p>
                                <p className="text-gray-900">
                                  Total: ${(product.attributes.price * product.quantity).toFixed(2)}
                                </p>
                                <div className="flex">
                                  <Button
                                    onClick={() => handleRemoveFromCart(product.id)}
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${calculateTotal()}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => onClose(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}