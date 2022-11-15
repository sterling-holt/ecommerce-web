import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next/types'
import type { AppProps } from 'next/app'
//	import '../styles/globals.css'


//	----------------

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

//	----------------




export default function App({ Component, pageProps }: AppPropsWithLayout) {

	const getLayout = Component.getLayout ?? (( page: any ) => page)


	return getLayout(<Component {...pageProps} />)
}