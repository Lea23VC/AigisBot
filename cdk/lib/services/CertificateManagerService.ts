import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager";
import { BaseService } from "./BaseService";
import { Construct } from "constructs";
import { IHostedZone } from "aws-cdk-lib/aws-route53";

export class CertificateManagerService extends BaseService {
  private certificate: DnsValidatedCertificate;
  constructor(scope: Construct, stageId: string) {
    super(scope, stageId);
  }

  public createCertificate(domain: string, hostedZone: IHostedZone) {
    //search hostedZone

    //create certificate for domain if doesn't exists
    this.certificate = new DnsValidatedCertificate(
      this.scope,
      "CrossRegionCertificate",
      {
        domainName: domain,
        hostedZone: hostedZone,
        region: "us-east-1",
      }
    );
    return this.certificate;
  }

  public getCertificate() {
    return this.certificate;
  }
}
