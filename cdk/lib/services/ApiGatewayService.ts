import { BaseService } from './BaseService';
import { Construct } from 'constructs';
import { IRestApi, LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { IFunction } from 'aws-cdk-lib/aws-lambda';

export class ApiGatewayService extends BaseService {
  private restApi: IRestApi;
  constructor(scope: Construct, stageId: string) {
    super(scope, stageId);
  }

  public createLambdaRestAPI(piRestFunction: IFunction) {
    const logicLambda = 'restAPI';

    //lambda that handle the api rest
    const apiLambda = new LambdaRestApi(
      this.scope,
      `${logicLambda}-restAPIGateway`,
      {
        handler: piRestFunction,
        restApiName: `${this.stageId}-APIGateway`,
        deployOptions: {
          stageName: this.stageId,
        },
        // domainName: domainOptions,
      },
    );
  }

  public getAPIGateway() {
    return this.restApi;
  }
}
export interface IApiGatewayService {
  createLambdaRestAPI: (apiRestFunction: IFunction) => void;
}
