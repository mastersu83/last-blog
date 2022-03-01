import React from "react";
import { Divider, Skeleton } from "antd";
import loadingGif from "../../assets/img/810.gif";

const Preloader = ({ image, text, loading }) => {
  return (
    <>
      <div className="skeleton">
        {text && <Skeleton active style={{ width: "70%" }} />}
        {image && <Skeleton.Image style={{ height: "100%" }} />}
        {loading && <img src={loadingGif} alt="" />}
      </div>
      <Divider />
    </>
  );
};

export default Preloader;
