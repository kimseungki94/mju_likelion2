 CREATE TABLE todos (
      todo_id INT(11) unsigned NOT NULL auto_increment,
      todo_text VARCHAR(32) NOT NULL,
      color_code varchar(10) NOT NULL,
      PRIMARY KEY (todo_id)
    ) ;