import React from 'react';

const Companies = ({companies}) => {
	return (
		<ul>
			{
				companies.map(company => {
					return (
						<li key={company.id}>
							<a href={`#${company.id}`}>
								{company.name}
							</a>
						</li>
					)
				})
			}
		</ul>
	)
}


export default Companies;