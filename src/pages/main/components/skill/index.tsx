import React from 'react';
import styled from 'styled-components';
import type {ISkillsData} from 'types/type';
import GlobalSection from 'components/common/global-section';
import SectionBody from 'components/common/section-body';
import SectionHeader from 'components/common/section-header';
import {Container} from 'components/common/layout';

const SectionBodyStyle = styled(SectionBody)`
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: center;
  }
`;

interface ISkillProps {
  skills: ISkillsData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  loading: boolean | undefined;
}

const Skill = ({sectionRef}: ISkillProps) => {
  return (
    <Container>
      <GlobalSection
        ref={el => {
          if (el && sectionRef.current) sectionRef.current[0] = el;
        }}
      >
        <SectionHeader title={'Skills'} />
        <span>제가 가진 기술역량 소개해드립니다.</span>

        <SectionBodyStyle>
          <SectionBody.Inner>
            <div>
              <div>
                <div>
                  <strong>FrontEnd</strong>
                  <ol>
                    <li>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>TypeScript</li>
                        <li>React&Next</li>
                        <li>Vue&Nuxt</li>
                        {/* <li>Svelt</li> */}
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>Redux</li>
                        <li>Vuex</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>SCSS</li>
                        <li>Styled-Component</li>
                        <li>Emotion</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <strong>BackEnd</strong>
                  <ol>
                    <li>
                      <ul>
                        <li>Node & Express</li>
                        <li>Kotlin & Spring</li>
                        <li>Firebase</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <strong>WebView</strong>
                  <ol>
                    <li>
                      <ul>
                        <li>PWD</li>
                        <li>ReactNative</li>
                        <li>AndroidStudio</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <strong>ETC</strong>
                  <ol>
                    <li>
                      <ul>
                        <li>Webpack</li>
                        <li>npm & yarn</li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>Git & GitFlow</li>
                        <li>Vue&Nuxt</li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>Figma</li>
                        <li>Jira</li>
                        <li>Notion</li>
                        <li>Slack</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </SectionBody.Inner>

          <SectionBody.Inner ratio={2}>
            <div></div>
          </SectionBody.Inner>
        </SectionBodyStyle>
      </GlobalSection>
    </Container>
  );
};

export default Skill;
