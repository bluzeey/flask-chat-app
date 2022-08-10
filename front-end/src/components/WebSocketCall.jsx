import { Button, Input, List, Typography,ListItem, Card } from "@mui/material";
import { useEffect, useState } from "react";

export default function WebSocketCall({ socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("data", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    });
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);

  return (
    <Card style={{padding:'5em'}}>
      <Typography variant="h4">WebSocket Communication</Typography>
      <Input type="text" variant="filled" value={message} onChange={handleText} />
      <Button onClick={handleSubmit}>submit</Button>
      <List>
        {messages.map((message, ind) => {
          return <ListItem key={ind}><span>{message}</span></ListItem>;
        })}
      </List>
    </Card>
  );
}
