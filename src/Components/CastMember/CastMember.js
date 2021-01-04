import React from "react";
import PropTypes from "prop-types";

import { getImgUrl } from "../../utils/imagePathFinder";

const CastMember = ({ name, profile_path, character }) => {
  const url = getImgUrl(profile_path);
  return (
    <>
      {url && (
        <>
          <h3>{name}</h3>
          <img src={url} alt={name} height="120px" />
          {character && (
            <p>
              as: <i>{character}</i>
            </p>
          )}
        </>
      )}
    </>
  );
};

CastMember.propTypes = {
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  character: PropTypes.string.isRequired,
};

export default CastMember;
