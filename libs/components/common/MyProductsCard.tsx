import { Product } from "@/libs/types/product/product";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Moment from "react-moment";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";

interface MyProductsCardProps {
  product: Product;
  deleteProductHandler?: any;
  memberPage?: boolean;
  updateProductHandler?: any;
}

const MyProductsCard = (props: MyProductsCardProps) => {
  const { product, deleteProductHandler, memberPage, updateProductHandler } =
    props;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const pushEditProperty = async (id: string) => {
    console.log("+pushEditProperty: ", id);
    await router.push({
      pathname: "/mypage",
      query: { category: "addProperty", propertyId: id },
    });
  };
  const pushProductDetail = async (id: string) => {
    // if (memberPage)
    await router.push({
      pathname: "/property/detail",
      query: { id: id },
      //   });
      // else return;
    });
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack className="my-products-card-main">
      <Stack
        className="image-box"
        onClick={() => pushProductDetail("product?._id")}
      >
        <img src={`/img/products/apple.png`} alt="" />
      </Stack>
      <Stack
        className="information-box"
        onClick={() => pushProductDetail("product?._id")}
      >
        <Typography className="name">Apple</Typography>
        <Typography className="description">Fresh Apple from Jeju</Typography>
        <Typography className="price">
          <strong>$10</strong>
        </Typography>
      </Stack>
      <Stack className="date-box">
        <Typography className="date">
          <Moment format="DD MMMM, YYYY">01 03 2002</Moment>
        </Typography>
      </Stack>
      <Stack className="status-box">
        <Stack
          className="coloured-box"
          sx={{ background: "#E5F0FD" }}
          onClick={handleClick}
        >
          <Typography className="status" sx={{ color: "#3554d1" }}>
            STATUS
          </Typography>
        </Stack>
      </Stack>
      {true && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              width: "70px",
              mt: 1,
              ml: "10px",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            },
            style: {
              padding: 0,
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {true && (
            <>
              <MenuItem
                disableRipple
                onClick={() => {
                  handleClose();
                  updateProductHandler("PropertyStatus.SOLD", "property?._id");
                }}
              >
                Sold
              </MenuItem>
            </>
          )}
        </Menu>
      )}
      <Stack className="views-box">
        <Typography className="views">10</Typography>
      </Stack>
      {false ? (
        <Stack className="action-box">
          <IconButton
            className="icon-button"
            onClick={() => pushEditProperty("product._id")}
          >
            <ModeIcon className="buttons" />
          </IconButton>
          <IconButton
            className="icon-button"
            onClick={() => deleteProductHandler("product._id")}
          >
            <DeleteIcon className="buttons" />
          </IconButton>
        </Stack>
      ) : null}
    </Stack>
  );
};

export default MyProductsCard;

//! FIRST CONDITION => {!memberPage && product.productStatus !== 'SOLD' && (.....)}
//! SECOND CONDITION => {!memberPage && product.productStatus === ProductStatus.ACTIVE ? (.....) : null}
