'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Memes = () => {
	const [memes, setMemes] = useState({})
	const [loading, setLoading] = useState(true)

	const fetchMemes = async () => {
		fetch('https://meme-api.com/gimme')
			.then((res) => res.json())
			.then((memes) => {
				if (memes.nsfw === true) {
					fetchMemes()
				}
				setMemes(memes)
				setLoading(false)
			})
	}

	useEffect(() => {
		fetchMemes()
	}, [])

	return (
		<div className="flex flex-col items-center h-[100dvh] gap-4 p-9">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="text-2xl">
					<p>{memes?.title}</p>
					<Image
						alt={memes?.title}
						src={memes?.url}
						width={500}
						height={600}
						unoptimized={true}
					/>
				</div>
			)}

			<Link href={`/humor/memes/${memes.subreddit}`}>See more memes from {memes.subreddit}</Link>

			<button
				className="fixed bottom-0 p-4 border border-transparent hover:border hover:border-slate-100"
				onClick={() => (setLoading(true), fetchMemes())}
			>
				One more
			</button>
		</div>
	)
}

export default Memes
