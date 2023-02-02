import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const SelectChoice = ({ handleChange, selectedChoice }) => {
    return (
        <FormControl size="small" sx={{ width: '50%' }}>
            <InputLabel id="demo-simple-select-label">Multiple choices</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedChoice}
                label="Multiple choices"
                onChange={handleChange}
            >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectChoice
