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
  }

  // Lambda - Py
  public creatLogicLambda(params: ILambdaParams) {
    // const myBucket = new s3.Bucket(this.scope, 'Bucket');
    type StringDictionary = { [key: string]: string };

    const {
      GOOGLE_AUTH,
      DISCORD_TOKEN,
      DISCORD_PUBLIC_KEY,
      ID_FOLDER_GBA,
      ID_FOLDER_GBC,
      ID_FOLDER_GB,
      ID_FOLDER_NES,
      ID_FOLDER_SNES,
      ID_FOLDER_64,
      ID_FOLDER_GAMECUBE,
      ID_FOLDER_DS,
      ID_FOLDER_PSX,
      ID_FOLDER_PS2,
      ID_FOLDER_PSP,
      ID_FOLDER_3DS,
      ID_FOLDER_DREAMCAST,
      ID_FOLDER_WII,
      ID_FOLDER_SWITCH,
      ID_FOLDER_GENESIS,
      SAGIRI_TOKEN,
    } = process.env;

    this.PDFLambdaNodeJSFunction = new NodejsFunction(this.scope, 'NodeJSPDF', {
      runtime: Runtime.NODEJS_16_X,
      entry: path.join(__dirname, '..', '..', '..', 'src', 'handler.ts'),
      handler: 'handler',
      bundling: {
        tsconfig: path.join(__dirname, '..', '..', '..', 'tsconfig.json'),
      },
      depsLockFilePath: path.join(__dirname, '..', '..', '..', 'yarn.lock'),
      memorySize: 1800,
      timeout: Duration.minutes(8),
      environment: {
        GOOGLE_AUTH: GOOGLE_AUTH as string,
        DISCORD_TOKEN: DISCORD_TOKEN as string,
        DISCORD_PUBLIC_KEY: DISCORD_PUBLIC_KEY as string,
        ID_FOLDER_GBA: ID_FOLDER_GBA as string,
        ID_FOLDER_GBC: ID_FOLDER_GBC as string,
        ID_FOLDER_GB: ID_FOLDER_GB as string,
        ID_FOLDER_NES: ID_FOLDER_NES as string,
        ID_FOLDER_SNES: ID_FOLDER_SNES as string,
        ID_FOLDER_64: ID_FOLDER_64 as string,
        ID_FOLDER_GAMECUBE: ID_FOLDER_GAMECUBE as string,
        ID_FOLDER_DS: ID_FOLDER_DS as string,
        ID_FOLDER_PSX: ID_FOLDER_PSX as string,
        ID_FOLDER_PS2: ID_FOLDER_PS2 as string,
        ID_FOLDER_PSP: ID_FOLDER_PSP as string,
        ID_FOLDER_3DS: ID_FOLDER_3DS as string,
        ID_FOLDER_DREAMCAST: ID_FOLDER_DREAMCAST as string,
        ID_FOLDER_WII: ID_FOLDER_WII as string,
        ID_FOLDER_SWITCH: ID_FOLDER_SWITCH as string,
        ID_FOLDER_GENESIS: ID_FOLDER_GENESIS as string,
        SAGIRI_TOKEN: SAGIRI_TOKEN as string,
      },
    });

    // myBucket.grantReadWrite(this.PDFLambdaNodeJSFunction);
    // myBucket.grantDelete(this.PDFLambdaNodeJSFunction);

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
