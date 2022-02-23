import { Stack, StackProps } from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export default class StorageStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CfnBucket(this, 'MyBucket', {
      bucketName: 'my-very-first-bucket-no-just-kidding'
    })
  }
}
