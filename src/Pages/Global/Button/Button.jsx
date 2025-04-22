import React from 'react';
import { Button as MuiButton } from '@mui/material';

export default function CustomButton({ text = "Join Now" , onClick }) {
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#E64A19",
        padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" }, // Responsive Padding
        fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive Font Size
        minWidth: { xs: "100px", sm: "140px", md: "160px" }, // Adjusting Button Width
        "&:hover": {
          backgroundColor: "#D84315",
        },
      }}
    >
      {text}
    </MuiButton>
  );
}
