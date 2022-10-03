import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  RemoveConnection,
} from "./Table";

const MyConnections = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "firstName",
      secondName: "lastName",
      Cell: AvatarCell,
      imgAccessor: "image",
      emailAccessor: "email",
    },
    {
      Header: "Birth Date",
      accessor: "birthDate",
    },
    ,
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "",
      accessor: "id",
      Cell: RemoveConnection,
    },
  ];

  let connections = useSelector((state) => state.connections);
  console.log(connections);
  return (
    <div className="container  mx-auto pb-6 px-4  sm:px-8 ">
      <div>
        <p class="text-3xl font-bold">
          My Connections
          <span className="ml-5">
            <GroupsIcon sx={{ fontSize: "50px" }} />
          </span>
        </p>
        <p class="text-gray-400 mt-1 mb-5">{connections.length} connections</p>
      </div>
      <Table columns={columns} data={connections} />
    </div>
  );
};

export default MyConnections;
