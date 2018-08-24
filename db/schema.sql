CREATE DATABASE datenight_db;

USE datenight_db;


CREATE TABLE dates
(
    id int(11) NOT NULL AUTO_INCREMENT,
    username varchar(16) NOT NULL,
    password varchar(64) NOT NULL,
    answer1 varchar(255) NULL,
    answer2 varchar(255) NULL,
    answer3 varchar(255)  NULL,
    answer4 varchar(255)  NULL,
    answer5 varchar(255)  NULL,
    answer6 varchar(255)  NULL,
    answer7 varchar(255)  NULL,
    answer8 varchar(255)  NULL,
    PRIMARY KEY (id)
);


INSERT INTO dates(username, password) VALUES ('joe', 'jabc123');
-- 1, 'joe', 'jabc123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL


SELECT * FROM dates WHERE username='joe'; -- produce a list of rows that match the query


-- to log in:
-- SELECT * FROM dates WHERE username='whatever-username-the-user-typed'
-- (unsure how node handles this)
-- var rows = run-the-above-query(somehow)
-- var row = rows[0];
-- if(row['password'] == whatever-password-the-user-typed) {
    --  login was successful, (what do we send to the user?)
    -- should user ID be stored into a variabnle somwhere?  var user_id = row['id'];
-- }
--  else incorrect password error message sent to user


-- to fill in an answer:
-- var query = "UPDATE dates SET answer1='whatever-the-user-typed-for-answer-1' WHERE id=" + user_id
-- (no return necessary): database->run_query_or_whatever(query)

-- to get all answers a user fileld out:
-- var all_answers = database->run_query_or_w/e("SELECT * FROM dates WHERE id=" + user_id)
-- var your_answers = all_answers[0]; (unsure if it pulls a table or a single result)
-- var your_answer_1 = your_answers['answer_1']; -- (note, might also be your_answers.answer_1 if it's json)