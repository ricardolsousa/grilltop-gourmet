const CartTableHeader = () => {

    return (
        <thead>
            <tr style={{ borderBottom: '1px solid #fff'}}>
                <th style={{ textAlign: 'left', width: '20%', borderRight: '1px solid #fff', padding: '8px', color: '#fff' }}>Name</th>
                <th style={{ textAlign: 'left', width: '60%', borderRight: '1px solid #fff', padding: '8px', color: '#fff' }}>Description</th>
                <th style={{ textAlign: 'left', width: '10%', borderRight: '1px solid #fff', padding: '8px', color: '#fff' }}>Price</th>
                <th style={{ textAlign: 'left', width: '10%', padding: '8px', color: '#fff' }}>Quantity</th>
            </tr>
        </thead>
    )
}

export default CartTableHeader;