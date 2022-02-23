import { Stack, StackProps } from 'aws-cdk-lib';
import { CfnRecordSetGroup } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

export class RecordSetGroup extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CfnRecordSetGroup(this, 'TheRecordSetGroupCoUk', {
      hostedZoneName: 'api.bbc.co.uk.',
      recordSets: [
        {
          type: 'CNAME',
          name: 'component.test.hashcode.xsht.bbci.co.uk.',
          ttl: '3600'
        }
      ]
    })
  }
}
