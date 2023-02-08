import { useHistory } from 'react-router-dom'

import { CardContent, Typography } from '@mui/material'
import CardLayout from '~/components/CardLayout'

import { AppStyles } from '~/constants/styles'

const CardLayoutStyle = {
    mb: 1.5,
    borderRadius: 1,
    p: 1,
    height: 79,
    width: 860,
}

const DraftCard = ({ studyset, path }) => {
    const history = useHistory()
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '1',
                        textOverflow: 'ellipsis',
                        userSelect: 'none',
                        cursor: 'pointer',
                        color: 'black',
                        textDecoration: 'none',
                        ':hover': {
                            color: AppStyles.colors['#FFAF00'],
                        },
                    }}
                    onClick={() => history.replace(path, studyset)}
                >
                    {!studyset.title ? 'Không có chủ đề' : studyset.title}
                </Typography>
            </CardContent>
        </CardLayout>
    )
}

export default DraftCard
