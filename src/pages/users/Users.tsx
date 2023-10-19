import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
import GetRequests from "../../lib/Services/Customers/GetRequests";
import { useQueryString } from "../../utils/query_string";
const { getUsers } = GetRequests;

const columns: GridColDef[] = [
  { field: "id", type: "string", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.avatar || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "first_name",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "last_name",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "gender",
    type: "string",
    headerName: "Gender",
    width: 200,
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
    type: "string",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["allUsers", page],
    queryFn: () => getUsers(page, 10),
  });
  const users_data = data?.data || [];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={users_data} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};


export default Users;
