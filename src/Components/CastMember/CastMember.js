import React from "react";

import { getImgUrl } from "../../utils/imagePathFinder";

const CastMember = ({ info }) => {
  const { name, profile_path, character } = info;
  return (
    <>
      <h3>{name}</h3>
      <img src={getImgUrl(profile_path)} alt={name} height="120px" />
      {character && (
        <p>
          as: <i>{character}</i>
        </p>
      )}
    </>
  );
};

export default CastMember;
