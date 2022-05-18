import React, { useState } from "react";
import "../script.js";
import "../components/Styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Body_Yellow = require("../assets/img/body/Body_Yellow.png");
const Body_Blue = require("../assets/img/body/Body_Blue.png");
const Body_Red = require("../assets/img/body/Body_Red.png");
const Body_White = require("../assets/img/body/Body_White.png");
const body = { Body_Yellow, Body_Blue, Body_Red, Body_White };

const Hair_Long = require("../assets/img/hair/Hair_Long.png");
const Hair_Puka = require("../assets/img/hair/Hair_Puka.png");
const Hair_Short_green = require("../assets/img/hair/Hair_Short_Green.png");
const Hair_Short = require("../assets/img/hair/Hair_Short.png");
const hair = { Hair_Long, Hair_Puka, Hair_Short_green, Hair_Short };

const Project = () => {
  const [select, setSelect] = useState(body.Body_Yellow);
  const [selecthair, setSelectHair] = useState(body.Hair_Short_green);
  const [visible, setVisible] = React.useState(true);
  const [hvisible, sethVisible] = React.useState(false);

  return (
    <div>
      {/* ㅣㅣㅣㅣ오른쪽 버튼ㅣㅣㅣㅣㅣㅣㅣ */}
      <div
        class="Character-clothes"
        onClick={() => {
          setVisible(true);
          sethVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="secondary"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          body
        </Button>
      </div>
      <div
        class="Character-clothes-1"
        onClick={() => {
          setVisible(false);
          sethVisible(true);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          hair
        </Button>
      </div>
      <div class="Character-clothes-2" onClick={() => {}}>
        <Button
          size="lg"
          variant="primary"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          eye
        </Button>
      </div>
      <div class="Character-clothes-3" onClick={() => {}}>
        <Button
          size="lg"
          variant="primary"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          mouth
        </Button>
      </div>
      <div class="Character-clothes-4" onClick={() => {}}>
        <Button
          size="lg"
          variant="primary"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          egg
        </Button>
      </div>
      <div class="Character-clothes-5" onClick={() => {}}>
        <Button
          size="lg"
          variant="primary"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          idol
        </Button>
      </div>
      <div class="Character-clothes-6" onClick={() => {}}>
        <Button
          size="lg"
          variant="primary"
          style={{ float: "right", width: "50%", height: "50%" }}
        >
          back
        </Button>
      </div>

      {/* ㅣㅣㅣㅣ캐릭터ㅣㅣㅣㅣㅣㅣㅣ */}
      <div class="main-Div">
        {/* ㅣㅣㅣㅣbodyㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character">
          <img
            src={select}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣhairㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={selecthair}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣ우측패널ㅣㅣㅣㅣㅣㅣㅣ */}
        {/* ㅣㅣㅣㅣbodyPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {visible && (
          <div class="RightPanel">
            <div>
              <img
                src={body.Body_Red}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_Red);
                }}
              />
              <img
                src={body.Body_White}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_White);
                }}
              />
            </div>
            <div>
              <img
                src={body.Body_Blue}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_Blue);
                }}
              />
              <img
                src={body.Body_Yellow}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_Yellow);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣhairPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {hvisible && (
          <div class="RightPanel">
            <div>
              <img
                src={body.Body_Red}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_Red);
                }}
              />
              <img
                src={body.Body_White}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_White);
                }}
              />
            </div>
            <div>
              <img
                src={body.Body_Blue}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_Blue);
                }}
              />
              <img
                src={body.Body_Yellow}
                class="Card"
                onClick={() => {
                  setSelect(body.Body_Yellow);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* {hvisible && (
        <div class="Character-color button">
          <button
            class="change-color-black"
            onClick={() => {
              setSelectHair(hair.Hair_Long);
            }}
          ></button>
          <button
            class="change-color-Body_Blue"
            onClick={() => {
              setSelectHair(hair.Hair_Short_green);
            }}
          ></button>
          <button
            class="change-color-white"
            onClick={() => {
              setSelectHair(hair.Hair_Short);
            }}
          ></button>
          <button
            class="change-color-Body_Yellow"
            onClick={() => {
              setSelectHair(hair.Hair_Puka);
            }}
          ></button>
        </div>
      )} */}
    </div>
  );
};

export default Project;
