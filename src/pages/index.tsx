import { ReactElement } from 'react'
import { Nav, Footer } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {


	return <>
		Page goes here
	</>
}


Home.getLayout = function getLayout(page: ReactElement) {

	return <>
		<Nav />
		<main>{page}</main>
		<Footer />
	</>
}