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

const ModalUpdate = ({ open, onClose, submitQuestionHandler, question }) => {
    const { quest, ans, answers, id } = question
    const [selectedChoice, setSelectedChoices] = useState({
        label: ans.length,
        value: ans.length,
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
                                    return (
                                        <TwoChoices
                                            submitQuestionHandler={submitQuestionHandler}
                                            ansSelected={answers}
                                            questName={quest}
                                            first={ans[0]?.name}
                                            second={ans[1]?.name}
                                            id={id}
                                        />
                                    )
                                case 3:
                                    return (
                                        <ThreeChoices
                                            submitQuestionHandler={submitQuestionHandler}
                                            questName={quest}
                                            ansSelected={answers}
                                            first={ans[0].name}
                                            second={ans[1].name}
                                            third={ans[2].name}
                                            id={id}
                                        />
                                    )
                                case 4:
                                    return (
                                        <FourChoices
                                            submitQuestionHandler={submitQuestionHandler}
                                            questName={quest}
                                            ansSelected={answers}
                                            first={ans[0]?.name}
                                            second={ans[1]?.name}
                                            third={ans[2]?.name}
                                            fourth={ans[3]?.name}
                                            id={id}
                                        />
                                    )
                                case 5:
                                    return (
                                        <FiveChoices
                                            submitQuestionHandler={submitQuestionHandler}
                                            questName={quest}
                                            ansSelected={answers}
                                            first={ans[0]?.name}
                                            second={ans[1]?.name}
                                            third={ans[2]?.name}
                                            fourth={ans[3]?.name}
                                            fifth={ans[4]?.name}
                                            id={id}
                                        />
                                    )
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

export default ModalUpdate
