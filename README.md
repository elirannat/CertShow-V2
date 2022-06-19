### Welcome to my website: PC-Solutions.co.il (CertShow-V2) Programmer / Developer.

This project single page application base on javascript vanilla only & bootstrap v5.2.0-beta1.

This certification app shows to the end-user all my certifications in the field of technology.

The business plan behind it is for people to Google my site and reach out to me so they can get a good impression of my professionalism in the technology field.
This app is designed to promote me in the professional field as opposed to programmers or other technicians in the free market.

To open this app --> you need to use this app with a temporary server such as "Live Server":

### GitHub project link:

https://github.com/elirannat/CertShow-V2

Note: GitHub not uploading the ".vscode" folder, so becuase that if you download this project via github you need to open folder ".vscode" and into the folder
create settings.json and info the file write that:

{
  "liveServer.settings.port": 999
}

that's it.

### For example this website: "http://127.0.0.1:999/public/index.html"

that will allow you to work on script type="module" .

### How to check the 404 error page:

To check the 404 error page, you need to going to the ..src/app.js file and in the section:
/**\*** Initial boot **\***/
You have this line 148:
// onChangePage(PAGES.ERROR_404);
Just remove the "//" and disabled the line 149(marked the line like that: "// onChangePage(PAGES.HOME);") just then you can check the 404 error page.

### Login details:

1. Username: admin@pc-solutions.co.il <--- isAdmin
   Password: Aa1234!
2. Username: business@pc-solutions.co.il <--- isBusiness
   Password: Bb4321@
3. Username: test@pc-solutions.co.il <--- Test User
   Password: Tt2345#
   

### What's new in this V2 of certShow project:

1. setInterval - Automatic transfer of images each time unit is set.
2. Favorites page - Clicking on the shopping cart icon in the card view will make the card preferred by the user, you will see the cards in the favorites page.
3. Get asynchronous information - All the user and picture information is in DB folder and in the json file.
4. Edit User - in the Nav-Bar after the user is made login have a icon of person click on it and you have an option to edit user.
5. Cert list - in the html file in the section of "Cert list" - added "bg-light" inc. black border in the css file to separate the certifications from the background.
Note: In order not to scroll down the page.. you must change the zoom in the browser to 50%.
6. Certification Content Details Page - On the home Page.. when you click on the certification you will get all the details of her like: ID, created At, created By, title and price.


### Enjoy with the testing this code project :-)