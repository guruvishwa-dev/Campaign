import { useState } from "react";
import { IconHome2 } from "@tabler/icons-react";
import { Title, Tooltip, UnstyledButton } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import icon from "../assets/icon.png";
import { useNavigate, Outlet } from "react-router-dom"; // Import Outlet for nested routing
import classes from "./DoubleNavbar.module.css";

const mainLinksMockdata = [{ icon: IconHome2, label: "Home" }];

const linksMockdata = [
  { label: "Campaign", path: "/campaign/home" },
  { label: "Campaign Performance", path: `/campaign/campaignperformance` },
  // { label: 'ChatBot', path: '/campaign/chatbot' },
];

export const DoubleNavbar = () => {
  const [active, setActive] = useState("Home");
  const [showLinks, setShowLinks] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => {
          setActive(link.label);
          if (link.label === "Home") setShowLinks(true);
        }}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon size={22} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = showLinks
    ? linksMockdata.map((link) => (
        <div
          key={link.label}
          className={classes.link}
          data-active={activeLink === link.label || undefined}
          onClick={() => {
            setActiveLink(link.label);
            navigate(link.path); // Navigate to child routes
          }}
        >
          {link.label}
        </div>
      ))
    : null;

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <div className={classes.wrapper}>
          <div className={classes.aside}>
            {/* <div className={classes.logo}>
              <MantineLogo type="mark" size={30} />
            </div> */}
            <div className={classes.logo}>
              <img src={icon} alt="Your Logo" style={{ height: 30 }} />
            </div>
            {mainLinks}
          </div>
          <div className={classes.main}>
            {/* <Title order={4} className={classes.title}>
              {active}
            </Title> */}

            {links}
          </div>
        </div>
      </nav>
      <main className={classes.content}>
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  );
};
