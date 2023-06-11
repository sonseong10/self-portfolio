import React, {useEffect, useRef, useState} from 'react';
import {resetButton} from '../../../assets/styles/components/reset-button';
import media from '../../../assets/styles/constants/media';
import palette from '../../../assets/styles/constants/palette';
import typography from '../../../assets/styles/constants/typograpy';
import Observer from '../../../utils/observer';
import ThemeButton from '../../common/theme-button';
import styled, {css} from 'styled-components';

const listItem = ['Skills', 'Work', 'Projects', 'Artworks'];

interface IGnbProps {
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  toggleTheme: () => void;
  theme: string;
}

const Gnb = ({sectionRef, toggleTheme, theme}: IGnbProps) => {
  const tabRef = useRef<HTMLButtonElement>(null);
  const [active, setActiveTab] = useState<boolean | Element>(false);

  useEffect(() => {
    const observer = Observer(setActiveTab);

    sectionRef.current.forEach(tab => observer.observe(tab));

    return () => observer.disconnect();
  }, [sectionRef]);

  const onBtnClick = (index: number) => {
    sectionRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    setActiveTab(sectionRef.current[index]);
  };
  return (
    <>
      <NavigationBar>
        <h2 className="sr-only">global navgation</h2>

        <ul>
          {listItem.map((item, index) => (
            <li key={index}>
              <button
                ref={tabRef}
                className={sectionRef.current[index] === active ? 'isActive' : undefined}
                onClick={() => onBtnClick(index)}
                type="button"
                aria-label={`${item}으로 이동`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </NavigationBar>
      <ThemeButton toggleTheme={toggleTheme} theme={theme} />
    </>
  );
};

export default React.memo(Gnb);

const gnbState = css`
  position: absolute;
  bottom: -7px;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #0066ff;
  content: '';
`;

const NavigationBar = styled.nav`
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding-left: 0;
    list-style: none;

    li {
      flex: 1;

      button {
        ${resetButton};
        position: relative;
        padding: 0 8px;
        height: 46px;
        ${typography.small}
        font-weight: 700;
        color: ${palette.gray[100]};

        :active {
          color: ${palette.brandTheme};
          &::after {
            ${gnbState}
          }
        }

        &.isActive {
          color: ${palette.brandTheme};
          &::after {
            ${gnbState}
          }
        }

        ${media.tablet} {
          ${typography.base}
          :hover {
            color: ${palette.brandTheme};
            &::after {
              ${gnbState}
            }
          }
        }
      }
    }
  }
`;
