import { CardsInfo } from "./Components/CardsInfo";
import { BottomPart } from "./Components/BottomPart";
import { MiddlePart } from "./Components/MiddlePart";
import { PaymentForm } from "./Components/PaymentForm";

function App() {
  return (
    <>
      <PaymentForm />
      <MiddlePart />
      <BottomPart />
      <CardsInfo />
    </>
  );
}

export default App;
