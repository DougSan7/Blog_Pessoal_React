import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/cadastro"	element={<Cadastro />}/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App