import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { ListItemText } from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import Anchor from "components/Anchors";
// Styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);

function ProductSection() {
  const classes = useStyles();

  return (
    <GridContainer
      id="international"
      className={classes.section}
      justify="center"
    >
      <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Available Internationally</h2>
        <h6 className={classes.description}>
          Choose a country, then select your city
        </h6>
        <GridContainer justify="center">
          <GridItem xs={6} md={4}>
            <CustomDropdown
              noLiPadding={false}
              buttonText="Taiwan"
              buttonProps={{
                color: "github",
                size: "lg"
              }}
              dropdownList={[
                <Anchor
                  text={<ListItemText>Taipei</ListItemText>}
                  href="https://ninjasubs-taipei.web.app/login-page"
                />,
                <Anchor
                  text={<ListItemText>Taichung</ListItemText>}
                  href="https://ninjasubs-taichung.web.app/login-page"
                />,
                <Anchor
                  text={<ListItemText>Kaoshiung</ListItemText>}
                  href="https://ninjasubs-kaoshiung.web.app/login-page"
                />,
                <Anchor
                  text={<ListItemText>Tainan</ListItemText>}
                  href="https://ninjasubs-tainan.web.app/login-page"
                />
              ]}
            />
          </GridItem>
          <GridItem xs={6} md={4}>
            <CustomDropdown
              noLiPadding={false}
              buttonText="Japan"
              buttonProps={{
                color: "github",
                size: "lg"
              }}
              dropdownList={[
                <Anchor
                  text={<ListItemText>Tokyo</ListItemText>}
                  href="https://ninjasubs-tokyo.web.app/login-page"
                />
              ]}
            />
          </GridItem>
        </GridContainer>
        <br />
      </GridItem>
    </GridContainer>
  );
}
export default ProductSection;
