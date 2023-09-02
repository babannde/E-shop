import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllServicesShop } from "../../redux/actions/service";
import { deleteService } from "../../redux/actions/service";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";

const AllServices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/service/admin-all-services`, {withCredentials: true}).then((res) => {
        setData(res.data.services);
    })
  }, []);

  const columns = [
    {field :"id", headerName : "Service Id",minWidth: 150,flex: 0.7},
    {
      field :"name", 
      headerName : "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field :"staffNumber", 
      headerName : "Number of staff",
      minWidth: 180,
      flex: 0.6,
    },
    {
      field :"operationYears", 
      headerName : "Years of operation",
      type: "number",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field:"Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/service/${params.id}`}>
                <Button>
                  <AiOutlineEye size={20} />
                </Button>
            </Link>
          </>
        )
      }
    },
  ];

  const row = [];

  data && data.forEach((item) => {
    row.push({
      id: item._id,
      name: item.name,
      staffNumber: item.staffNumber + " Staffs",
      operationYears: item.operationYears + " Years",
    });
  });

  return (
    <>
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid 
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnCick
            autoHeight
          />
        </div>
    </>
    
  )
};

export default AllServices;