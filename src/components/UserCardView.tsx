import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { UserListProps } from "../Types";

const UserCardView = (props: UserListProps) => {
  const { users, setOpenDelete, setOpenEdit, setSelectedUser } = props;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <Card
            key={user.id}
            className="relative overflow-hidden rounded-2xl !shadow-lg  transition-all duration-300"
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300 z-10">
              <IconButton
                className="!bg-indigo-300 !hover:bg-indigo-400 !text-white  !rounded-full"
                onClick={() => {
                  setOpenEdit(true);
                  setSelectedUser(user);
                }}
              >
                <Edit fontSize="large" />
              </IconButton>
              <IconButton
                className="!bg-red-500 !hover:bg-red-600 !text-white !rounded-full"
                onClick={() => {
                  setOpenDelete(true);
                  setSelectedUser(user);
                }}
              >
                <Delete fontSize="large" />
              </IconButton>
            </div>

            <CardContent className="flex flex-col items-center py-6">
              <Avatar
                src={user.avatar}
                alt={user.first_name}
                sx={{ width: 70, height: 70 }}
                className="mb-4"
              />
              <Typography variant="h6" className="!font-medium text-[#1e1d1d]">
                {user.first_name} {user.last_name}
              </Typography>
              <Typography
                variant="body2"
                className="!font-medium text-[#55555580]"
              >
                {user.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserCardView;
