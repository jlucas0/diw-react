import { useLocation } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const Carrito = () => {
  const location = useLocation();

  const precio = location.state?.precio;


  return (
    <main>
      <div id="pago">
        <h3>Total a pagar: {precio} €</h3>
        <div id="paypal">
          <PayPalScriptProvider options={{ "client-id": "AaxsUQu-MQ8Z72DIA9_HsP8_rWvQ5cZYAkspC5QEE2tzZ_Dpz7r9lUBBOkQ9TFlyBqeO6JA6wMk8T8A2",currency:"EUR",components:"buttons"}}>
              <PayPalButtons style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: precio,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
               />
          </PayPalScriptProvider>
        </div>
      </div>
    </main>
  );
};

export default Carrito;