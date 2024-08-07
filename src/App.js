import { CardsInfo } from "./Components/CardsInfo";
import { BottomPart } from "./Components/BottomPart";
import { MiddlePart } from "./Components/MiddlePart";
import { PaymentForm } from "./Components/PaymentForm";
import { ImageGallery } from "./Components/ImageGallery";

function App() {
  return (
    <>
      <ImageGallery />
      <PaymentForm />
      <MiddlePart />
      <BottomPart />
      <CardsInfo />
    </>
  );
}

export default App;
