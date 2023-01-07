import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

// as the actual value you want to access.
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value= {products};

  // useEffect(() =>{
  //   const unsubscribe = onAuthStateChangedListener((products) => {
  //     if(products){        
  //       createProductDocument(products);
  //     }
  //     setCurrentProducts(products);
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

