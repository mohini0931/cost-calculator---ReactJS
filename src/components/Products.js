import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            marginTop: 10,
            gap: 10,
            border: "1px solid grey",
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#d56565",
                color: "black",
              }}
              onClick = {() => dispatch({
                type: 'REMOVE_FROM_CART',
                   payload:  prod
              })

              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#60a660",
                color: "white",
              }}
              onClick = {() => dispatch({
                   type: 'ADD_TO_CART',
                   payload: {
                        id: prod.id,
                        title: prod.title,
                        thumbnail: prod.thumbnail,
                        qty: 1,
                        price: prod.price
                   } 
              })}
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
