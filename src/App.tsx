import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["Ny", "SF", "Tokyo", "Delhi", "Kolkata", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setAlertDisabled(false);
  };

  const handleDismiss = () => {
    setAlertDisabled(true);
  };

  const [alertDisabled, setAlertDisabled] = useState(true);

  return (
    <div>
      <Alert disabled={alertDisabled} onDismiss={handleDismiss}>
        Test
      </Alert>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
      <Button type="primary" onClick={handleClick}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
