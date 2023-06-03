import React from 'react';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import media from '../../assets/styles/constants/media';
import styled from 'styled-components';

const GlobalFooter = () => {
  return (
    <FottorList>
      <ListItem className="period">
        <dt className="sr-only">Period</dt>
        <dd>2021-present</dd>
      </ListItem>

      <ListItem className="license">
        <dt className="sr-only">License</dt>
        <dd>
          <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
            MIT Licensed
          </a>
        </dd>
      </ListItem>

      <ListItem className="author">
        <dt className="sr-only">Author</dt>
        <dd>
          <address>
            <a href="https://github.com/sonseong10" target="_blank" rel="noopener noreferrer">
              Son seongyeol
            </a>
          </address>
        </dd>
      </ListItem>
    </FottorList>
  );
};

export default GlobalFooter;

const FottorList = styled.dl`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 140px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography.small}
  color: ${palette.gray[200]};

  dd {
    margin-left: 0px;

    a {
      color: ${palette.gray[200]};
      text-decoration: none;

      &:active {
        opacity: 0.6;
      }

      ${media.desktop} {
        &:hover {
          opacity: 0.6;
        }
      }
    }

    address {
      font-style: normal;
    }
  }

  &.license::after {
    content: '|';
    margin: 0 4px;
  }

  &.period::after {
    content: 'ⓒ';
    margin: 0 4px;
  }
`;
