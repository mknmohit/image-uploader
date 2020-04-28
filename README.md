## :triangular_flag_on_post: Challenge
Create a simple app that includes the following:
1. A webpage where the user can upload an image
1. Each image has to be exactly 1024 x 1024.
1. Don’t upload the file if it’s not the right size
1. Each image has to be converted into four different sizes.
horizontal : 755 x 450 vertical : 365 x 450 horizontal small : 365 x 212 gallery : 380 x 380
Images should not be stretched, they should be cropped.
1. Save all four of these images locally on the server
1. Show a webpage with all four of these new images.</br></br>
**Bonus:** Instead of saving these files to the server, upload them to a cloud image hosting service.</br>
**Double Bonus:** While uploading the image show a preview in the browser itself of all the different image sizes, and let the user decide how to crop the images to the smaller size.


## :hammer: Setup Project

1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
1. Clone this repo using `git clone https://github.com/mknmohit/image-uploader.git`
1. Move to the appropriate directory: `cd image-uploader`.
1. Run `npm install` in order to install dependencies.
1. Run `npm start` to see the app at `http://localhost:3000`.


> Please note that this project have been created using the react-boilerplate (https://github.com/react-boilerplate/react-boilerplate) as the base setup.