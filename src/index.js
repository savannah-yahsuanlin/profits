import React from 'react';
import ReactDOM from 'react-dom/client';
import Companies from './Companies';
import Profits from './Profits';

const BASE_URL = 'https://www.acme-api.com/api'
const COMPANIES_API = `${BASE_URL}/companies`

const App = () => {
	const {useState, useEffect} = React
	const [companies, setCompanies] = useState([])
	const [profits, setProfits] = useState([])

	const loadCompanies = async() => {
		const response = await fetch(COMPANIES_API)
		const json = await response.json()
		setCompanies(json)
	}

	const loadProfits = async() => {
		const id = window.location.hash.slice(1)
		if(!id) {
			setProfits([])
		} else {
			const response = await fetch(`${COMPANIES_API}/${id}/companyProfits`)
			const json = await response.json();

      setProfits(json);
		}
	}

	useEffect(() => {
		loadCompanies()
		window.addEventListener('hashchange', loadProfits)
		loadProfits()
	},[])
	return (
		<div>
				<h1>Profits from {companies.length}</h1>
				<main>
					<Companies companies={companies}/>
					<Profits profits={profits}/>
				</main>
		</div>
	)
}


let root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);