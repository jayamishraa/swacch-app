import { Modal, Box, Typography } from '@mui/material'
 
function SimpleModal({ open, setOpen }) {
 
    // const [ open, setOpen ] = useState(false)
    // const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
 
    const style = {
        width: '25rem',
        bgcolor: 'background.default',
        p: 2,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
 
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant='h6' component='h2'>Modal Header</Typography>
                    <Typography variant='body1' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus corrupti, quo at earum eveniet veritatis enim alias esse placeat.</Typography>
                </Box>
            </Modal>
        </div>
    )
}
 
export default SimpleModal