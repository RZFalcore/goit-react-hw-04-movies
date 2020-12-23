import React from "react";

import { getImgUrl } from "../../utils/imagePathFinder";

const CastMember = ({ info }) => {
  const { name, profile_path, character } = info;
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

export default CastMember;
