#!/bin/bash

ROOT_DIR=$( cd "$( dirname "$0" )" && pwd )

echo start my personal website
cd $ROOT_DIR
# run it in background(&) and redirect the output to logs(>>)
DEBUG=website:* ./bin/www &> $ROOT_DIR/logs/site.log &
# save the pid of database.
echo $! > $ROOT_DIR/logs/site.pid

echo the personal website started!
