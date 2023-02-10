import React from 'react'

import { useHistory } from 'react-router-dom'

import { Box, Checkbox, FormControlLabel, FormGroup, Modal, Typography } from '@mui/material'
import ButtonCompo from '~/components/ButtonCompo'

import { AppStyles } from '~/constants/styles'

const LearnModal = ({ open, handleClose, id }) => {
    const history = useHistory()
    const EndButton = {
        mt: 5,
        width: '100%',
        backgroundColor: AppStyles.colors['#004DFF'],
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 500,
        ':hover': {
            bgcolor: AppStyles.colors['#0045e5'],
            color: 'white',
        },
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: 3,
                }}
            >
                <Typography sx={{ fontSize: 32, mb: 3, fontWeight: 600, color: AppStyles.colors['#333333'] }}>
                    Tùy chọn
                </Typography>
                <Typography sx={{ color: AppStyles.colors['#333333'], mb: 1, fontSize: 17, fontWeight: 500 }}>
                    Phương pháp học
                </Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Học tiêu chuẩn" />

                    <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Học trả phí" />
                </FormGroup>
                <ButtonCompo
                    variant="contained"
                    style={EndButton}
                    onClick={() => history.push(`/study-sets/${id}/learn`)}
                >
                    Tiến hành học
                </ButtonCompo>
            </Box>
        </Modal>
    )
}

export default LearnModal
