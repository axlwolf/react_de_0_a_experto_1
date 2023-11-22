export const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-4 px-4">
			<span className="navbar-brand">
				<i className="fas fa-calendar-alt"></i>
				&nbsp;&nbsp; Axel
			</span>
			<button className="btn btn-outline-danger">
				<i className="fas fa-sign-out-alt"></i>
				&nbsp;&nbsp;
				<span>Salir</span>
			</button>
		</nav>
	);
};
