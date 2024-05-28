import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MdLeaderboard } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { GoAlertFill } from "react-icons/go";
import { IoMdPricetags } from "react-icons/io";
import { GiTakeMyMoney, GiPositionMarker  } from "react-icons/gi";
import { FaMagnifyingGlassChart, FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillBasket2Fill } from "react-icons/bs";
import { SiTestrail, SiSpeedtest,SiTradingview } from "react-icons/si";
import './NavigationBar.css'; // Import CSS file for custom styles

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    paddingStyle = window.innerWidth < 1300 ? '3%' : '10%';
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var paddingStyle = window.innerWidth < 1300 ? '3%' : '8%';

  return (
    <>
      <Navbar expand={'lg'} className={`border border-dark  mx-auto  ${isScrolled ? 'scrolled' : ''}`} style={{ background: isScrolled ? '#021154' : 'transparent', borderBottom: 'none' ,margin:'0px',paddingLeft:paddingStyle,paddingRight:paddingStyle }} variant='dark'>
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><MdLeaderboard /> LeaderBoard</Nav.Link>
              <NavDropdown title={<><SiTradingview /> Historical Trading</>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><BsFillBasket2Fill /> Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><SiTradingview />Trading</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><GiPositionMarker /> Position</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"><FaHandHoldingDollar/>Holding</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing"><VscGraphLine /> Historical Chart</Nav.Link>
              <Nav.Link href="#pricing"><FaMagnifyingGlassChart /> Scanners</Nav.Link>
              <Nav.Link href="#pricing"><GoAlertFill /> Alerts</Nav.Link>
              <Nav.Link href="#pricing"><SiSpeedtest/> Basic Backtest</Nav.Link>
              <Nav.Link href="#pricing"><SiTestrail /> Advanced Backtest</Nav.Link>
              <Nav.Link href="#pricing"><IoMdPricetags /> Pricing</Nav.Link>
              <Nav.Link href="#pricing"><GiTakeMyMoney /> My Earnings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
