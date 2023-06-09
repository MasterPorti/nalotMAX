import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body className='overflow-x-hidden text-white bg-primary'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
