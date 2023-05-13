import { Search } from "@mui/icons-material";
import { Box, ButtonGroup, Grow, IconButton, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";

const SearchButtons = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  paddingInline: "1rem",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));


export default function Searchbar() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      {/* <Grow in={checked}> */}
        <ButtonGroup
          disableElevation
          variant="text"
          aria-label="text button group"
          sx={{
            border: "1px solid #DDDDDD",

            borderRadius: "40px",
            alignItems: "center",
            padding: 0.2,
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
            transition: "box-shadow 0.2s ease",

            // '&:hover': {
            // }
          }}
        >
          <SearchButtons
            disableRipple
            size="small"
            color="secondary"
            sx={{ fontWeight: "bold" }}
            onClick={handleChange}
          >
            Anywhere
          </SearchButtons>
          <SearchButtons
            disableRipple
            size="small"
            color="secondary"
            sx={{ fontWeight: "bold" }}
            onClick={handleChange}
          >
            Any week
          </SearchButtons>
          <SearchButtons
            disableRipple
            size="small"
            color="secondary"
            sx={{ display: "flex", gap: 1, paddingRight: 0.5 }}
            onClick={handleChange}
          >
            Add guests
            {/* <IconButton
              type="button"
              aria-label="search"
              sx={{
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.main" },
                color: "common.white",
              }}
              size="small"
            > */}
            <Box sx={{
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.main" },
                color: "common.white",
                width: 27,
                height: 27,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>

              <Search fontSize="small" />
            </Box>
            {/* </IconButton> */}
          </SearchButtons>
        </ButtonGroup>
      {/* </Grow> */}
    </>
  );
}
