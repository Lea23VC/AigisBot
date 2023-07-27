import { BaseService } from './BaseService';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { CfnResource, Duration, Fn } from 'aws-cdk-lib';
import {
  Function,
  LayerVersion,
  Runtime,
  Code,
  AssetCode,
  FunctionUrlAuthType,
  CfnUrl,
} from 'aws-cdk-lib/aws-lambda';

import path = require('path');
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface ILambdaParams {
  region?: string;
  account?: string;
  isProd: boolean;

  env: {
    [key: string]: string;
  };
}

export class LambdaService extends BaseService {
  private PDFLambdaNodeJSFunction: Function;

  constructor(scope: Construct, stageId: string) {
    super(scope, stageId);
    this.createLambdaLayerPy();
  }

  private createLambdaLayerPy() {}

  // Lambda - Py
  public creatLogicLambda(params: ILambdaParams) {
    const myBucket = new s3.Bucket(this.scope, 'deco-PDF-Bucket');

    this.PDFLambdaNodeJSFunction = new NodejsFunction(this.scope, 'NodeJSPDF', {
      runtime: Runtime.NODEJS_16_X,
      entry: path.join(__dirname, '..', '..', 'PDF', 'src', 'handler.tsx'),
      handler: 'handler',
      bundling: {
        tsconfig: path.join(__dirname, '..', '..', 'PDF', 'tsconfig.json'),
      },
      depsLockFilePath: path.join(__dirname, '..', '..', 'PDF', 'yarn.lock'),
      memorySize: 1800,
      timeout: Duration.minutes(8),
      environment: {
        S3_BUCKET_NAME: myBucket.bucketName,
      },
    });

    myBucket.grantReadWrite(this.PDFLambdaNodeJSFunction);
    myBucket.grantDelete(this.PDFLambdaNodeJSFunction);

    //create a function url from the lambda
    const lambdaNodeJSFunctionURL = new CfnUrl(
      this.scope,
      'PDFLambdaNodejsUrl',
      {
        targetFunctionArn: this.PDFLambdaNodeJSFunction.functionArn,
        authType: FunctionUrlAuthType.NONE,
      },
    );

    //add resource to the lambda, so the url can be used
    new CfnResource(this.scope, 'lambdaFunctionNodejsURLPermission', {
      type: 'AWS::Lambda::Permission',
      properties: {
        Action: 'lambda:InvokeFunctionUrl',
        FunctionName: this.PDFLambdaNodeJSFunction.functionArn,
        Principal: '*',
        FunctionUrlAuthType: 'NONE',
      },
    });
  }
}
