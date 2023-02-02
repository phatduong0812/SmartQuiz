import React, { useState } from 'react'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography } from '@mui/material'
import FiveChoices from '~/components/Choices/FiveChoices'
import FourChoices from '~/components/Choices/FourChoices'
import ThreeChoices from '~/components/Choices/ThreeChoices'
import TwoChoices from '~/components/Choices/TwoChoices'
import SelectCompo from '~/components/SelectCompo'

import { selectedChoices } from '~/Mock'
import { AppStyles } from '~/constants/styles'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const selectStyle = {
    border: 'none',
    backgroundColor: AppStyles.colors['#FAFBFF'],
}

const formControlStyle = {
    mt: 1.5,
    maxWidth: 200,
}

const Modal = ({ open, onClose, submitQuestionHandler }) => {
    const [selectedChoice, setSelectedChoices] = useState({
        label: 2,
        value: 2,
    })

    const selectedChoicesHandler = (name, value) => setSelectedChoices({ label: name, value: value })

    return (
        <Dialog open={open} TransitionComponent={Transition} onClose={onClose}>
            <DialogTitle>Submit your question and answer</DialogTitle>
            <DialogContent dividers>
                <Box>
                    <Box my={2} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography>Multiple choices</Typography>
                        <SelectCompo
                            selectStyle={selectStyle}
                            formControlStyle={formControlStyle}
                            data={selectedChoices}
                            isDisable={false}
                            isRequire={true}
                            onChange={selectedChoicesHandler}
                            value={selectedChoice}
                        />
                    </Box>
                    <Box>
                        {(() => {
                            switch (selectedChoice.value) {
                                case 2:
                                    return <TwoChoices submitQuestionHandler={submitQuestionHandler} />
                                case 3:
                                    return <ThreeChoices submitQuestionHandler={submitQuestionHandler} />
                                case 4:
                                    return <FourChoices submitQuestionHandler={submitQuestionHandler} />
                                case 5:
                                    return <FiveChoices submitQuestionHandler={submitQuestionHandler} />
                            }
                        })()}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="error">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal
