import { Search } from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MobileSearchbar() {
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": {
            width: "100%",
            height: "fit-content",
            borderRadius: "40px",
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 0.6,
            paddingInline: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Search fontSize="small" />
          <Stack>
            <Typography variant="subtitle2" fontWeight={"bold"} color="text.primary">
              Anywhere
            </Typography>
            <Box display="flex" gap={1}>
              <Typography variant="subtitle2" color={"text.secondary"}>Any week</Typography>
              {bull}
              <Typography variant="subtitle2" color={"text.secondary"}>Add guests</Typography>
            </Box>
          </Stack>
          <IconButton
            type="button"
            aria-label="filter"
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              border: "1px solid #DDDDDD",
              marginLeft: "auto",
            }}
            size="small"
          >
            <FilterAltOutlined fontSize="small" />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
}
