import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { UserListProps } from "../Types";

const UserTableView = (props: UserListProps) => {
  const { users, setOpenDelete, setOpenEdit, setSelectedUser } = props;
  return (
    <>
      <Table className="!rounded-none">
        <TableHead className="bg-[#e5e4e250]">
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Email</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} hover>
              <TableCell>
                <div className="flex items-center ml-customize">
                  <Avatar src={user.avatar} alt={user.first_name} />
                </div>
              </TableCell>
              <TableCell>
                <span className="text-blue-500 cursor-pointer hover:underline">
                  {user.email}
                </span>
              </TableCell>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>
                <div className="flex justify-start gap-4">
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="primaryButton"
                    onClick={() => {
                      setOpenEdit(true);
                      setSelectedUser(user);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    className="!bg-red-500 hover:!bg-red-600"
                    onClick={() => {
                      setOpenDelete(true);
                      setSelectedUser(user);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTableView;
