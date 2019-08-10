import * as React from "react";

import { injectGlobal } from 'emotion';
import { Global, css } from "@emotion/core";

import './font.css';

// const fontUrl = "http://fonts.googleapis.com/css?family=Noto+Sans+JP";
// injectGlobal`{
//    @font-face {
//             src: url(http://fonts.googleapis.com/css?family=Noto+Sans+JP)
//             font-family: "Noto Sans JP", "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
//   }
// }`

export const GlobalStyle: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            font-family: "Noto Sans JP", "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
            font-size: 16px;
            line-height: 1.6;
            background: #fff;
          }
        `}
      />
    </>
  );
}