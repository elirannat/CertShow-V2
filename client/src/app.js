import PAGES from "./models/pageModel.js";
import { onChangePage, setNavDisplay } from "./routes/router.js";
import {
  onContentDetails,
  renderSlider,
  setCounterOtomats,
} from "./components/renderSlider.js";
import { setCounter } from "./services/sliderService.js";
import initialData from "./initialData/initialData.js";

import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,
  LOGIN_PAGE_LINK,
  LINK_TO_HOME_PAGE,
  SLIDER_PREV_BTN,
  SLIDER_NEXT_BTN,
  SIGNUP_PAGE_LINK,
  LOGOUT_LINK,
  TABLE_ICON,
  SLIDER_ICON,
  CARDS_ICON,
  SORT_DOWN_ICON,
  SORT_UP_ICON,
  SEARCH_BAR,
  USER_UPDATE_PAGE_LINK,
  EMAIL_USER_UPDATE_FIELD,
  EMAIL_LOGIN_FIELD,
  SLIDER_IMAGE,
  FROM_FAVORITES_PAGE_LINK,
} from "./services/domService.js";
import {
  handleCancelCreateNewPic,
  handleCreatePic,
  onCancelEditPic,
  onCreateNewPic,
  onEditPic,
} from "./services/picService.js";
import {
  handleCancelLogin,
  handleLogin,
  handleSignup,
  handleUserUpdate,
  onSignupNewUser,
  onUserUpdate,
} from "./services/userService.js";
import { removeItemFromLocalStorage } from "./services/localStorageService.js";
import DISPLAY from "./models/displayModel.js";
import { handleDisplayMode } from "./services/displayModeService.js";
import {
  filterArrayOfObjectsByTerm,
  sortArrayOfObject,
  sortReverseArrayOfObject,
} from "./utils/algoMethods.js";

let counter = 0;
let pictures;
let users;

const getData = async () => {
  try {
    /***** Creating Global Variables *****/
    const data = await initialData();

    users = data.users;
    pictures = data.pictures;
    /***** logic *****/

    const handleSliderPicChange = (controller = "") => {
      counter = setCounter(pictures, counter, controller);
      renderSlider(pictures, counter);
    };

    /***** Filter certifications *****/
    const handleFilterPictures = (term) => {
      const newPictures = filterArrayOfObjectsByTerm(term, pictures, "alt");
      handleDisplayMode(DISPLAY.TABLE, newPictures);
    };

    /***** Listening to Events *****/
    // Page routing
    HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
    SLIDER_IMAGE.addEventListener("click", () => {
      onChangePage(PAGES.CONTENT_DETAILS);
      onContentDetails(pictures, SLIDER_IMAGE.alt);
    });
    ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
    CREATE_PIC_PAGE_LINK.addEventListener("click", handleCreatePic);
    FROM_FAVORITES_PAGE_LINK.addEventListener("click", () => {
      onChangePage(PAGES.CARDS_FROM_FAVORITES);
    });
    SIGNUP_PAGE_LINK.addEventListener("click", handleSignup);
    USER_UPDATE_PAGE_LINK.addEventListener("click", () => {
      handleUserUpdate(users);
    });

    LOGIN_PAGE_LINK.addEventListener("click", () => {
      handleLogin(users);
    });
    LOGOUT_LINK.addEventListener("click", () => {
      removeItemFromLocalStorage("user");
      setNavDisplay();
      handleCancelLogin();

      onChangePage(PAGES.HOME);
    });
    LINK_TO_HOME_PAGE.addEventListener("click", () => onChangePage(PAGES.HOME));

    // Certshow
    SLIDER_PREV_BTN.addEventListener("click", () =>
      handleSliderPicChange("prev")
    );
    SLIDER_NEXT_BTN.addEventListener("click", () =>
      handleSliderPicChange("next")
    );

    // Display Mode
    TABLE_ICON.addEventListener("click", () =>
      handleDisplayMode(DISPLAY.TABLE, pictures)
    );
    SLIDER_ICON.addEventListener("click", () =>
      handleDisplayMode(DISPLAY.SLIDER, pictures)
    );
    CARDS_ICON.addEventListener("click", () =>
      handleDisplayMode(DISPLAY.CARDS, pictures)
    );

    // Sorting
    SORT_DOWN_ICON.addEventListener("click", () => {
      pictures = sortArrayOfObject(pictures, "alt");
      handleDisplayMode(DISPLAY.TABLE, pictures);
    });

    SORT_UP_ICON.addEventListener("click", () => {
      pictures = sortReverseArrayOfObject(pictures, "alt");
      handleDisplayMode(DISPLAY.TABLE, pictures);
    });

    // Search bar
    SEARCH_BAR.addEventListener("input", (e) =>
      handleFilterPictures(e.target.value)
    );

    /***** Initial boot *****/
    handleSliderPicChange();
    setNavDisplay();
    // onChangePage(PAGES.ERROR_404);
    onChangePage(PAGES.HOME);
    handleDisplayMode(DISPLAY.SLIDER, pictures);

    setCounterOtomats(pictures);
  } catch (error) {
    console.log(error);
  }
};
//
getData();

/***** Create Certificate *****/
export const handleSubmitNewPic = () => {
  pictures = onCreateNewPic(pictures);

  handleCancelCreateNewPic();
  handleDisplayMode(DISPLAY.TABLE, pictures);
};

/***** Delete Certifications *****/
export const handleDeletePic = (id) => {
  pictures = pictures.filter((pic) => pic._id !== id);
  handleDisplayMode(DISPLAY.TABLE, pictures);
};

/***** Edit Certifications *****/
export const onSubmitEditPic = () => {
  pictures = onEditPic(pictures);

  onCancelEditPic(pictures);
  handleDisplayMode(DISPLAY.TABLE, pictures);
};

/***** Edit User *****/
export const onSubmitUserUpdate = () => {
  users = onUserUpdate(users);

  if (EMAIL_LOGIN_FIELD.value !== EMAIL_USER_UPDATE_FIELD.value) {
    removeItemFromLocalStorage("user");
    setNavDisplay();
    onChangePage(PAGES.LOGIN);
  } else {
    onChangePage(PAGES.HOME);
  }
};
USER_UPDATE_PAGE_LINK.addEventListener("click", () => {
  handleUserUpdate(users);
});

/***** Signup new User *****/
export const handleSubmitSignup = () => {
  users = onSignupNewUser(users);

  onChangePage(PAGES.HOME);
};
