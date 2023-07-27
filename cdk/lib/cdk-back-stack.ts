import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaService } from './services/LambdaService';

export class CdkBackStack extends cdk.Stack {
  constructor(
    scope: Construct,
    stage: string,
    label: string,
    debug: string,
    stageProd: string,
    props?: cdk.StackProps,
  ) {
    super(scope, `${stage}-${label}-stack`, props);
    const stageId = `${stage}-${label}`;

    const isProd = stage == stageProd;

    const lambdaParameters = {
      isProd: isProd,
      region: this.region,
      account: this.account,
    };
    // Lamdba - Enviroment
    const lambdaCommonEnv = {
      DEBUG: debug,
      STAGE: stage,
      LABEL: label,
    };

    const payloadPyFunctions = {
      ...lambdaParameters,
      env: {
        ...lambdaCommonEnv,
      },
    };

    // Lambda - Service
    const lambdaService = new LambdaService(this, stageId);
    // Lambda - Py

    lambdaService.creatLogicLambda(payloadPyFunctions);
  }
}
