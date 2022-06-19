import DISPLAY from "../models/displayModel.js";
import { onChangeDisplayMode } from "../routes/router.js";
import renderTable from "../components/renderTable.js";
import renderCards from "./../components/renderCards.js";
import { handleDeletePic } from "../app.js";
import { handleEditPic } from "./picService.js";

import { } from "./domService.js";
import renderCardsFromFavorites from "../components/renderCardsFromFavorites.js";

window.y = {};

export const handleDisplayMode = (display, pictures) => {
  onChangeDisplayMode(display, pictures);
  if (display === DISPLAY.TABLE) {
    renderTable(pictures);
    pictures.forEach((pic) => {
      addOnDelete(pic._id);
      addOnEditPic(pictures, pic._id);
    });
  }
  if (display === DISPLAY.CARDS) {
    renderCards(pictures);
    pictures.forEach((pic) => {
      addOnFromFavoritesCards(pic._id, pictures);
    });
  }
};

// Add a listener to delete an certificate
const addOnDelete = (id) => {
  document
    .getElementById("delete" + id)
    .addEventListener("click", () => handleDeletePic(id));
};

// Add a listener to edit an certificate
export const addOnEditPic = (pictures, id) => {
  document
    .getElementById(`edit${id}`)
    .addEventListener("click", () => handleEditPic(pictures, id));
};

// Add a listener to favorite cards
export const addOnFromFavoritesCards = (id, pictures) => {
  document
    .getElementById(`like${id}`)
    .addEventListener("click", () => renderCardsFromFavorites(id, pictures));
};
