import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../svgs/cart-icon.svg";
import { ReactComponent as StarIcon } from "../svgs/star-icon.svg";
import { ReactComponent as CaretIconRight } from "../svgs/right-caret.svg";
import MenuButton from "./MenuButton";
import NavButton from "../components/NavButton";
import LogOutButton from "../components/LogOutButton";
import "../styles/dropdownMenu.css";

const ProfileDropDown = ({ cart, wishlist }) => {
  const navigate = useNavigate();
  const logOutClick = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  return (
    <div className="profile-dropdown">
      <MenuButton
        title="Cart"
        leftIcon={<CartIcon />}
        rightIcon={<CaretIconRight />}
      />
      <MenuButton
        title="Wish List"
        leftIcon={<StarIcon />}
        rightIcon={<CaretIconRight />}
      />
      <NavButton title="Edit Profile" />
      <LogOutButton clickHandler={logOutClick} />
    </div>
  );
};

export default ProfileDropDown;
