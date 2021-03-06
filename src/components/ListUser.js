import React from "react";
import styled from "styled-components";

const ListUser = ({ ProfilePicture, Name, Link, Company, Address, Stars }) => (
  <Container>
    <ul>
      <li>
        <div className="BoxInforStart">
          <div className="BoxImgPerfil">
            <img src={ProfilePicture} />
          </div>
          <div className="BoxNome">
            <h3>
              {Name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
              >
                <path
                  d="M0.4375 14.125L6.5625 8L0.4375 1.875L2.3125 0L10.3125 8L2.3125 16L0.4375 14.125Z"
                  fill="black"
                />
              </svg>
            </h3>
            <p>@{Link}</p>
          </div>
          <div className="BoxDelete">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  d="M13.9844 0.984375V3H0.015625V0.984375H3.48438L4.51562 0H9.48438L10.5156 0.984375H13.9844ZM1 15.9844V3.98438H13V15.9844C13 16.5156 12.7969 16.9844 12.3906 17.3906C11.9844 17.7969 11.5156 18 10.9844 18H3.01562C2.48438 18 2.01562 17.7969 1.60938 17.3906C1.20312 16.9844 1 16.5156 1 15.9844Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="BoxInforEnd">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M11 8V9.34375H9.65625V8H11ZM11 5.34375V6.65625H9.65625V5.34375H11ZM12.3438 10.6562V4H7V5.34375H8.34375V6.65625H7V8H8.34375V9.34375H7V10.6562H12.3438ZM5.65625 2.65625V1.34375H4.34375V2.65625H5.65625ZM5.65625 5.34375V4H4.34375V5.34375H5.65625ZM5.65625 8V6.65625H4.34375V8H5.65625ZM5.65625 10.6562V9.34375H4.34375V10.6562H5.65625ZM3 2.65625V1.34375H1.65625V2.65625H3ZM3 5.34375V4H1.65625V5.34375H3ZM3 8V6.65625H1.65625V8H3ZM3 10.6562V9.34375H1.65625V10.6562H3ZM7 2.65625H13.6562V12H0.34375V0H7V2.65625Z"
                fill="#E5E5E5"
              />
            </svg>
            <p>{Company}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
            >
              <path
                d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z"
                fill="#E5E5E5"
              />
            </svg>
            <p>{Address}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M7 10.5L2.875 13L3.96875 8.3125L0.34375 5.15625L5.125 4.75L7 0.34375L8.875 4.75L13.6562 5.15625L10.0312 8.3125L11.125 13L7 10.5Z"
                fill="#E5E5E5"
              />
            </svg>
            <p>{Stars}</p>
          </div>
        </div>
      </li>
    </ul>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      background-color: #fff;
      padding: 10px 15px;
      width: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 4px #cdcdcd;
      margin: 0px 5% 10px 5%;
      display: flex;
      flex-direction: column;
      div.BoxInforStart {
        display: flex;
        flex-direction: row;
        div.BoxImgPerfil {
          width: 70px;
          height: 70px;
          margin-right: 15px;
          justify: center;
          align-items: center;
          img {
            width: 70px;
            height: 70px;
          }
        }
        div.BoxNome {
          display: flex;
          justify-content: center;
          flex-direction: column;
          h3 {
            font-size: 22px;
            line-height: 40px;
            color: #000;
          }
          svg {
            margin-left: 30px;
            height: 15px;
          }
          p {
            color: black;
            font-size: 16px;
          }
        }
        div.BoxDelete {
          display: flex;
          flex: 1;
          justify-content: end;
          padding: 5px;
          span {
            background: #c5c5c5;
            display: flex;
            height: 35px;
            width: 35px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
          }
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
      //--------------------
      div.BoxInforEnd {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        div {
          display: flex;
          margin-right: 20px;
          flex-direction: row;
          align-items: center;
          svg {
            width: 16px;
            margin-right: 10px;
          }
          p {
            font-size: 15px;
            color: #7e7e7e;
          }
        }
      }
    }
  }
`;

export default ListUser;
