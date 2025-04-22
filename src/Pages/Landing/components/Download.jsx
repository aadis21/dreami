import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

function Download() {
  return (
    <Box display="flex" justifyContent="center" px={2}>
      <Box
        sx={{
          backgroundColor: "#121212",
          py: { xs: 2, md: 3 },
          borderRadius: 4,
          maxWidth: { xs: "100%", sm: "80%" },
          textAlign: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          color="white"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "1.7rem" } }}
        >
          Get more insights on how Dreamifys can help you crack a full stack or backend role in top tech companies
        </Typography>

        {/* Buttons Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent="center"
          pt={{ xs: 2, md: 4 }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              p: 1.4,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Download Career Handbook
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5722",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Download Placement Stats
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Download;
