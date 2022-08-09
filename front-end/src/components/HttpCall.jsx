import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import '../App.css'

export default function HttpCall() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/http-call", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      });
  });
  return (
    <Paper style={{padding:'5em'}}>
      <Typography variant="h5">HTTP Communication</Typography>
      <Typography variant="body1" className="http">{data}</Typography>
    </Paper>
  );
}
