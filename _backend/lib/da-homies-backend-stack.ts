import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createHomieAuth } from './auth/cognito'
import { createAmplifyGraphqlApi } from './api/appsync'

export class DaHomiesBackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const auth = createHomieAuth(this, {
			appName: 'homie',
		})

		const api = createAmplifyGraphqlApi(this, {
			appName: 'homie',
			userpool: auth.userPool,
			identityPoolId: auth.identityPool.identityPoolId,
			authenticatedRole: auth.identityPool.authenticatedRole,
			unauthenticatedRole: auth.identityPool.unauthenticatedRole,
		})

		new cdk.CfnOutput(this, 'UserPoolId', {
			value: auth.userPool.userPoolId,
		})
		new cdk.CfnOutput(this, 'UserPoolClientId', {
			value: auth.userPoolClient.userPoolClientId,
		})
		new cdk.CfnOutput(this, 'IdentityPoolId', {
			value: auth.identityPool.identityPoolId,
		})
		new cdk.CfnOutput(this, 'AppSyncAPIEndpoint', {
			value: api.graphqlUrl,
		})
		new cdk.CfnOutput(this, 'AppRegion', {
			value: this.region,
		})
	}
}
