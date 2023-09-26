// import React from 'react'
// import Guidelines from '../components/Guidelines'
// import { Outlet } from 'react-router-dom'
// import { Button, Paper, InputBase, Divider } from '@mui/material'

// function GuidelinesPage() {
//   return (
//     <div className='guidelines-page'>
//       <Paper
//         component="form"
//         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}>
//         <InputBase
//           sx={{ ml: 1, flex: 1 }}
//           placeholder="Add a new guideline..."
//           inputProps={{ 'aria-label': 'search google maps' }}
//         />
//         <Button>Add</Button>
//         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//         <Button>Discard</Button>
//       </Paper>

//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Guidelines />
//       <Outlet />
//     </div>
//   )
// }

// export default GuidelinesPage

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function GuidelinesPage() {
  const [text, setText] = useState({
    headline: "",
    guidelines: "",
  });
  const [allHeading, setAllHeading] = useState([]);

  const handlechange = async (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setText({ ...text, [name]: value });
  };
  const submitHeading = async () => {
    const { headline, guidelines } = text;
    console.log(headline, guidelines);
    const res = await fetch("https://swachh-w8p5.onrender.com/guideline", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        headline,
        guidelines,
      }),
    });
    console.log(res);
  };

  const getGuiline = async () => {
    const res = await fetch("https://swachh-w8p5.onrender.com/get-guideline");
    const data = await res.json();
    setAllHeading(data);
    console.log(data);
  };

  useEffect(() => {
    getGuiline();
  }, []);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ display: "flex"}}
      >
        <TextField
          name="headline"
          value={text.headline}
          id="outlined-controlled"
          placeholder="Heading of the Guidline"
          label="Headline"
          style={{ width: "25%" }}
          onChange={handlechange}

          // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          //   setName(event.target.value);
          // }}
        />
        <TextField
          name="guidelines"
          value={text.guidelines}
          id="outlined-uncontrolled"
          label="Guideline"
          placeholder="details of the Guidline"
          style={{ width: "50%"}}
          onChange={handlechange}
        />
        <Button sx={{ pt: 2 }} style={{ width: "25%" }} onClick={submitHeading}>
          Add
        </Button>
      </Box>
      <div className="guidelines-page">
        {allHeading?.map((c) => {
          return (
            <div className="guidelines">
              <div className="guidelines-list">
                <h3>{c.headline}</h3>
                <p>{c.guidelines}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
