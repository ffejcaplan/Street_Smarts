import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import '../../App.css';

const MyTitleMessage = styled.h1`
  //   position: absolute;
  //   width: 100%;
  //   top: 22rem;
  //   z-index: 1;
  //   margin-top: -125px;
  //   text-align: center;
  //   strong {
  //     font-size: 1.25em;
  //   }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      position: relative;
      font-size: 35px;
      letter-spacing: 2px;
      position: absolute;
      width: 100%;
      text-align: center;
      //   z-index: 1;
      margin-top: -100px;
      top: 22rem;
      left: 1rem;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        {/* <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Anand Kumar Jha</strong>
          </span>
        </div> */}
        <div className="sub">
          <Typewriter
            options={{
              strings: ['Street', 'Smarts', 'Street Smarts!'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
