# WouldYouRather
## Project Overview
WouldYouRather is a web app that lets a user play the “Would You Rather?” game.
## App Functionality
The person using your application should have a way of impersonating/logging in as an existing user. (This could be as simple as having a login box that appears at the root of the application that lets the user select a name from the list of existing users. Alternatively, you could create your own account creation process to allow a user to sign up for an account.) Your application should work correctly regardless of which user is selected. Once the user logs in, the home page should be shown.

We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions should be shown by default, and the name of the logged in user should be visible on the page.

What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question should link to the details of that poll. The details of each poll should be available at ```questions/:question_id```.

When a poll is clicked on the home page, the following is shown:
1. Text “Would You Rather”;
2. Avatar of the user who posted the polling question; and
3. Two options.

For answered polls, each of the two options contains the following:
1. Text of the option;
2. Number of people who voted for that option; and
3. Percentage of people who voted for that option.

The option selected by the logged-in user should be clearly marked.

Since we want to make sure our application creates a good user experience, the application should show a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.) It should also display a navigation bar so that the user can easily navigate anywhere in the application.

So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed. The user’s response should be recorded and clearly visible on the poll details page. Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question should appear in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions should be available at the ```/add``` route. The application should show the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here! The application should have a leaderboard that’s available at the ```/leaderboard``` route. Each entry on the leaderboard should contain the following:
1. User’s name;
2. User’s picture;
3. Number of questions the user asked; and
4. Number of questions the user answered

Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

The user should be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar. To make sure we’re showing the data that is relevant to the user, the application should require the user to be signed in order to access those pages.
## App Specifications
### Application Setup
- The application requires only ```npm install``` and ```npm start``` to install and launch.
- A README is included with the project. The README includes a description and clear instructions for installing and launching the project.
### Login Flow
- 
1. There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
2. The application works correctly regardless of which user is selected.
3. The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
4. Once the user logs in, the home page is shown.
5. Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
### Application Functionality
- 
1. The answered and unanswered polls are both available at the root.
2. The user can alternate between viewing answered and unanswered polls.
3. The unanswered questions are shown by default.
4. The name of the logged in user is visible on the page.
5. The user can navigate to the leaderboard.
6. The user can navigate to the form that allows the user to create a new poll.
- Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
A polling question links to details of that poll.
The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- 
1. The details of the poll are available at ```questions/:question_id```.
2. When a poll is clicked on the home page, the following is shown:
   - the text “Would You Rather”;
   - the picture of the user who posted the polling question; and
   - the two options.
3. For answered polls, each of the two options contains the following:
   - the text of the option;
   - the number of people who voted for that option;
   - the percentage of people who voted for that option.
4. The option selected by the logged in user should be clearly marked.
5. When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
6. The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)
- 	
1. Upon voting in a poll, all of the information of the answered poll is displayed.
2. The user’s response is recorded and is clearly visible on the poll details page.
3. When the user comes back to the home page, the polling question appears in the “Answered” column.
4. The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
- 
1. The form is available at ```/add```.
2. The application shows the text “Would You Rather” and has a form for creating two options.
3. Upon submitting the form, a new poll is created and the user is taken to the home page.
4. The new polling question appears in the correct category on the home page.
- 
1. The Leaderboard is available at ```/leaderboard```.
2. Each entry on the leaderboard contains the following:
   - the user’s name;
   - the user’s picture;
   - the number of questions the user asked; and
   - the number of questions the user answered.
3. Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
- The app contains a navigation bar that is visible on all of the pages.
The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.
- The data that’s initially displayed is populated correctly from the backend.
Each user’s answer and each new poll is correctly recorded on the backend.
- The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using ```key``` for list items. All code is functional and formatted properly.
### Architecture
- The store is the application’s source of truth.
Components read the necessary state from the store; they do not have their own versions of the same state.
There are no direct API calls in the components' lifecycle methods.
- Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
Form inputs and controlled components may have some state handled by the component.
- Updates are triggered by dispatching action creators to reducers.
Reducers and actions are written properly and correctly return updated state to the store.
- The code is structured and organized in a logical way.
Components are modular and reusable.
## Licence
GNU General Public License v3.0
