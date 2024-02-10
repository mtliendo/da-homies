'use client'
import { createRecipe } from '@/src/graphql/mutations'
import { RecipeByTitle, listRecipes } from '@/src/graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { generateClient } from 'aws-amplify/api'
import { useEffect } from 'react'

const client = generateClient()
function Home({ signOut }: any) {
	useEffect(() => {
		client
			.graphql({
				query: RecipeByTitle,
				authMode: 'iam',
				variables: {
					title: 'test',
				},
			})
			.then(console.log)
	}, [])
	return (
		<div>
			hello <button onClick={signOut}>signout</button>
		</div>
	)
}

export default Home
// export default withAuthenticator(Home, { signUpAttributes: ['email'] })
