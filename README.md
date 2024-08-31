# Clear Your Mind  
#### Bridge the time till your psychotherapy consultation
This project was carried out as part of the TechLabs “Digital Shaper Program” in Dortmund (winter term 2022).

Clear Your Mind is a platform designed to offer urgent and quick psychological support to individuals who are struggling with mental health issues.
Traditional methods of accessing therapy often involve long wait times, leaving many individuals feeling helpless and stuck. 

Our platform offers a simple and effective approach to help users better understand their emotions and inner world, using methods such as journaling and mood tracking. Through these techniques, users can gain valuable insights into their thought patterns and emotions, and take positive steps towards improving their mental well-being in a short period of time.
 
### Tech Stack
Font End: React, Node.js,
Back End: Node.js, Express, MySQL
Data Science: Python 

For the style, we used the CSS framework react-bootstrap (Boostrap). The CSS framework "Mui" and fortawesome toolkit were also used sporadically. The icons were taken from Bootstrap, MUI, iconscout, iconsax, iconpark. 

### How to Setup and Run
#### Prerequisites
Before you start, ensure you have the following installed:
- VS Code
- Node.js and npm
- Git 
- Jupyter Notebook (only for data science)
  
#### 1. Cloning the Repository
1. Open Visual Studio Code (VS Code).
2. Open the Command Palette by selecting **View > Command Palette** or pressing **Ctrl + Shift + P**.
3. Type **git clone** and select it.
4. Enter the repository URL and press **Enter**.
5. Log in to your GitHub account if prompted.
6. Choose the directory where you want to clone the repository.

#### 2. Setting up the MySQL
1. Create a local MySQL database instance on your computer.
2. Ensure it matches the following credentials (as specified in server/index.js):
```
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'clearYourMind391',
    database: 'cruddatabase'
})
```
#### 3. Installing necessary dependencies 
1. Open the terminal and navigate to the main project directory. If you open the terminal in VS code you should already be in the main project directory. Then navigate to the client directory. Your terminal should now display a path similar to this:
```
 C:\Users\username\Visual Studio Code\clear-your-mind\server>
```
2. Type in "npm install" and press enter. This should install the necessary node packages for the client.
3. Navigate to the server folder on the terminal and use the command "npm install" again to install the node packages for the server folder as well
4. Use the command "npm install -g nodemon" while being still in the server directory to install nodemon. Nodemon is a Node.js utility that restarts the node server every time we apply some changes to the backend.
5. Navigate to the main project directory and use the command "npm install bcrypt". Bcrypt is a package we use for hashing the passwords for user accounts
6. Navigate to the client directory and use the command "npm start" This should run the react app in your default browser
7. Navigate to the server directory and use the command "nodemon index.js" to run the server.
8. Now the app should be fully functional provided you have the local instance of the database

#### Troubleshooting
- Database Connection Issues: Double-check the MySQL credentials and ensure the database is running.
- npm Install Errors: Ensure your Node.js and npm versions are up-to-date.
- Server Not Starting: Ensure all dependencies are installed and check for any errors in the terminal.

#### Contact for Support
If you encounter any issues or have questions, please contact (Isztof) https://github.com/Isztof via GitHub DM or per email: (mariuszseget77@gmail.com)

#### Setting up Data Science  
To view the data science code, navigate to the data-science folder and open the .ipynb in Juputer Notebook or Google Colab. 
There are 2 .ipynb files which provide detailed explanations within. 

A brief overview of these two files:

1. Recommender algorithm for questionnaire.ipynb
    - Contains the recommender algorithm which uses cosine similarity to compare user answers in order to recommend content liked by similar users
2. Visualize mood tracker data.ipynb
    - Contains graphs that help users visualize their moods by day of the week and over time.


#### Examples 
How to use the Forum:

1. Navigate to the forum by selecting it on the landing page or using the navigation bar in the right upper corner: 
2. To add a new post to the forum: Type in a title and a description and click on the post.
3. This will add a new post below the edit post component: 

(The comment feature has not been implemented yet) 

### Roadmap
The remaining features that we plan to implement are:
 
1. Deployment of the Web App 
2. Applying the backend to the questionnaire to save the results of the user and assign them to user accounts 
3. Implementation of the content page displaying the recommended materials (videos and articles)  to help the patients with the treatment of their condition including the feature to like recommended materials 
4. Applying the backend to the content page to save the likes given by the user 
5. Connecting the existing recommender system for content materials with step 6
6. Finalizing the front end for the Mood tracker and Diary function
7. Applying backend to the mood tracker and Diary 
8. Connecting our Data science functions with the mood tracker and Diary: displaying the stacked bar graph, visualizing how the mood changes over time
9. Implementation of the comment feature for the forum 
   
### Authors 
- Mariusz Seget (Isztof) https://github.com/Isztof 
- Yousef Hamadah (yhamadah)  https://github.com/yhamadah



