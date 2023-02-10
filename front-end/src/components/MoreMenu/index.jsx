import React, { useRef, useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'

import { BookmarkAdd, BorderColor, MoreVert } from '@mui/icons-material'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const MoreMenu = ({ studySetId, saveButtonOn }) => {
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
                    sx: { width: 180, maxWidth: '100%' },
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {saveButtonOn && (
                    <MenuItem component={RouterLink} to={`/admin/users/${studySetId}`} sx={{ color: 'text.secondary' }}>
                        <ListItemIcon>
                            <BookmarkAdd fontSize="small" sx={{ color: AppStyles.colors['#767680'] }} />
                        </ListItemIcon>
                        <ListItemText primary="Lưu" primaryTypographyProps={{ variant: 'body2' }} />
                    </MenuItem>
                )}

                <MenuItem
                    component={RouterLink}
                    to={`/study-sets/${studySetId}/update`}
                    sx={{ color: 'text.secondary' }}
                >
                    <ListItemIcon>
                        <BorderColor fontSize="small" sx={{ color: AppStyles.colors['#767680'] }} />
                    </ListItemIcon>
                    <ListItemText primary="Sửa" primaryTypographyProps={{ variant: 'body2' }} />
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default MoreMenu
