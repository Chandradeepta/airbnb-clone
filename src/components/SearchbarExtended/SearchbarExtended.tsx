import {
  Box,
  Fab,
  Fade,
  FormControl,
  InputBase,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Popper,
  PopperPlacementType,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import SearchIcon from "../SearchIcon/SearchIcon";

interface SearchSectionProps {
  popperId?: string;
  label: string;
  placeholder: string;
  isSelected: boolean;
  handleClick: (event: any, label: string) => void;
}

const SearchSection = (props: SearchSectionProps) => {
  const {
    label,
    popperId,
    placeholder,
    isSelected = false,
    handleClick,
  } = props;

  const getMinWidth = () => {
    if (label === SearchSectionLabel.Where) return 327;
    if (label === SearchSectionLabel.Who) return 260;
    return 130;
  };
  return (
    <Fab
      variant="extended"
      aria-describedby={popperId}
      disableRipple
      sx={{
        textTransform: "capitalize",
        height: "65px",
        borderRadius: "32px",
        justifyContent: "flex-start",
        paddingInline: 3,
        minWidth: getMinWidth(),
        ...(isSelected && {
          backgroundColor: "common.white",
        }),
        ...(!isSelected && {
          boxShadow: "none",
          backgroundColor: "grey.100",
        }),
      }}
      onClick={(e) => handleClick(e, label)}
    >
      {label === SearchSectionLabel.Where ? (
        <FormControl variant="standard">
          <InputLabel
            focused
            shrink
            htmlFor={label}
            color="secondary"
            onClick={(e) => handleClick(e, label)}
          >
            <Typography variant="body2">{label}</Typography>
          </InputLabel>
          <InputBase
            id={label}
            sx={{ mt: 1.5, flex: 1 }}
            placeholder={placeholder}
            inputProps={{ "aria-label": placeholder }}
            {...(isSelected && {
              autoFocus: true,
            })}
          />
        </FormControl>
      ) : (
        <Stack alignItems={"flex-start"}>
          <Typography variant="body2">{label}</Typography>
          <Typography variant="body2" color={"grey.200"}>
            {placeholder}
          </Typography>
        </Stack>
      )}
    </Fab>
  );
};

const enum SearchSectionLabel {
  "Where" = "Where",
  "CheckIn" = "Check in",
  "CheckOut" = "Check out",
  "Who" = "Who",
}

const searchSections = [
  {
    label: SearchSectionLabel.Where,
    placeholder: "Search destinations",
  },
  {
    label: SearchSectionLabel.CheckIn,
    placeholder: "Add dates",
  },
  {
    label: SearchSectionLabel.CheckOut,
    placeholder: "Add dates",
  },
  {
    label: SearchSectionLabel.Who,
    placeholder: "Add guests",
  },
];

interface SearchbarExtendedProps {
  popperElement: any
  setPopperElement: (el: any) => void
}

export default function SearchbarExtended(props: SearchbarExtendedProps) {
  const { popperElement, setPopperElement } = props;
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState("");

  const open = Boolean(popperElement);
  const handleClick = (event: any, label: string) => {
    if (event.currentTarget !== popperElement) handleClose();
    setPopperElement(event.currentTarget);
    setSelected(label);
  };
  const handleClose = () => {
    setPopperElement(null);
  };

  const handlePopperPlacement = (): PopperPlacementType => {
    if (selected === "Where") return "bottom-start";
    if (selected === "Who") return "bottom-end";
    return "bottom";
  };

  const popperId = open ? "simple-popover" : undefined;

  return (
    <>
      <Box
        display="flex"
        alignItems={"center"}
        sx={{
          backgroundColor: "grey.100",
          borderRadius: "32px",
          height: "fit-content",
          position: "relative",
        }}
      >
        {searchSections.map((section) => {
          return (
            <SearchSection
              label={section.label}
              placeholder={section.placeholder}
              isSelected={selected === section.label}
              popperId={open ? "simple-popover" : undefined}
              handleClick={handleClick}
            />
          );
        })}
        <Box sx={{ position: "absolute", right: 10 }}>
          <SearchIcon isExtended />
        </Box>
      </Box>

      <Popper
        id={popperId}
        open={open}
        anchorEl={popperElement}
        placement={handlePopperPlacement()}
        transition
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer + 1,
          marginTop: "12px !important",
        })}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ borderRadius: "32px" }}>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}
