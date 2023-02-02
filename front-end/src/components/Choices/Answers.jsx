import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const Answers = ({ answersSelected, handleChange, answers, mode }) => {
    return (
        <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-multiple-chip-label">Answers</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple={mode > 1}
                value={answersSelected}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Answers" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {answers.map((answerItem, index) => (
                    <MenuItem key={index} value={answerItem}>
                        {answerItem}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Answers
