import {
  SLIDER_IMAGE,
  SLIDER_CREDITS,
  CONTENT_DETAILS_ID,
  CONTENT_DETAILS_TITEL,
  CONTENT_DETAILS_IMAGE,
  CONTENT_DETAILS_CREATED_AT,
  CONTENT_DETAILS_PRICE,
  CONTENT_DETAILS_CREATED_BY,
} from "../services/domService.js";

/***** Print to browser *****/
export const renderSlider = (pictures, counter = 0) => {
  if (!pictures.length) return null;
  SLIDER_IMAGE.src = pictures[counter].url;
  SLIDER_IMAGE.alt = pictures[counter].alt;
  SLIDER_CREDITS.innerHTML = pictures[counter].credits;
};

export const onContentDetails = (pictures, alt) => {
  let pic = pictures.find((pic) => pic.alt === alt);

  CONTENT_DETAILS_ID.innerHTML = pic._id;
  CONTENT_DETAILS_CREATED_AT.innerHTML = pic.createdAt;
  CONTENT_DETAILS_PRICE.innerHTML = pic.price;
  CONTENT_DETAILS_TITEL.innerHTML = pic.alt;
  CONTENT_DETAILS_CREATED_BY.innerHTML = pic.credits;
  CONTENT_DETAILS_IMAGE.src = pic.url;
};

export const setCounterOtomats = (pictures) => {
  for (let i = pictures.length - 1; i < pictures.length; i++) {
    setInterval(function () {
      SLIDER_IMAGE.src = pictures[i].url;
      SLIDER_IMAGE.alt = pictures[i].alt;
      SLIDER_CREDITS.innerHTML = pictures[i].credits;

      if (i !== 0) {
        i--;
      } else {
        i = pictures.length - 1;
      }
    }, 2000);
  }
};
