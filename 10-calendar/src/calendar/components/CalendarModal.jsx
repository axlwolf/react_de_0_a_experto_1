/* eslint-disable no-unused-vars */
import { useState } from "react";
import { addHours } from "date-fns";

import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "58vw",
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export const CalendarModal = () => {
	const [isOpnen, setIsOpnen] = useState(true);
	const [formValues, setFormValues] = useState({
		title: "Axel",
		notes: "Lanuza",
		start: new Date(),
		end: addHours(new Date(), 2),
	});

	const onInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const onCloseModal = () => {
		console.log("Closing modal");
		setIsOpnen(false);
	};

	const onDateChange = (event, changing) => {
		setFormValues({
			...formValues,
			[changing]: event,
		});
	};

	return (
		<Modal
			isOpen={isOpnen}
			onRequestClose={onCloseModal}
			style={customStyles}
			contentLabel="Example Modal"
			className="modal"
			overlayClassName="modal-fondo"
			closeTimeoutMS={200}
		>
			<h1> Nuevo evento </h1>
			<hr />
			<form className="container">
				<div className="form-group mb-2">
					<label>Fecha y hora inicio</label>
					<DatePicker
						selected={formValues.start}
						onChange={(event) => onDateChange(event, "start")}
						className="form-control"
						dateFormat="Pp"
						showTimeSelect
						locale="es"
						timeCaption="Hora"
					></DatePicker>
				</div>

				<div className="form-group mb-2">
					<label>Fecha y hora fin</label>
					<DatePicker
						minDate={formValues.start}
						selected={formValues.end}
						onChange={(event) => onDateChange(event, "end")}
						className="form-control"
						dateFormat="Pp"
						showTimeSelect
						locale="es"
						timeCaption="Hora"
					></DatePicker>
				</div>

				<hr />
				<div className="form-group mb-2">
					<label>Titulo y notas</label>
					<input
						type="text"
						className="form-control"
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
						value={formValues.title}
						onChange={onInputChange}
					/>
					<small id="emailHelp" className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group mb-2">
					<textarea
						type="text"
						className="form-control"
						placeholder="Notas"
						rows="5"
						name="notes"
						value={formValues.notes}
						onChange={onInputChange}
					></textarea>
					<small id="emailHelp" className="form-text text-muted">
						Información adicional
					</small>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block">
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};
