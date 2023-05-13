import { Search } from "@mui/icons-material";
import { Box, Chip, Fab, IconButton, Typography } from "@mui/material";
import React from "react";

interface SearchIconProps {
  isExtended: boolean;
}

export default function SearchIcon(props: SearchIconProps) {
  const { isExtended = false } = props;
  return (
    <>
      {isExtended ? (
        <Fab variant="extended" color="primary">
          <Search fontSize="small" sx={{ mr: 1 }} />
          <Typography
            variant="subtitle1"
            fontWeight={"600"}
            sx={{ textTransform: "capitalize" }}
          >
            Search
          </Typography>
        </Fab>
      ) : (
        <IconButton
          type="button"
          aria-label="search"
          sx={{
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.main" },
            color: "common.white",
          }}
          size="small"
        >
          <Search fontSize="small" />
        </IconButton>
      )}
    </>
  );
}
