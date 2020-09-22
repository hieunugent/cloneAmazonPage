import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {useSpring, animated} from 'react-spring'

// const calc = (x, y) =>[-(y-window.innerHeight/2)/20,(x-window.innerHeight/2)/20,1.1]
const calc = (x, y) => [0,0,1.1]
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function Product({ id, title, price, image, rating }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 40 },
  }));
  const [{ basket }, dispatch ] = useStateValue();
  const addToBasket=() => {
    // add item to basket
    dispatch(
      {
        type:'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price:price,
          rating: rating,
        }
      }
    )
  }
  return (
    <animated.div
        onMouseMove={({clientX:x, clientY:y})=> set({xys: calc(x,y) })}
        onMouseLeave={()=> set({xys:[0,0,1]})}
        style={{ transform: props.xys.interpolate(trans)}}
        className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
      {/* </div> */}
    </animated.div>
  );
}

export default Product;
