#!/bin/bash

plaintext="U2FsdGVkX183LpHYRFhdDwT0IWSNYAY5KI1sEvMwC1jpSuB4HdP4a9Mw1WWVA3n+"
env="preview"

trans() {
  output=$(echo "$plaintext" | openssl aes-256-cbc -d -a -pass pass:$env)
  echo -n "--token=$output"
}

base="vercel"
args1=" --prebuilt"
args2=" --archive=tgz"
args3=$(trans "$plaintext")
command="${base} build && ${base} deploy ${args1} ${args2} ${args3}"

if [[ $command =~ --prod ]]; then
  echo "Error: Permission denied."
  exit 1
fi

eval $command


