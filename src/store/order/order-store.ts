import { create } from 'zustand';
import { OrderProduct, ProductOption } from '@/interfaces/order';
import { Product } from '@prisma/client';

interface State {
    isOrderDetailOpen: boolean;
    order: OrderProduct[];
    productToOrder: OrderProduct | null;
    // Methods
    // To Order
    //+    //Product
    setProductToOrder: (product: OrderProduct) => void;
    addProductToOrder: (product: OrderProduct) => void;

    //+    // Options
    increaseOptionToOrder: (newOption: ProductOption) => void;
    decreaseOptionToOrder: (option: ProductOption) => void;
    removeOptionsToOrder: () => void;


    // In Order
    increaseProductOrderQuantity: (id: Product['id']) => void;
    decreaseProductOrderQuantity: (id: Product['id']) => void;
    removeProductFromOrder: (id: Product['id']) => void;


    //UI
    openOrderDetail: () => void;
    closeOrderDetail: () => void;


}


export const useOrderStore = create<State>()((set, get) => ({
    isOrderDetailOpen: false,
    order: [],
    productToOrder: null,


    // Methods


    // To Order
    setProductToOrder: (product) => {
        set({ productToOrder: product });
    },
    increaseOptionToOrder: (option) => {
        const currentOptions = get().productToOrder?.options || [];


        if (!get().productToOrder) return;
        const optionInOrden = currentOptions.some(opt => opt.id === option.id);



        const options = optionInOrden
            ? currentOptions.map((opt: ProductOption) => {

                if (opt.id === option.id) {
                    return {
                        ...opt,
                        quantity: opt.quantity + 1,
                        subtotal: (opt.quantity + 1) * opt.price
                    };
                }
                return opt;
            })
            : [
                ...currentOptions,
                {
                    ...option,
                    quantity: 1,
                    subtotal: option.price
                }
            ];



        set((state) => ({
            productToOrder: {
                ...state.productToOrder!,
                subtotal: get().productToOrder!.subtotal + option.subtotal,
                options
            }
        }));
    },
    decreaseOptionToOrder: (option) => {
        const currentOptions = get().productToOrder?.options || [];

        const newOptions = currentOptions.map((opt: ProductOption) => {
            if (opt.id === option.id) {
                if (opt.quantity === 0) return;

                if (opt.quantity === 1) {
                    return null
                }
                if (opt.quantity > 1) {
                    return {
                        ...opt,
                        quantity: opt.quantity - 1,
                        subtotal: (opt.quantity - 1) * opt.price
                    };
                }

            }
            return opt;
        }).filter((opt) => opt !== null);

        set((state) => ({
            productToOrder: {
                ...state.productToOrder!,
                subtotal: get().productToOrder!.subtotal - option.subtotal,
                options: newOptions
            }
        }));

    },
    removeOptionsToOrder: () => {
        set((state) => ({
            productToOrder: {
                ...state.productToOrder!,
                subtotal: get().productToOrder!.price,
                options: []
            }
        }));
    },
    addProductToOrder: (product) => {


        let products: OrderProduct[] = []

        const productInOrder = get().order.find((prodInOrder) => prodInOrder.id === product.id);

        if (productInOrder) {

            products = get().order.map((prodInOrder) => {
                if (prodInOrder.id === product.id) {
                    return {
                        ...prodInOrder,
                        quantity: prodInOrder.quantity + 1,
                        subtotal: (prodInOrder.quantity + 1) * (product.price + product.options.reduce(
                            (acc, option) => acc + option.subtotal, 0
                        ))
                    }
                }

                return prodInOrder
            })
        } else {

            products = [...get().order, {
                ...product,
                quantity: 1,
                subtotal: product.price + product.options.reduce(
                    (acc, option) => acc + option.subtotal, 0
                ),
                options: product.options
            }]
        }

        set(() => ({

            order: products

        }))
    },


    // In Order
    removeProductFromOrder: (id) => {

        set((state) => ({
            order: state.order.filter((product) => product.id !== id)
        }))

    },
    increaseProductOrderQuantity: (id) => {

        set((state) => ({
            order: state.order.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                        subtotal: (product.quantity + 1) * (product.price + product.options.reduce(
                            (acc, option) => acc + option.subtotal, 0
                        ))
                    }
                }

                return product
            })
        }))

    },
    decreaseProductOrderQuantity: (id) => {

        set((state) => ({
            order: state.order.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                        subtotal: (product.quantity - 1) * (product.price + product.options.reduce(
                            (acc, option) => acc + option.subtotal, 0
                        ))
                    }
                }

                return product
            })
        }))

    },


    // UI Order
    openOrderDetail: () => {
        set({ isOrderDetailOpen: true });
    },
    closeOrderDetail: () => {
        set({ isOrderDetailOpen: false });
    }
}));