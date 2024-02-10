import cdkoutput from './_backend/output.json'

const output = cdkoutput['DaHomiesBackendStack']

export const config = {
	Auth: {
		Cognito: {
			userPoolId: process.env.userPoolId || output.UserPoolId,
			userPoolClientId: process.env.userPoolClientId || output.UserPoolClientId,
			identityPoolId: process.env.identityPoolId || output.IdentityPoolId,
		},
	},
	API: {
		GraphQL: {
			endpoint: process.env.apiUrl || output.awsAppsyncApiEndpoint,
			region: process.env.region || output.awsAppsyncRegion,
			defaultAuthMode: 'userPool' as any,
		},
	},
}
