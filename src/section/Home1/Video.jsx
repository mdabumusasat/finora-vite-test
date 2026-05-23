import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import VideoBg from "../../assets/images/background/video1.jpg";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-section position-relative">
        {/* Background Image */}
        <div className="bg-image bg">
          <img
            src={VideoBg}
            alt="Video Background"
            className="img-fluid w-100"
          />
        </div>

        {/* Play Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="play-now border-0 bg-transparent"
        >
          <i className="icon fa-solid fa-play"></i>
          <span className="ripple"></span>
        </button>

        {/* Lines */}
        <div className="line-box">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>

      {/* Video Modal */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoSection;