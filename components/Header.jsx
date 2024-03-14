'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'antd'
const items = [
	{
		label: <Link href="/">Home</Link>,
	},
	{
		label: <Link href="/humor/random-joke">Random Joke</Link>,
	},
	{
		label: <Link href="/humor/memes">Memes</Link>,
	},
	{
		label: <Link href="/random-useless-fact">Random Useless Fact</Link>,
	},
]
const App = () => {
	const [current, setCurrent] = useState('mail')
	const onClick = (e) => {
		setCurrent(e.key)
	}
	return (
		<Menu
			onClick={onClick}
			selectedKeys={[current]}
			mode="horizontal"
			items={items}
			theme="dark"
			style={{ fontFamily: 'Prata', color: 'white', fontSize: '1em', backgroundColor: 'black' }}
		/>
	)
}
export default App
