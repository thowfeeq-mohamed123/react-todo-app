import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import "./styles.css";

function Users() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 25;
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "login",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Node ID",
        accessor: "node_id",
      },
      {
        Header: "Avatar URL",
        accessor: "avatar_url",
      },
      {
        Header: "Access URL",
        accessor: "url",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer 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`,
      },
    };
    axios
      .get(
        `https://api.github.com/users?since=${
          currentPage * itemsPerPage
        }&per_page=${itemsPerPage}`
        // config
      )
      .then((res) => {
        setData([...data, ...res.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  const getUserInfo = (value) => {
    navigate(`/user/${value.node_id}`, { state: value });
  };

  return (
    <>
      <div className="Users-info">
        <h1>Welcome to Users</h1>
      </div>
      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      value={row.values}
                      onClick={(e) => getUserInfo(row.values)}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
