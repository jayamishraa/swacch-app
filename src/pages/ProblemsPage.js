import React from "react";
import { useState } from "react";
import Problems from "../components/Problems";
import SimpleModal from "../components/SimpleModal";
import { Outlet } from "react-router-dom";

function ProblemsPage() {
  return (
    <div>
      <Problems />
      {/* <SimpleModal open={open} setOpen={setOpen} /> */}
      <Outlet />
    </div>
  );
}

export default ProblemsPage;
