ALTER TABLE <table_name>
RENAME COLUMN parent_id TO parent_name;


UPDATE <table_name>
SET parent_name = CASE
    WHEN parent_name = '2' THEN (SELECT name from <table_name> where id = 2 )
    WHEN parent_name = '3' THEN (SELECT name from <table_name> where id = 3 )
    ELSE parent_name
END;

