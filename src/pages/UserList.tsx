import {
  Button,
  CircularProgress,
  InputAdornment,
  Pagination,
  Paper,
  TableContainer,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { CalendarViewMonthOutlined, List, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import UserTableView from "../components/UserTableView";
import UserCardView from "../components/UserCardView";
import { useAppDispatch, useAppSelector } from "../hooks";
import { UserReducerThunks } from "../store/user";
import Header from "../components/Header";
import UserDialog from "../components/UserDialog";
import { UserListTypes } from "../Types";
import DeleteConfirmDialog from "../components/DeleteConfirmationDialog";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { userList, totalPages, loader } = useAppSelector(
    (state) => state.user
  );
  const per_page = useAppSelector((state) => state.user.per_page);
  const [view, setView] = useState("table");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserListTypes>();

  const filteredUsers = userList.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    dispatch(UserReducerThunks.fetchUser({ per_page, page }));
  }, [page]);

  const handleUser = (data: any) => {
    dispatch(UserReducerThunks.createUser({ userData: data }));
    setSelectedUser(undefined);
  };

  const updateUser = (values: UserListTypes) => {
    dispatch(
      UserReducerThunks.updateUser({
        id: selectedUser?.id || 0,
        userData: values,
      })
    );
    setSelectedUser(undefined);
  };
  const handleConfirmDelete = () => {
    setOpenDelete(false);
    dispatch(UserReducerThunks.deleteUser({ id: selectedUser?.id || 0 }));
  };

  return (
    <>
      <Header />
      <div className="p-10 bg-gray-50 max-h-screen">
        <div className=" mx-auto bg-white  rounded shadow">
          <div className="px-6">
            <div className="flex items-center justify-between py-6">
              <h1 className="text-[#555555] text-[25px] font-[600]">Users</h1>
              <div className="flex items-center gap-3">
                <TextField
                  size="small"
                  placeholder="Input search text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="primaryButton"
                  onClick={() => setOpen(true)}
                >
                  Create User
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ToggleButtonGroup
                value={view}
                exclusive
                onChange={(_, val) => val && setView(val)}
                size="small"
                className="!h-7"
              >
                <ToggleButton value="table">
                  <CalendarViewMonthOutlined fontSize="small" />
                  <span className="ml-1 text-sm">Table</span>
                </ToggleButton>
                <ToggleButton value="card">
                  <List fontSize="small" />
                  <span className="ml-1 text-sm">Card</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          {loader ? (
            <div className="flex items-center justify-center py-20">
              <CircularProgress />
            </div>
          ) : (
            <Paper elevation={1}>
              <TableContainer>
                {filteredUsers.length === 0 ? (
                  <div className="py-10 text-center text-[#555555]">
                    No users found.
                  </div>
                ) : view === "table" ? (
                  <UserTableView
                    users={filteredUsers}
                    setOpenEdit={setOpenEdit}
                    setSelectedUser={setSelectedUser}
                    setOpenDelete={setOpenDelete}
                  />
                ) : (
                  <UserCardView
                    users={filteredUsers}
                    setOpenEdit={setOpenEdit}
                    setSelectedUser={setSelectedUser}
                    setOpenDelete={setOpenDelete}
                  />
                )}
              </TableContainer>
            </Paper>
          )}
        </div>

        {/* Pagination */}
        {filteredUsers.length !== 0 && (
          <div className="flex justify-end py-3 pr-4">
            <Pagination
              count={totalPages}
              color="primary"
              page={page}
              onChange={(_event, value) => setPage(value)}
            />
          </div>
        )}
      </div>

      {/* Create or edit user dialog */}
      <UserDialog
        open={open || openEdit}
        onClose={() => {
          setOpen(false);
          setOpenEdit(false);
          setSelectedUser(undefined);
        }}
        onSubmit={selectedUser ? updateUser : handleUser}
        title={selectedUser ? "Edit User" : "Create New User"}
        formValues={selectedUser}
      />

      {/* delete confirmation dialog */}
      <DeleteConfirmDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default UserList;
