import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./dataSlice";

import "./Data.module.css";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.min.css";

import { useNavigate } from "react-router-dom";

export default function Data() {
  const dispatch = useDispatch();
  let navigate = useNavigate()
  const { data } = useSelector((state) => ({
    data: state.data
  }));

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <Grid
        data={data.data.map((x) => [
          x.index,
          x.name,
          x.url,
          _(
            <button className={"view"} onClick={() => navigate(`/${x.index}`)}>
              View
            </button>
          )
        ])}
        columns={["index", "name", "url", "actions"]}
        pagination={{
          limit: 15
        }}
        sort={{
          multiColumn: false
        }}
        search
        style={{
          table: {
            border: "3px solid #ccc"
          },
          th: {
            "background-color": "rgba(0, 0, 0, 0.1)",
            color: "#000",
            "border-bottom": "3px solid #ccc",
            "text-align": "center"
          },
          td: {
            "text-align": "center"
          }
        }}
      />
    </div>
  );
}
