import { Box, Stack } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <Stack className="container">
        <Stack className="footer">
          <Stack className="benefits-list-container">
            <Stack className="benefit">
              <Box className="img-container">
                <img src="/footerImages/discount.svg" alt="about-us-image" />
              </Box>
              <Stack className="benefit-text">
                <p>Big Saving Shop</p>
                <span>Save Vig Every Order</span>
              </Stack>
            </Stack>
            <Stack className="benefit">
              <Box className="img-container">
                <img src="/footerImages/hours.svg" alt="about-us-image" />
              </Box>
              <Stack className="benefit-text">
                <p>Big Saving Shop</p>
                <span>Save Vig Every Order</span>
              </Stack>
            </Stack>
            <Stack className="benefit">
              <Box className="img-container">
                <img src="/footerImages/moneyback.svg" alt="about-us-image" />
              </Box>
              <Stack className="benefit-text">
                <p>Big Saving Shop</p>
                <span>Save Vig Every Order</span>
              </Stack>
            </Stack>
          </Stack>
          <Stack className="footer-content">
            <Stack className="first-section">
              <Stack className="logo-container">
                <span style={{ color: "red" }}>LOGO WILL BE HERE</span>
                <span className="brand-motto">
                  Vivamus ut leo maximuor. Donec gravida eleifend nisi id
                  luctus. Vivamus fermentum.
                </span>
              </Stack>
              <Stack className="address">
                <span className="intro">Our Address</span>
                <Stack className="location-container">
                  <LocationOnIcon />
                  <span className="location">
                    9826 Painter Ave, Whittier, CA, United States.
                  </span>
                </Stack>
                <Stack className="call-container">
                  <CallIcon />
                  <span className="phone-number">+1800 396 756</span>
                </Stack>
                <Stack className="email-container">
                  <EmailIcon />
                  <span className="email">support@annachikadai.com</span>
                </Stack>
              </Stack>
              <Stack className="social-media-container">
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon />
                </a>
                <a
                  href="https://www.youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                </a>
              </Stack>
            </Stack>
            <Stack>Get to Know Us</Stack>
            <Stack>Legal</Stack>
            <Stack>Orders & Returns</Stack>
            <Stack>Let’s Keep in Touch</Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
