import { Button } from '@mui/material'

const ButtonCompo = ({ style, children, variant, onClick }) => {
    return (
        <Button variant={variant} sx={{ py: 2, px: 4, borderRadius: 3, minWidth: 260, ...style }} onClick={onClick}>
            {children}
        </Button>
    )
}

export default ButtonCompo
