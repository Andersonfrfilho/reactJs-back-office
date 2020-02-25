import React from 'react';
import styled from 'styled-components';

const MainNavDiv = styled.div`
  display: none;
  font-weight: 300;
  font-size: 1.7rem;
  background-color: #f5f5f5;
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  border-top: #d3d3d3 solid 1px;
  border-bottom: #d3d3d3 solid 1px;
  z-index: 3;
  @media (min-width: 51rem) {
    display: block;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  border-bottom: 1px dotted #d3d3d3;
  text-indent: 3rem;
  padding: 0.5rem 0 0.5rem 0;
  height: 2.1rem;
  & :last-child {
    border: none;
  }
  & a {
    text-decoration: none;
    color: #000;
    webkittransition: text-indent 0.5s ease, color 0.5s ease;
    moztransition: text-indent 0.5s ease, color 0.5s ease;
    transition: text-indent 0.5s ease, color 0.5s ease;
    display: block;
    width: 200px;
  }
  & :hover {
    text-indent: 4rem;
    & a {
      color: $secondary-color;
    }
  }
  & span {
    font-size: 1.3rem;
  }
`;

const MainNav = props => {
  return (
    <MainNavDiv>
      <Ul>
        <Li className={props.linkIndentHome}>
          <a href="#" onClick={props.homeContent}>
            HOME
          </a>
        </Li>
        <Li className={props.linkIndentSonata}>
          <a href="#" onClick={props.sonataContent}>
            SONATAS <span>(adults)</span>
          </a>
        </Li>
        <Li className={props.linkIndentIntermezzo}>
          <a href="#" onClick={props.intermezzoContent}>
            INTERMEZZI <span>(adults)</span>
          </a>
        </Li>
        <Li className={props.linkIndentSonatina}>
          <a href="#" onClick={props.sonatinaContent}>
            SONATINA <span>(Children)</span>
          </a>
        </Li>
        <Li className={props.linkIndentDatesFees}>
          <a href="#" onClick={props.datesFeesContent}>
            DATES & FEES
          </a>
        </Li>
        <Li className={props.linkIndentLive}>
          <a href="#" onClick={props.liveContent}>
            LIVE! & CHAT
          </a>
        </Li>
        <Li className={props.linkIndentVideoArchive}>
          <a href="#" onClick={props.videoArchiveContent}>
            VIDEO ARCHIVE
          </a>
        </Li>
        <Li className={props.linkIndentGeneral}>
          <a href="#" onClick={props.generalContent}>
            GENERAL
          </a>
        </Li>
        <Li className={props.linkIndentMisc}>
          <a href="#" onClick={props.miscContent}>
            MISC
          </a>
        </Li>
      </Ul>
    </MainNavDiv>
  );
};

export default MainNav;
