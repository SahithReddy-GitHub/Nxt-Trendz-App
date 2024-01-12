import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalCartAmount = cartList.reduce(
        (accumulator, eachCartItem) =>
          accumulator + eachCartItem.price * eachCartItem.quantity,
        0,
      )
      const totalCartItems = cartList.length

      return (
        <div className="cart-summary-con">
          <h1 className="summary-head">
            Order Total:{' '}
            <span className="summary-span">{`Rs ${totalCartAmount}/-`}</span>
          </h1>
          <p className="summary-para">{`${totalCartItems} items in cart`}</p>
          <button className="summary-checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
