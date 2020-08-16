import React from "react";

export default function ImageList(props) {
  const images = props.images.map(({ id, alt_description, urls }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });
  return <div>{images}</div>;
}
