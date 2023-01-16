import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from '@mui/material'

const CreateStudySet = () => {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div>Create Study Set</div>
            <Button variant="contained" onClick={() => navigate('/login')}>
                Back to Login
            </Button>
        </React.Fragment>
    )
}

export default CreateStudySet
