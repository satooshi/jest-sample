# Sample jest test

### Alias

```
alias dc='docker-compose'
alias dcr='dc run --rm'

alias ddc='docker-compose -f docker-compose.yml -f docker-compose-dev.yml'
alias ddcr='ddc run --rm'
```

### How to execute tests by jest

```
# setup
$ dc build

# execute without changing files
$ dc up
$ dcr simple yarn test --coverage --verbose
$ dcr vue yarn test --coverage --verbose
$ dc down

# execute after changing some files
$ docker-sync start

$ ddcr up
$ ddcr simple yarn test --watchAll --coverage --verbose
$ ddcr vue yarn test  --watchAll --coverage --verbose
$ ddcr down
```

