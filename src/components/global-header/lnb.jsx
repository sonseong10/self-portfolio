import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../assets/styles/components/reset-button";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";
import { useHistory } from "react-router-dom";

const Lnb = ({ artwork }) => {
  const history = useHistory();

  const [item, setUid] = useState({});

  useEffect(() => {
    const pathname = history.location.pathname;
    const uid = pathname.charAt(pathname.length - 1);
    setUid({ ...artwork[uid] });
  }, [artwork, history.location.pathname]);

  const goToBack = () => {
    history.goBack();
  };

  return (
    <>
      {item && <h2 css={title}>{item.title}</h2>}

      <button css={backBtn} onClick={goToBack} type="button">
        Back
      </button>
    </>
  );
};

export default Lnb;

const title = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  ${typography.base}
  color: ${palette.gray[100]};
  font-weight: 400;
  transform: translate(-50%, -50%);
`;

const backBtn = css`
  position: absolute;
  right: 0;
  ${resetButton}
  padding: 0 8px;
  height: 46px;
  ${typography.small}
  font-weight: 700;
  color: ${palette.gray[100]};

  :active {
    color: ${palette.brandTheme};
  }

  ${media.tablet} {
    ${typography.base}
    :hover {
      color: ${palette.brandTheme};
    }
  }
`;
