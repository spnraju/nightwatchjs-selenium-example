workflow "OnPush" {
  resolves = ["npm test"]
  on = "pull_request"
}

action "Npm Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "npm i"
}

action "npm test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Npm Install"]
  runs = "npm run test"
}
