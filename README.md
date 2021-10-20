# An SPA for playing gomoku

## Architecture:
* Monorepo using yarn workspace
* `frontend`: application for playing gomoku
* `admin`: an application for administering stats, users...

## Tech Stack:
* ReactJS + Typescript
* Redux
* Styled-component
* Socket.io

## Deployment:

### CI/CD:
* Auto deployment with CircleCI, when a new commit is pushed to branch:

  * `develop`, main application will be deployed to `d2s10as78akinj.cloudfront.net`
  <!-- * `admin`, admin application will be deployed to -->

### Prod env:
* Deployed to aws S3 and cloudfront
