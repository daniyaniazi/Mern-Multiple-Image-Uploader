import logo from "./logo.svg";
import "./App.css";
import { Row } from "react-bootstrap";
import FileUploadScreen from "./screens/FileUploadScreen";
import Notification from "./components/Notification";

import { useState } from "react";
import Gallery from "./components/Gallery/Gallery";
function App() {
  const [notification, setNotification] = useState({});
  const [newAdded, setnewAdded] = useState(0);

  const SetSuccessNotification = () => {
    console.log("Uploaded");
    setNotification({
      success: "Uploaded Succesafully",
    });
    setnewAdded(newAdded + 1);
    // remove;
    setTimeout(() => {
      setNotification({});
    }, 3000);
  };
  return (
    <div className="App">
      <Row className="mt-5">
        <h3 className="brand-name">MY IMAGE UPLOADER</h3>
        {notification.success && <Notification notification={notification} />}
        <FileUploadScreen SetMsg={SetSuccessNotification} />
        <Gallery newAdded={newAdded} />
      </Row>
    </div>
  );
}

export default App;
