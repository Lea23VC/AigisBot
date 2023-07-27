import {
  CacheCookieBehavior,
  CacheHeaderBehavior,
  CachePolicy,
  CacheQueryStringBehavior,
  Distribution,
  LambdaEdgeEventType,
  OriginRequestHeaderBehavior,
  OriginRequestPolicy,
  OriginRequestQueryStringBehavior,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { BaseService } from "./BaseService";
import { Construct } from "constructs";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager";
import { Version } from "aws-cdk-lib/aws-lambda";
import { Duration } from "aws-cdk-lib";
export class CloudfrontService extends BaseService {
  constructor(scope: Construct, stageId: string) {
    super(scope, stageId);
  }

  public createDistribution(
    originDomain: string,
    certificate: DnsValidatedCertificate,
    domains: string[],
    version: Version
  ) {
    const apiCachePolicy = new CachePolicy(
      this.scope,
      this.stageId + "ApiCachePolicy",
      {
        queryStringBehavior: CacheQueryStringBehavior.all(),
        cookieBehavior: CacheCookieBehavior.all(),
        headerBehavior: CacheHeaderBehavior.allowList(
          "Authorization",

          "Access-Control-Allow-Methods"
        ),
        minTtl: Duration.seconds(0),
        defaultTtl: Duration.seconds(0),
        //set to 0, this gives "invalid request"
        maxTtl: Duration.seconds(1),
      }
    );

    /* Custom policy because can't use ALL_VIEWER. ALL_VIEWER would forward 
    the "host" header of cloudfront, which will cause API-GW to not work because 
    it uses the host header (where it expects to see the API-GW host name) to 
    dispatch requests to API handlers. Presumably, function urls
    work off of the host header too. */
    const originRequestPolicy = new OriginRequestPolicy(
      this.scope,
      this.stageId + "OriginRequestPolicy",
      {
        cookieBehavior: CacheCookieBehavior.all(),
        /* You can't put "authorization" in here, because that would enable the 
        possibility of having auth here but not in the cache policy.
        That would be bad because it would enable cache poisoning and similar 
        attacks. But it's not needed anyway because headers defined in the cache 
        policy automatically get passed through to the origin. */
        headerBehavior: OriginRequestHeaderBehavior.none(),
        queryStringBehavior: OriginRequestQueryStringBehavior.all(),
      }
    );

    const distro = new Distribution(this.scope, this.stageId + "Distro", {
      comment: this.stageId + "Distro",
      defaultBehavior: {
        origin: new HttpOrigin(originDomain),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: apiCachePolicy,
        originRequestPolicy: originRequestPolicy,
      },
      certificate: certificate,
      domainNames: domains,
    });

    return distro;
  }
}
