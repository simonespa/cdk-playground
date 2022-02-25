#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import StorageStack from './StorageStack';
import { AnotherStorageStack, RecordSetGroup } from 'library';

const app = new App();

new StorageStack(app, 'StorageStack', {
  stackName: 'dev-storage-stack',
  description: 'The storage stack'
});

new AnotherStorageStack(app, 'AnotherStorageStack', {
  stackName: 'dev-another-storage-stack',
  description: 'Another storage stack',
});

new RecordSetGroup(app, 'RecordSetGroup', {
  stackName: 'dev-dns-stack',
  description: 'The DNS stack'
});
