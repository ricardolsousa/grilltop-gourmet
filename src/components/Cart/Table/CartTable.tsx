import CartTableBody from "./Body/CartTableBody"
import CartTableHeader from "./Header/CartTableHeader"

const CartTable = () => {

    return (
        <div style={{ margin: '32px', border: '1px solid #fff'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <CartTableHeader />
                <CartTableBody />
            </table>
        </div>
    )
}

export default CartTable