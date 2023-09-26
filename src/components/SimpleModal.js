import {
  Modal,
  Box,
  Typography,
  Button,
  Skeleton,
  Container,
  Chip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

function SimpleModal({ open, setOpen, id }) {
  // const [ open, setOpen ] = useState(false)
  // const handleOpen = () => setOpen(true)

  const [problemData, setProblemData] = useState([]);
  const [loading, setLoading] = useState(false);

  //shit
    const [adminData, setAdminData] = useState([])
    const [assign, setAssign] = useState(false)
    const handleAssign = () => {
      setAssign(prev=>!prev)
    }

    const handleAdmin = async() => {
      const admin = await API.get("/get-Allsupervisor")
      setAdminData(admin.data.supervisor)
    }
    useEffect(()=>{
      handleAdmin()
    },[])
  //shit end

  //img
  
  //img end

  const style = {
    width: "30rem",
    height: "20rem",
    bgcolor: "background.default",
    p: 2,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const getData = async () => {
    setLoading(true);
    try {
      const res = await API.get(`/single-product/${id}`);
      // console.log(res.data.problem);
      setProblemData(res.data.problem);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      getData();
    }
    return () => {
      setProblemData([]);
    };
  }, [open]);
  // server bhi share kr de mereko live share mein neeche hoga share krne ka

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          {loading ? (
            <>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={450}
                height={100}
                style={{
                  marginBottom: "1rem",
                }}
              />
              <Skeleton
                variant="line"
                animation="wave"
                width={450}
                height={100}
              />
            </>
          ) : (
            <>
              <Container maxWidth="md">
                <Box>
                <Typography variant="h6" component="h2">
                  {problemData?.name}
                </Typography>
                <Typography variant="npm startbody1" paragraph>
                  {problemData?.location}
                </Typography>

                <img src={`https://swachh-w8p5.onrender.com/get-photo/${problemData?._id}`}
                 style={{height: '100px'}} alt="nah"/>
                
                <Chip
                  label={
                    problemData?.status === "UnSolved"
                      ? "Unsolved"
                      : problemData?.status
                  }
                />
                  
                <h2>Admin</h2>
                <form>
                  <label>
                      <select>
                      <option value="0">Select</option>
                      {adminData.map((data)=>{
                        const {_id, name} = data
                        return(
                          <option value="1" style={{width: '150px'}}>
                            <p>{name}</p>
                            <button className="green" onClick={handleAssign}>{assign ? "Assigned" : "Assign"}</button>
                          </option>
                        )})}
                      </select>
                  </label>
                </form>

                
                {adminData.map((data)=>{
                  const {_id, name} = data
                  return(
                      <div key={_id}>
                          <button className="green" onClick={handleAssign}>{assign ? "Assigned" : "Assign"}</button>
                      </div>
                  )
              })}




                </Box>
               
                <Button variant="contained" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </Container>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default SimpleModal;
