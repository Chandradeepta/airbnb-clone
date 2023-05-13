import { Box, Collapse, Slide, Tab, Tabs } from "@mui/material";
import React from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BookingTypeTabProps {
  isVisible: boolean;
}

export default function BookingTypeTab(props: BookingTypeTabProps) {
  const { isVisible } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Slide direction="down" in={isVisible}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            textTransform: "capitalize",
            ".MuiTabs-flexContainer": {
              gap: 3,
            },
          }}
        >
          <Tab
            label="Stays"
            {...a11yProps(0)}
            sx={{ textTransform: "none", minWidth: "fit-content", padding: 0 }}
          />
          <Tab
            label="Experiences"
            {...a11yProps(1)}
            sx={{ textTransform: "none", minWidth: "fit-content", padding: 0 }}
          />
          <Tab
            label="Online Experiences"
            {...a11yProps(2)}
            sx={{ textTransform: "none", minWidth: "fit-content", padding: 0 }}
          />
        </Tabs>
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
      </Slide>
    </>
  );
}
