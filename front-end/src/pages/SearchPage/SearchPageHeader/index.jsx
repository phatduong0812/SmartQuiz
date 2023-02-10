import { Grid } from '@mui/material'
import FullWidthHeaderWhite from '~/components/FullWidthHeaderWhite'
import PageTitle from '~/components/PageTitle'
import Search from '~/components/Search'

import logo from '../../../assets/images/Logo.png'
import Filter from './Filter'

import { Mock_Data } from '~/Mock'

const SearchPageHeader = () => {
    return (
        <FullWidthHeaderWhite maxWidthContent={1112}>
            <Grid item xs={12}>
                <PageTitle logo={logo} text="SEARCH" />
            </Grid>
            <Grid item xs={12} mt={2}>
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xs={12}>
                        <Search searchHeight={48} searchWidth={1112} inputWidth={1040} inputHeight={1.5} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} mt={3} mb={5}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={12}>
                        <Grid container display="flex" alignItems="center" justifyContent="center" spacing={3}>
                            <Grid item md={3}>
                                <Filter data={Mock_Data.dropdown1} title="Cấp học" />
                            </Grid>
                            <Grid item md={3}>
                                <Filter data={Mock_Data.dropdown2} title="Tên trường" />
                            </Grid>
                            <Grid item md={3}>
                                <Filter data={Mock_Data.dropdown3} title="Lớp" />
                            </Grid>
                            <Grid item md={3}>
                                <Filter data={Mock_Data.dropdown4} title="Môn học" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FullWidthHeaderWhite>
    )
}

export default SearchPageHeader
