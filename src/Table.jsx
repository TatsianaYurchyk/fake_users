import { useState, useContext  } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Context } from "./Context";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { DataGrid } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";
import SliderRange from "./SliderRange"
import Form from 'react-bootstrap/Form';

const UserTable = () => {
	const [users, setUsers] = useState([]);
	const [pageSize, setPageSize] = useState(10);
	const [seed, setSeed] = useState("");
	const [value, setValue] = useContext(Context);

	function User(fullName, id, phone, address) {
		this.fullName = fullName;
		this.id = id;
		this.phone = phone;
		this.address = address;
	}
	//for future:simple creation

	// const create = () => {
	//	faker.seed(+seed);
	// 	let fullName = faker.name.fullName();
	// 	let phone = faker.phone.number();
	// 	let id = faker.datatype.uuid();
	// 	let address =
	// 		faker.address.street() +
	// 		" " +
	// 		faker.address.buildingNumber() +
	// 		" " +
	// 		faker.address.city();
	// 	let user = new User(fullName, id, phone, address);
	// 	let newUsers = users;
	// 	newUsers = [...users, user];
	// 	setUsers(newUsers);
	// };

	const create = () => {
		let userrss = [];
     	faker.seed(+seed);
		for (let i = 0; i < value; i++) {
		  let fullName = faker.name.fullName();
		  let phone = faker.phone.number();
		  let id = faker.datatype.uuid();
		  let address =
			  faker.address.street() +
			  " " +
			  faker.address.buildingNumber() +
			  " " +
			  faker.address.city();
		  let user = new User(fullName, id, phone, address);
		  userrss.push(user)
	  };
	  let newUsers = users;
	  let finalUsers=newUsers.concat(userrss)
		  setUsers(finalUsers);
		  console.log(finalUsers)
	};


	const createHe = () => {
		faker.locale = "he";
		create();
}
	const createDe = () => {
		faker.locale = "de";
		create();
	};

	const createRu = () => {
		faker.locale = "ru";
		create();
		
	};

	const columns = [
		{ field: "id", headerName: "id", width: 250 },
		{ field: "fullName", headerName: "fullName", width: 200 },
		{ field: "address", headerName: "address", width: 400 },
		{ field: "phone", headerName: "phone", width: 200 },
	];

	return (
		<Container>
			<div className="wrap">
				<h1 className="text-center">Fake People</h1>
				<ButtonGroup
					aria-label="Basic example"
					className="mb-3 width100 adminBtn">
					<Button variant="info" onClick={createHe}>
						Hebrew
					</Button>
					<Button variant="primary" onClick={createDe}>
						Deutch
					</Button>
					<Button variant="secondary" onClick={createRu}>
						Russian
					</Button>
              <Form.Control onChange={e => setSeed(e.target.value)} placeholder="Seed" />
				</ButtonGroup>
				<SliderRange/>
				<div style={{ height: 600, width: "100%" }}>
					<DataGrid
						className="table"
						rows={users}
						columns={columns}
						disableSelectionOnClick
						getRowId={(row) => row.id}
						pageSize={pageSize}
						onPageSizeChange={(newPageSize) =>
							setPageSize(newPageSize)
						}
						rowsPerPageOptions={[5, 10, 20]}
						sx={{
							".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
								{
									"margin-top": "1em",
									"margin-bottom": "1em",
								},
						}}
					/>
				</div>
			</div>
		</Container>
	);
};

export default UserTable;
