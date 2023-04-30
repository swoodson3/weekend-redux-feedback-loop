# Redux Feedback Loop

## Description
This project is a reflection/feedback form that allows users to leave feedback for the day. It consists of four views for the form parts:

1. How are you feeling today? (feeling)
2. How well are you understanding the content? (understanding)
3. How well are you being supported? (support)
4. Any comments you want to leave? (comments)

The project uses Redux to store data across views and enables users to save the feedback in the database.

## Setup
1. Create your database and tables using the provided data.sql file.
2. Start the server with the following commands:
npm install
npm run server
3. Open a new terminal tab and start the react client app with the following command:
npm run client

## Usage
1. Click the "Add New Feedback" button.
2. Fill out the four-part form and navigate between them by clicking the "next" button.
3. Provide a score for each part of the form before clicking "next."
4. Review your feedback on the review page, and click "Submit" if everything looks good.
5. Your feedback will be saved in the database, and you'll see a submission success page.
6. Click the "Take a New Survey" button to start the feedback process again from the beginning.

## Input Validation
Each step should only allow the user to advance to the next step if a score was provided. The Comments step does not need to be validated, an empty value is okay.

## Technologies Used
HTML5
CSS3
JavaScript
React.js
Redux
Node.js
Express.js
PostgreSQL

## Credits
This web application was created as a coding exercise by Seth Woodson.