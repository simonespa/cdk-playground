// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// example test. To run these tests, uncomment this file along with the
// example resource in lib/index.ts
// test('Example', () => {
//   const app = new cdk.App();
//   const stack = new cdk.Stack(app, "TestStack");
//   // WHEN
//   new Library.Library(stack, 'MyTestConstruct');
//   // THEN
//   const template = Template.fromStack(stack);
//
//   template.hasResourceProperties('AWS::SQS::Queue', {
//     VisibilityTimeout: 300
//   });
// });
test('Example', () => {
    expect('a').toBe('a');
});
