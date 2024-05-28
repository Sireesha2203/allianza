import React from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import JsonData from './Leaderboard.json';
import './Leaderboard.css';

function Leaderboard() {
  const DisplayData = JsonData.map((info, index) => {
    return (
      <tr key={info.id} className="">
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>
          <img
            src="/tradearrow.png"
            alt="Chart Line"
            className="calmar-ratio-icon"
          />{' '}
          {info.calmarRatio}
        </td>
        <td>{info.overallProfit}</td>
        <td>{info.avgDailyProfit}</td>
        <td>{info.winPercent}</td>
      </tr>
    );
  });

  return (
    <div className="body" id="leaderboard">
      <header className="header text-center text-light p-5">
        <h1 className="head">
          LeaderBoards
          <img src="/leaderboard.png" alt="Floating" className="floating-image" />
        </h1>
      </header>
      <div className="tab container p-3 pb-1">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-center m-3">Basic Backtest</h2>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Slippage
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">0%</Dropdown.Item>
              <Dropdown.Item href="#/action-2">0.5%</Dropdown.Item>
              <Dropdown.Item href="#/action-3">1%</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <table className="table table-hover">
          <thead className="tabhead">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg Daily Profit</th>
              <th>Win Percent</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
      <footer className="footer text-center text-light p-3">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Leaderboard;
