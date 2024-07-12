import styled from "styled-components";
import { useRef } from "react";

const Viewers = (props) => {
  const videos = useRef([]);

  const handleMouseEnter = (index) => {
    videos.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videos.current[index].pause();
    videos.current[index].currentTime = 0; // Reset to the beginning
  };

  return (
    <Container>
      {videoData.map((video, index) => (
        <Wrap
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img src={video.imgSrc} alt="" />
          <video
            ref={(el) => (videos.current[index] = el)}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
          >
            <source src={video.videoSrc} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};

const videoData = [
  {
    imgSrc: "/images/viewers-disney.png",
    videoSrc: "/videos/1564674844-disney.mp4",
  },
  {
    imgSrc: "/images/viewers-pixar.png",
    videoSrc: "/videos/1564676714-pixar.mp4",
  },
  {
    imgSrc: "/images/viewers-marvel.png",
    videoSrc: "/videos/1564676115-marvel.mp4",
  },
  {
    imgSrc: "/images/viewers-starwars.png",
    videoSrc: "/videos/1608229455-star-wars.mp4",
  },
  {
    imgSrc: "/images/viewers-national.png",
    videoSrc: "/videos/1564676296-national-geographic.mp4",
  },
];

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
