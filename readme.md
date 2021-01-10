# Microservices Application

## Starting Development

- skaffold dev

## Setup

- setup jwt-secret for process.env.JWT_KEY to run properly
- setup stripe-secret as STRIPE_KEY (lecture 436)
- kubectl create secret generic jwt-secret --from-literal JWT_KEY=(insert key)
- if using this as a template, change NATS_CLUSTER_ID in .depl files

## Common @etytickets/common

- Published a public npm package

## kubernetes problems I run into

- if restarting kubernetes, need to start two below
- ingress-nginx not being started
- secrets not defined

## Create a new microservice

- look at k8s and cp paste a depl/mongo-depl
- cp .json and Dockerfiles from other service(ex: tickets), update package.json
- cp app.ts, index.ts, nats-wrapper.ts from another service
- maybe cp test folder, **mocks** folder
- docker build and update skaffold.yaml
- update ingress path if needed
- create basic routes
- create mongodb model schema
- write jest tests
