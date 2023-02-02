import React, { useRef, useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'

import { MoreVert, Visibility } from '@mui/icons-material'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'

const MoreMenu = ({ userId }) => {
    const ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <IconButton size="small" sx={{ ml: 1 }} ref={ref} onClick={() => setIsOpen(true)}>
                <MoreVert size="small" />
            </IconButton>

            <Menu
                open={isOpen}
                anchorEl={ref.current}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: { width: 200, maxWidth: '100%' },
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem component={RouterLink} to={`/admin/users/${userId}`} sx={{ color: 'text.secondary' }}>
                    <ListItemIcon>
                        <Visibility color="info" />
                    </ListItemIcon>
                    <ListItemText primary="View" primaryTypographyProps={{ variant: 'body2' }} />
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default MoreMenu
