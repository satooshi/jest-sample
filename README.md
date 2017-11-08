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
# execute without changing files
$ dcr simple yarn test
$ dcr vue yarn test

# execute after changing some files
$ docker-sync start

$ ddcr simple yarn test
$ ddcr vue yarn test
```

