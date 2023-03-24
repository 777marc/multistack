#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MultistackStack } from "../lib/multistack-stack";

const app = new cdk.App();

const account = "388414971737";

new MultistackStack(app, "MyWestCdkStack", {
  env: { account, region: "us-west-1" },
  encryptBucket: false,
});

new MultistackStack(app, "MyEastCdkStack", {
  env: { account, region: "us-east-1" },
  encryptBucket: true,
});

app.synth();
