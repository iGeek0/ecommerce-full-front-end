import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
const products = [1, 2, 3, 4, 5]

const Checkout = () => {
    return (
        <div className="p-4">
            <div className="row">
                <div className="col-md-5">
                    {products.map((product) => {
                        return (
                            <div className="card mb-3" key={product}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://picsum.photos/300" className="img-fluid rounded-start h-100" alt="test" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content</p>
                                            <div className="text-start">
                                                <button className="btn btn-danger btn-sm">Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen de compra</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Subtotal <b> 0.00</b></p>
                                    <p>Envio <b> 0.00</b></p>
                                    <p>Total <b> 0.00</b></p>
                                </div>
                            </div>
                            <div className="text-center">
                                <PaypalCheckoutButton currency={"MXN"}
                                    amount={1}
                                    showSpinner={false} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Checkout;