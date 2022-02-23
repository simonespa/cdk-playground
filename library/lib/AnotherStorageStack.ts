import { Stack, StackProps } from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class AnotherStorageStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CfnBucket(this, 'AnotherStorageBucket', {
      bucketName: 'another-storage-bucket'
    })
  }
}
