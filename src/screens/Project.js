import React, { useState } from "react";
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

const Eye_Arch = require("../assets/img/eye/Eye_Arch.png");
const Eye_Circle = require("../assets/img/eye/Eye_Circle.png");
const Eye_Circle_Green = require("../assets/img/eye/Eye_Circle_Green.png");
const Eye_Triangle = require("../assets/img/eye/Eye_Triangle.png");
const eye = { Eye_Arch, Eye_Circle, Eye_Circle_Green, Eye_Triangle };

const Mouth_Blue = require("../assets/img/mouth/Mouth_Blue.png");
const Mouth_Red = require("../assets/img/mouth/Mouth_Red.png");
const Mouth_Pink = require("../assets/img/mouth/Mouth_Pink.png");
const Mouth_Yellow = require("../assets/img/mouth/Mouth_Yellow.png");
const mouth = { Mouth_Blue, Mouth_Pink, Mouth_Red, Mouth_Yellow };

const Egg_Mint = require("../assets/img/egg/Egg_Mint.png");
const Egg_Pink = require("../assets/img/egg/Egg_Pink.png");
const Egg_PurPle = require("../assets/img/egg/Egg_Purple.png");
const Egg_White = require("../assets/img/egg/Egg_White.png");
const egg = { Egg_Mint, Egg_Pink, Egg_PurPle, Egg_White };

const Idol_Aespa = require("../assets/img/idol/Idol_Aespa.png");
const Idol_Bts = require("../assets/img/idol/Idol_Bts.png");
const Idol_Ive = require("../assets/img/idol/Idol_Ive.png");
const Idol_Nct = require("../assets/img/idol/Idol_Nct.png");
const idol = { Idol_Aespa, Idol_Bts, Idol_Ive, Idol_Nct };

const Back_Mint = require("../assets/img/back/Back_Mint.png");
const Back_Pink = require("../assets/img/back/Back_Pink.png");
const Back_Rainbow = require("../assets/img/back/Back_Rainbow.png");
const Back_Zebra = require("../assets/img/back/Back_Zebra.png");
const Back = { Back_Mint, Back_Pink, Back_Rainbow, Back_Zebra };

const Project = () => {
  const [BodySelect, setBodySelect] = useState(body.Body_White);
  const [HairSelect, setHairSelect] = useState();
  const [EyeSelect, setEyeSelect] = useState();
  const [MouthSelect, setMouthSelect] = useState();
  const [EggSelect, setEggSelect] = useState();
  const [IdolSelect, setIdolSelect] = useState();
  const [BackSelect, setBackSelect] = useState();

  const [BodyVisible, setBodyVisible] = React.useState(true);
  const [HairVisible, setHairVisible] = React.useState(false);
  const [EyeVisible, setEyeVisible] = React.useState(false);
  const [MouthVisible, setMouthVisible] = React.useState(false);
  const [EggVisible, setEggVisible] = React.useState(false);
  const [IdolVisible, setIdolVisible] = React.useState(false);
  const [BackVisible, setBackVisible] = React.useState(false);
  return (
    <div>
      {/* ㅣㅣㅣㅣ오른쪽 버튼ㅣㅣㅣㅣㅣㅣㅣ */}
      <div
        class="SideBtn"
        onClick={() => {
          setBodyVisible(true);
          setHairVisible(false);
          setEyeVisible(false);
          setMouthVisible(false);
          setEggVisible(false);
          setIdolVisible(false);
          setBackVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            float: "right",
            width: "50%",
            height: "50%",
            fontSize: "1vmax",
          }}
        >
          body
        </Button>
      </div>

      <div
        class="SideBtn-1"
        onClick={() => {
          setBodyVisible(false);
          setHairVisible(true);
          setEyeVisible(false);
          setMouthVisible(false);
          setEggVisible(false);
          setIdolVisible(false);
          setBackVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            float: "right",
            width: "50%",
            height: "50%",
            fontSize: "1vmax",
          }}
        >
          hair
        </Button>
      </div>

      <div
        class="SideBtn-2"
        onClick={() => {
          setBodyVisible(false);
          setHairVisible(false);
          setEyeVisible(true);
          setMouthVisible(false);
          setEggVisible(false);
          setIdolVisible(false);
          setBackVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            fontSize: "1vmax",
            float: "right",
            width: "50%",
            height: "50%",
          }}
        >
          eye
        </Button>
      </div>

      <div
        class="SideBtn-3"
        onClick={() => {
          setBodyVisible(false);
          setHairVisible(false);
          setEyeVisible(false);
          setMouthVisible(true);
          setEggVisible(false);
          setIdolVisible(false);
          setBackVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            fontSize: "1vmax",
            float: "right",
            width: "50%",
            height: "50%",
          }}
        >
          mouth
        </Button>
      </div>
      <div
        class="SideBtn-4"
        onClick={() => {
          setBodyVisible(false);
          setHairVisible(false);
          setEyeVisible(false);
          setMouthVisible(false);
          setEggVisible(true);
          setIdolVisible(false);
          setBackVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            fontSize: "1vmax",
            float: "right",
            width: "50%",
            height: "50%",
          }}
        >
          egg
        </Button>
      </div>

      <div
        class="SideBtn-5"
        onClick={() => {
          setBodyVisible(false);
          setHairVisible(false);
          setEyeVisible(false);
          setMouthVisible(false);
          setEggVisible(false);
          setIdolVisible(true);
          setBackVisible(false);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            fontSize: "1vmax",
            float: "right",
            width: "50%",
            height: "50%",
          }}
        >
          idol
        </Button>
      </div>

      <div
        class="SideBtn-6"
        onClick={() => {
          setBodyVisible(false);
          setHairVisible(false);
          setEyeVisible(false);
          setMouthVisible(false);
          setEggVisible(false);
          setIdolVisible(false);
          setBackVisible(true);
        }}
      >
        <Button
          size="lg"
          variant="dark"
          style={{
            fontSize: "1vmax",
            float: "right",
            width: "50%",
            height: "50%",
          }}
        >
          back
        </Button>
      </div>

      {/* ㅣㅣㅣㅣ캐릭터ㅣㅣㅣㅣㅣㅣㅣ */}
      <div class="main-Div">
        {/* ㅣㅣㅣㅣbackㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character">
          <img
            src={BackSelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣbodyㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={BodySelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣhairㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={HairSelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣeyeㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={EyeSelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣeggㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={EggSelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣmouthㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={MouthSelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣidolㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={IdolSelect}
            id="chara-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* ㅣㅣㅣㅣ우측패널ㅣㅣㅣㅣㅣㅣㅣ */}
        {/* ㅣㅣㅣㅣbodyPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BodyVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={body.Body_Red}
                class="Card"
                onClick={() => {
                  setBodySelect(body.Body_Red);
                }}
              />
              <img
                src={body.Body_White}
                class="Card"
                onClick={() => {
                  setBodySelect(body.Body_White);
                }}
              />
            </div>
            <div>
              <img
                src={body.Body_Blue}
                class="Card"
                onClick={() => {
                  setBodySelect(body.Body_Blue);
                }}
              />
              <img
                src={body.Body_Yellow}
                class="Card"
                onClick={() => {
                  setBodySelect(body.Body_Yellow);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣhairPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {HairVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={hair.Hair_Long}
                class="Card"
                onClick={() => {
                  setHairSelect(hair.Hair_Long);
                }}
              />
              <img
                src={hair.Hair_Puka}
                class="Card"
                onClick={() => {
                  setHairSelect(hair.Hair_Puka);
                }}
              />
            </div>
            <div>
              <img
                src={hair.Hair_Short}
                class="Card"
                onClick={() => {
                  setHairSelect(hair.Hair_Short);
                }}
              />
              <img
                src={hair.Hair_Short_green}
                class="Card"
                onClick={() => {
                  setHairSelect(hair.Hair_Short_green);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣeyePanelㅣㅣㅣㅣㅣㅣㅣ */}
        {EyeVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={eye.Eye_Arch}
                class="Card"
                onClick={() => {
                  setEyeSelect(eye.Eye_Arch);
                }}
              />
              <img
                src={eye.Eye_Circle}
                class="Card"
                onClick={() => {
                  setEyeSelect(eye.Eye_Circle);
                }}
              />
            </div>
            <div>
              <img
                src={eye.Eye_Circle_Green}
                class="Card"
                onClick={() => {
                  setEyeSelect(eye.Eye_Circle_Green);
                }}
              />
              <img
                src={eye.Eye_Triangle}
                class="Card"
                onClick={() => {
                  setEyeSelect(eye.Eye_Triangle);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣmouthPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {MouthVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={mouth.Mouth_Blue}
                class="Card"
                onClick={() => {
                  setMouthSelect(mouth.Mouth_Blue);
                }}
              />
              <img
                src={mouth.Mouth_Yellow}
                class="Card"
                onClick={() => {
                  setMouthSelect(mouth.Mouth_Yellow);
                }}
              />
            </div>
            <div>
              <img
                src={mouth.Mouth_Pink}
                class="Card"
                onClick={() => {
                  setMouthSelect(mouth.Mouth_Pink);
                }}
              />
              <img
                src={mouth.Mouth_Red}
                class="Card"
                onClick={() => {
                  setMouthSelect(mouth.Mouth_Red);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣeggPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {EggVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={egg.Egg_Mint}
                class="Card"
                onClick={() => {
                  setEggSelect(egg.Egg_Mint);
                }}
              />
              <img
                src={egg.Egg_Pink}
                class="Card"
                onClick={() => {
                  setEggSelect(egg.Egg_Pink);
                }}
              />
            </div>
            <div>
              <img
                src={egg.Egg_PurPle}
                class="Card"
                onClick={() => {
                  setEggSelect(egg.Egg_PurPle);
                }}
              />
              <img
                src={egg.Egg_White}
                class="Card"
                onClick={() => {
                  setEggSelect(egg.Egg_White);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣidolPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {IdolVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={idol.Idol_Aespa}
                class="Card"
                onClick={() => {
                  setIdolSelect(idol.Idol_Aespa);
                }}
              />
              <img
                src={idol.Idol_Bts}
                class="Card"
                onClick={() => {
                  setIdolSelect(idol.Idol_Bts);
                }}
              />
            </div>
            <div>
              <img
                src={idol.Idol_Ive}
                class="Card"
                onClick={() => {
                  setIdolSelect(idol.Idol_Ive);
                }}
              />
              <img
                src={idol.Idol_Nct}
                class="Card"
                onClick={() => {
                  setIdolSelect(idol.Idol_Nct);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣbackPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BackVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Back.Back_Mint}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Mint);
                }}
              />
              <img
                src={Back.Back_Pink}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Pink);
                }}
              />
            </div>
            <div>
              <img
                src={Back.Back_Rainbow}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Rainbow);
                }}
              />
              <img
                src={Back.Back_Zebra}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Zebra);
                }}
              />
            </div>
          </div>
        )}
      </div>
      <Button style={{ float: "right", marginRight: "4vmax" }}>NFT</Button>
    </div>
  );
};

export default Project;
