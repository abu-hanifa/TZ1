
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
import close from './close.svg';
import React from "react";

export const PopUpContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 50px;
`;

export const PopUpStage = styled.div`
  float: left;
  background: #fff;
`;

export const PopUpHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 5px 32px;
`;

export const PopUpCloseBtn = styled.div`
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  background: url(${close}) center center no-repeat;
  cursor: pointer;
  opacity: 0.5;
  margin-left: auto; !important;
  div{
    width: 100%;
    height: 100%;
  }
`;

export const PopUpRemoveBtn = styled.div`
  position: absolute;
  left: 90%;
  top: 62%;
  width: 13px;
  height: 13px;
  background: url(${close}) center center no-repeat;
  cursor: pointer;
  opacity: 0.9;
`;

export const PopUpContent = styled.div`
  position: relative;
  float: left;
  width: 100%;
  padding: 16px 32px;
  padding-bottom: 15px;
  
  div{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const PopUpFooterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  float: left;
  width: 100%;
  padding: 0.5rem 32px;
  padding-bottom: 1.5rem;
  text-align: end;
  .btn.pull-right {
    margin-left: 5px;
  }
`;

export const PopUpLockScreen = styled.div`
  float: left;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  .fa {
    color: #fff;
  }
`;

PopUpLockScreen.display = 'LockScreen';

export const PopUpFooter = styled.div`
  .btn {
    padding: 10px 25px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #228ece;
    border: none;
    .fa {
      font-size: 15px;
      margin: 0 5px 0 -15px;
    }
  }

  .btn-danger {
    background-color: #b1b3c3;
  }

  .btn:active {
    box-shadow: none;
  }

  .btn.cancel {
    color: #228ece;
    background-color: transparent;
  }

  .btn.cancel:hover {
    color: #162844;
  }
`;

PopUpFooter.display = 'PopUpFooter';
