import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Avatar } from "@mui/material";
import styles from "../styles/review.module.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/material";
import {data} from '../comps/data'

const Previous = (props) => {
  console.log(props)
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "green", fontSize: "40px" }} />
    </div>
  );
};


const Next = (props) => {
  const { className, onClick } = props;
     console.log(props);
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "green", fontSize: "40px" }} />
    </div>
  );
};

function review() {
  // we will create a function that handles the onClick of the arrow
  
  return (
    <div  className={styles.main} style={{ height: "100vh"}}>
      <div
        className={styles.review}
        style={{ display: "flex", marginTop: 50, justifyContent: "center" }}
      >
        <div style={{ width: "50%",textAlign:"center", marginTop:100}}>
          {/* to use a custom icon we have to pass a prop to the slider */}
           <h1 style={{marginBottom: 20}}>Reviews</h1>
          <Slider
              //  prevArrow={<Previous/>}
              //  nextArrow={<Next/>}
              dots
          >
            <Card data ={data} img="/img/lady.png" />
            <Card img="/img/man.png" />
            <Card img="/img/gril2.png" />
            <Card img="/img/man2.png" />
            <Card img="/img/girl3.png" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "lightgrey",
        fontWeight: "400",
      }}
    >
      <Avatar
        // to style our image
        imgProps={{
          style: {
            borderRadius: "50%",
            display: "flex",
            marginBottom:20, 
            justifyContent: "center",
          },
        }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "none",
          padding: 7,
        }}
      />
      <p>I have had the best experience using fluffyclean services</p>
      <p>
        <span
          style={{
            fontWeight: "500",
            marginTop: 20,
            fontStyle: "italic",
            color: "green",
          }}
        >
          Alma Tima
        </span>
        , Public Advocate
      </p>
    </div>
  );
};


export default review;
