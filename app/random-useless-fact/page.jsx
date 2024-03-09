'use client'
import React, { useState, useEffect } from 'react'

const RandomFact = () => {
	const [fact, setFact] = useState('')
	const [loading, setLoading] = useState(true)

	const fetchData = () => {
		fetch('https://uselessfacts.jsph.pl/random.json?language=en')
			.then((res) => res.json())
			.then((data) => {
				setFact(data.text)
				setLoading(false)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className="flex flex-col items-center h-[100dvh] justify-between gap-4 px-9 py-32">
			{loading ? <p>Loading...</p> : <p className="text-2xl">{fact}</p>}
			<button
				className="p-4 border border-transparent hover:border hover:border-slate-100"
				onClick={fetchData}
			>
				One more
			</button>
		</div>
	)
}

export default RandomFact
