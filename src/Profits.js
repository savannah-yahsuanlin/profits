import React from 'react';

const Profits = ({profits}) => {
	return (
		<ul>
			{
				profits.map(profit => {
					return (
						<li key={profit.id}>
							{profit.amount}
						</li>
					)
				})
			}
		</ul>
	)
}

export default Profits