# ranked_topic

### a) Description of the table schemas:<br><br>
1) topic table<br><br>
    ![image](https://user-images.githubusercontent.com/70429608/170251495-53b4cf49-73a7-4216-be50-a9b3b35cf847.png)
    <br><br>
2) rank table <br><br>
    ![image](https://user-images.githubusercontent.com/70429608/170251572-866b2251-f2a6-4540-85a7-7b651c6f68a9.png)
    <br><br>
3) users table <br><br>
    ![image](https://user-images.githubusercontent.com/70429608/170251729-9fca728c-cbe3-4a52-a81f-fbe4882b4eb7.png)<br><br>

### b) Description of API's <br><br>
1) <b>/user/signup: </b> It is used to register user with email and password.<br>
2) <b>/user/signin: </b>It is used to signin and generate token using jwt authentication for the task in the app.<br>
3) <b>/topic/get:   </b>It is used to fetch all topics in the added to the database.<br>
4) <b>/topic/add:   </b>It is used to add unique topic which are not there in database priviously.<br>
5) <b>/rank/update: </b>It is used to update rank of the existing topic in the database.
    
