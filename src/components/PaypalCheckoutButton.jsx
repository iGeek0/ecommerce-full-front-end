import { useEffect, useContext } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
// This values are the props in the UI
const style = { layout: "vertical" };


// Componente personalizado para envolver los botones de PayPal y manejar los cambios de moneda
const PaypalCheckoutButton = ({ currency, amount, showSpinner }) => {
  // usePayPalScriptReducer solo se puede usar dentro de elementos secundarios de PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);



  return (<>
    { (showSpinner && isPending) && <div className="spinner" /> }
    <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: currency,
                                value: amount,
                            },
                        },
                    ],
                })
                .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                });
        }}
        onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
                // Your code here after capture the order
            });
        }}
    />
</>
);
}


export default PaypalCheckoutButton;
