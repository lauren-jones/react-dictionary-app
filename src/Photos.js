import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section>
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.landscape} key={index} alt="" />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
