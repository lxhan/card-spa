import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as Kakao } from "../../assets/icons/icon-kakaotalk.svg";
import { ReactComponent as Facebook } from "../../assets/icons/icon-facebook.svg";
import { ReactComponent as Url } from "../../assets/icons/icon-url.svg";
import "react-toastify/dist/ReactToastify.css";

const copyToClipboard = () => {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = window.location.href;
  textArea.focus();
  textArea.select();

  document.execCommand("copy");
  document.body.removeChild(textArea);

  toast.info(
    <span>
      <span role="img" aria-label="unicorn">
        🦄
      </span>
      &nbsp;&nbsp;클립보드에 복사되었습니다!&nbsp;&nbsp;
      <span role="img" aria-label="unicorn">
        🦄
      </span>
    </span>,
    {
      position: "bottom-center",
      autoClose: 1000,
    }
  );
};

const Share: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center font-apple mb-24">
      <h4 className="text-sm text-gray-500 mb-8">결과 공유하기</h4>
      <div className="flex flex-row items-center justify-between w-48">
        <Facebook />
        <Kakao />
        <Url className="cursor-pointer" onClick={copyToClipboard} />
      </div>
      <h4 className="text-sm text-gray-500 font-apple mt-12 mb-8">사이트 링크 공유하기</h4>
      <div
        onClick={copyToClipboard}
        className="flex flex-row items-center justify-between w-80 h-9 border border-gray-300 rounded-lg cursor-pointer"
      >
        <span className="text-gray-500 text-sm ml-4">https://tarot.amanda.co.kr</span>
        <span className="text-white text-center bg-purple-600 h-full w-16 rounded-r-lg leading-9">
          복사
        </span>
      </div>
      <ToastContainer
        style={{ textAlign: "center" }}
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
};

export default Share;
