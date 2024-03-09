import { Prata } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Header from '@/components/Header'
import './globals.css'

const prata = Prata({ subsets: ['latin'], weight: '400' })

export const metadata = {
	title: 'Hello next',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="text-slate-100 text-pretty overflow-hidden"
		>
			<AntdRegistry>
				<body className={prata.className}>
					<Header />
					{children}
				</body>
			</AntdRegistry>
		</html>
	)
}
