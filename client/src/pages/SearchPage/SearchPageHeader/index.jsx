import { Tune } from '@mui/icons-material'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import PageTitle from '~/components/PageTitle'
import Search from '~/components/Search'

import logo from '../../../assets/images/Logo.png'
import Filter from './Filter'

import { Mock_Data } from '~/Mock'
import { AppStyles } from '~/constants/styles'

const SearchPageHeader = () => {
    return (
        <Grid container sx={{ backgroundColor: AppStyles.colors['#FAFBFF'] }}>
            <Grid maxWidth={1112} container sx={{ m: '0 auto', mt: 2 }}>
                <Grid item xs={12}>
                    <PageTitle logo={logo} text="SEARCH" />
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Grid container alignItems="center" spacing={4}>
                        <Grid item xs={11}>
                            <Search searchHeight={48} searchWidth={1020} inputWidth={940} inputHeight={1.5} />
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                sx={{
                                    height: 48,
                                    color: AppStyles.colors['#FFFFFF'],
                                    borderRadius: 3,
                                    backgroundColor: AppStyles.colors['#004DFF'],
                                    ':hover': {
                                        bgcolor: AppStyles.colors['#0045e5'],
                                        color: 'white',
                                    },
                                }}
                                component="div"
                            >
                                <IconButton size="large">
                                    <Tune fontSize="medium" sx={{ color: AppStyles.colors['#FFFFFF'] }} />
                                </IconButton>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={2} mb={5}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={12}>
                            <Typography>BỘ LỌC</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container display="flex" alignItems="center" justifyContent="center" spacing={3}>
                                <Grid item md={3}>
                                    <Filter data={Mock_Data.dropdown1} />
                                </Grid>
                                <Grid item md={3}>
                                    <Filter data={Mock_Data.dropdown2} />
                                </Grid>
                                <Grid item md={3}>
                                    <Filter data={Mock_Data.dropdown3} />
                                </Grid>
                                <Grid item md={3}>
                                    <Filter data={Mock_Data.dropdown4} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SearchPageHeader
