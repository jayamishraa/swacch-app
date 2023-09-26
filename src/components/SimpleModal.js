import {
  Modal,
  Box,
  Typography,
  Button,
  Skeleton,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

function SimpleModal({ open, setOpen, id }) {
  // const [ open, setOpen ] = useState(false)
  // const handleOpen = () => setOpen(true)

  const [problemData, setProblemData] = useState([]);
  const [loading, setLoading] = useState(false);

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
              <Container>
                <Typography variant="h6" component="h2">
                  {problemData?.name}
                </Typography>
                <Typography variant="npm startbody1" paragraph>
                  {problemData?.location}
                </Typography>
                <Typography variant="npm startbody1" paragraph>
                  {problemData?.status}
                </Typography>
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
