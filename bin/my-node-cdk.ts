#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyNodeCdkStack } from '../lib/my-node-cdk-stack';

const app = new cdk.App();
new MyNodeCdkStack(app, 'MyNodeCdkStack');
