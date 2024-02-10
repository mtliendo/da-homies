'use client'

import { config } from '@/awsconfig'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
Amplify.configure(config)
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
