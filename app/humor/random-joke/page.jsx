'use client'
import React, { useState, useEffect } from 'react'

const RandomJoke = () => {
	const [joke, setJoke] = useState({})
	const [loading, setLoading] = useState(true)

	const fetchData = () => {
		fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,sexist`)
			.then((res) => res.json())
			.then((data) => {
				setJoke(data)
				setLoading(false)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div className="flex flex-col items-center h-[100dvh] justify-between gap-4 px-9 py-32">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="text-2xl">
					{joke.setup ? (
						<p>
							{joke.setup} - {joke.delivery}
						</p>
					) : (
						<p>{joke.joke}</p>
					)}
				</div>
			)}
			<button
				className="p-4 border border-transparent hover:border hover:border-slate-100"
				onClick={() => (setLoading(true), fetchData())}
			>
				One more
			</button>
		</div>
	)
}

export default RandomJoke
