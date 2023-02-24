import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { ReactComponent as ProfileLogo } from "../svgs/profile-icon.svg";
import NavItem from "../components/NavItem";
import ProfileDropDown from "../components/ProfileDropDown";
import MenuButton from "../components/MenuButton";
import NavButton from "../components/NavButton";
import LogOutButton from "../components/LogOutButton";
import { ReactComponent as CartIcon } from "../svgs/cart-icon.svg";
import { ReactComponent as StarIcon } from "../svgs/star-icon.svg";
import { useNavigate } from "react-router-dom";
import CartModal from "../components/CartModal";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [activeModal, setActiveModal] = useState("none");

  useEffect(() => {
    const getUser = async (username) => {
      const res = await axios.get(`${url}/users/${username}`);
      setUser(res.data.user);
    };
    getUser(username);
  }, [username, url]);

  const handleCartClick = () => {
    setActiveModal("cart");
  };

  const handleCloseModal = () => {
    setActiveModal("none");
  };

  const logOutClick = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  if (user) {
    return (
      <div className="dashboard">
        <header>
          <Header
            user={user}
            navItems={[
              <NavItem
                icon={<ProfileLogo />}
                dropDownMenu={
                  <ProfileDropDown
                    cart={user.cart}
                    wishlist={user.wishlist}
                    buttons={[
                      <MenuButton
                        title="Cart"
                        leftIcon={`[ ${user.cart.length} ]`}
                        rightIcon={<CartIcon />}
                        clickHandler={handleCartClick}
                      />,
                      <MenuButton
                        title="Wish List"
                        leftIcon={`[ ${user.wishlist.length} ]`}
                        rightIcon={<StarIcon />}
                      />,
                      <NavButton title="Edit Profile" />,
                      <LogOutButton clickHandler={logOutClick} />,
                    ]}
                  />
                }
              />,
            ]}
          />
        </header>
        {activeModal === "cart" && (
          <CartModal closeHandler={handleCloseModal} cart={user.cart} />
        )}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Dashboard;
