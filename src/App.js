import PaymentRequired from "./Components/PaymentRequired/PaymentRequired";

function App() {
  const handlePay = () => {
    // TODO: replace with real payment flow
    console.log('Initiate payment flow');
  };

  return <PaymentRequired onPay={handlePay} />;
  
}

export default App;
