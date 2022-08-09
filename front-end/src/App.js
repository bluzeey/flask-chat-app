import "./App.css";
import HttpCall from "./components/HttpCall";
import WebSocketCall from "./components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Button , Paper , Card } from "@mui/material";

function App() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io("localhost:5001/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:3000/",
        },
      });

      setSocketInstance(socket);

      socket.on("connect", (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);

  return (
    <div className="App">
      <Typography variant="h4">Basic Messaging Application</Typography>
      <Card >
        <HttpCall />
      </Card>
      {!buttonStatus ? (
        <Button onClick={handleClick}>turn chat on</Button>
      ) : (
        <>
          <Button onClick={handleClick}>turn chat off</Button>
          <Paper>
            {!loading && <WebSocketCall socket={socketInstance} />}
          </Paper>
        </>
      )}
    </div>
  );
}

export default App;
