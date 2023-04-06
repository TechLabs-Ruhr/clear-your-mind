clear-your-mind - bridge the time till your psychotherapy consultation
This project was carried out as part of the TechLabs “Digital Shaper
 Program” in Dortmund (winter term 2022).

Description
"Clear Your Mind" is a platform designed to offer urgent and quick psychological support to individuals who are struggling with mental health issues.

Traditional methods of accessing therapy often involve long wait times, leaving many individuals feeling helpless and stuck. 
Our platform offers a simple and effective approach to help users gain a deeper understanding of their emotions and inner world, using methods such as journaling and mood tracking. Through these techniques, users can gain valuable insights into their thought patterns and emotions, and take positive steps towards improving their mental well-being in a short period of time.
 
TechStack: 
Font End: React, Node.js,
Back End: Node.js, Express, MySQL
Data Sience: Python 

For the style, we used the CSS framework react-bootstrap (Boostrap). The CSS framework "Mui" and fortawesome toolkit were also used sporadically. The icons were taken from Bootstrap, MUI, iconscout, iconsax, iconpark. 

How to Set up and run 

Prerequisites: 
installed VS Code
installed Node.js
installed Git 
Jupyter Notebook (data science)

Steps required to run the application:
open VS Code and select View/CommandPallete or press ctrl + shift + p

Enter clone and select git clone

Enter the repository URL and click enter
Then you should be prompted to log in to your GitHub account to connect GitHub with VS code
Once you're logged in select the folder where the repository should be saved on your hard drive
Make sure that you have successfully logged in to gitHub and connected it to VS Code. Otherwise the cloning process cannot be completed.

4. To run the react app. Open the terminal and navigate to the main project directory


type in npm start and click enter

This should run the react application and open it in your default  browser 

To view the data science code, navigate to the data-science folder and open the .ipynb in Juputer Notebook or Google Colab. 
There are 2 .ipynb files which provide detailed explanations within. 

A brief overview of these two files:

1. Recommender algorithm for questionnaire.ipynb
    - Contains the recommender algorithm which uses cosine similarity to compare user answers in order to recommend content liked by similar users
2. Visualize mood tracker data.ipynb
    - Contains graphs that help users visualize their moods by day of the week and over time.


Examples 

How to use the Forum:

1. Navigate to the forum by selecting it on the landing page or using the navigation bar in the right upper corner: 


2. To add a new post to the forum: Type in a title and a description and click on post.
 

3. This will add a new post below the edit post component: 




Unfortunately, due to limited time, the comment feature was not implemented 

Roadmap

The remaining features will be implemented in the following order:

1. Backend implementation: connecting react with MySQL
2. Implementation of the Authentication and user accounts 
3. Deployment of the Web App 
4. Applying the backend to the questionnaire to save the result of the user and assign them to user accounts 
5. Implementation of the content page displaying the recommended materials (videos and articles)  to help the patients with the treatment of their condition including the feature to like recommended materials 
6. Applying the backend to the content page to save the likes given by the user 

8.Connecting the existing recommender system for content materials with step 6

9. Finalizing the front end for the Mood tracker and Diary function

10. Applying backend to the mood tracker and Diary 

11.Connecting our Data science functions with the mood tracker and Diary: displaying the stacked bar graph, visualizing how the mood changes over time

12. Implementation of the comment function of the forum 

13. Applying backend to the comment function of the forum   


Authors 

Mariusz Seget (Isztof) https://github.com/Isztof 

Yousef Hamadah (yhamadah)  https://github.com/yhamadah



