#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkBackStack } from '../lib/cdk-back-stack';

const stage = process.env.STAGE;
const stageProd = process.env.STAGE_PROD;
const region = process.env.AWS_REGION;
const account = process.env.AWS_ACCOUNT_ID;
const label = process.env.LABEL;

const debug = stage == stageProd ? 'disabled' : 'enabled';

const app = new cdk.App();
if (stage && stageProd && debug && region && account && label) {
  new CdkBackStack(app, stage, label, debug, stageProd, {
    env: {
      account: account,
      region: region,
    },
  });
} else {
  throw Error(
    'variable de entorno STAGE o AWS_REGION o AWS_ACCOUNT_ID no tiene valor',
  );
}
