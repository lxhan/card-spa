import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Subtitle } from "../assets/images/main-subtitle.svg";
import Background from "../assets/images/background-oval.svg";
import Animation from "../assets/images/card3d.gif";
import Button from "./_common/Button";

const fadeInDownAnimation = keyframes`  
  ${fadeInDown}
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;
const FadeInDiv = styled.div<{ duration?: number }>`
  animation: 1s ${fadeInDownAnimation};
  animation-delay: ${(props) => props?.duration}ms;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

const TranslateButton = styled(Button)`
  :hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

const Main: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
      className="flex flex-col items-center h-screen bg-no-repeat bg-top"
    >
      <div className="text-center">
        <FadeInDiv className="mt-12 md:mt-16">
          <Logo className="mx-auto" />
        </FadeInDiv>
        <FadeInDiv duration={200} className="mt-8 md:mt-16">
          <h1 className="w-68 text-white text-3xl leading-tight">
            연애에 관한 궁금증, 다 해소해줄게.
          </h1>
        </FadeInDiv>
      </div>
      <FadeInDiv duration={1000} className="mt-8 md:mt-12 lg:mt-16">
        <Subtitle />
      </FadeInDiv>
      <FadeInDiv duration={1500} className="mt-8 md:mt-12 lg:mt-16">
        <img src={Animation} alt="TAROT" className="w-64 md:w-72 lg:w-80" />
      </FadeInDiv>
      <FadeInDiv duration={2000}>
        <Link to="/gender">
          <TranslateButton title="타로점 보러가기" />
        </Link>
      </FadeInDiv>
      <FadeInDiv duration={2500}>
        <a
          href="https://mbti.amanda.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TranslateButton title="연애 유형 테스트 하기" outline={true} />
        </a>
      </FadeInDiv>
    </div>
  );
};

export default Main;
