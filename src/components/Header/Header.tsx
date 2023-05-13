import { Backdrop, Box, Container, Fab, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import LogoLarge from "../../assets/Airbnb-large-logo.jpg";
import Searchbar from "../Searchbar/Searchbar";
import { AccountCircle, Language, Menu } from "@mui/icons-material";
import BookingTypeTab from "../BookingTypeTab/BookingTypeTab";
import SearchbarExtended from "../SearchbarExtended/SearchbarExtended";

export default function Header() {
  const [isBackdropOpen, setBackdrop] = React.useState(false);
  const [popperElement, setPopperElement] = React.useState(null);

  const closeBackdrop = () => {
    setBackdrop(false);
    setPopperElement(null)
  };

  const openBackdrop = () => {
    setBackdrop(true);
  };

  return (
    <>
      <Box
        className="header-container"
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer + 1,
          position: "relative",
          backgroundColor: "common.white",
          borderBottom: "1px solid #ececec",
        })}
      >
        <Container
          maxWidth="xl"
          sx={(theme) => ({
            backgroundColor: "common.white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: theme.zIndex.drawer + 1 + "!important",
            position: "relative",
            height: "80px",
          })}
        >
          <Box className="logo-container">
            <Box
              sx={{
                objectFit: "contain",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <Image
                src={LogoLarge}
                alt="desktop-logo"
                width={100}
                height={50}
                priority
              />
            </Box>
          </Box>

          {isBackdropOpen ? (
            <Box className="search-container">
              <BookingTypeTab isVisible={isBackdropOpen} />
            </Box>
          ) : (
            <Box className="search-container" onClick={openBackdrop}>
              <Searchbar />
            </Box>
          )}

          <Box
            className="profile-container"
            display={"flex"}
            alignItems={"center"}
          >
            <Fab
              variant="extended"
              size="medium"
              sx={{
                background: "transparent",
                boxShadow: "none",
                textTransform: "capitalize",
              }}
            >
              Airbnb your home
            </Fab>

            <IconButton type="button" aria-label="international" size="medium">
              <Language fontSize="small" />
            </IconButton>

            <Fab
              variant="extended"
              size="medium"
              sx={{
                background: "transparent",
                boxShadow: "none",
                textTransform: "capitalize",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "text.secondary",
                ml: 0.5,
              }}
            >
              <Menu fontSize="medium" sx={{ mr: 1 }} />
              <AccountCircle fontSize="medium" />
            </Fab>
          </Box>
        </Container>
        <Container
          maxWidth="xl"
          sx={(theme) => ({
            backgroundColor: "common.white",
            zIndex: theme.zIndex.drawer + 1 + "!important",
          })}
        >
          <Box
            sx={{
              width: "100%",
              height: "98px",
              mt: "20px",
              backgroundColor: "common.white",
              display: isBackdropOpen ? "flex" : "none",
              justifyContent: "center",
            }}
          >
            <SearchbarExtended popperElement={popperElement} setPopperElement={setPopperElement} />
          </Box>
        </Container>
      </Box>

      <Backdrop
        open={isBackdropOpen}
        onClick={closeBackdrop}
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer - 1,
          color: "#fff",
        })}
      />
    </>
  );
}
