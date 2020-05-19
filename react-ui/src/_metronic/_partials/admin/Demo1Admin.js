import React from "react";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    AdvanceTablesWidget4,
    AdvanceTablesWidget2,
    AdminForm1,
    AdminForm2,
    AdminForm3
} from "../widgets";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: theme.breakpoints.up('sm')
    },
}));

export default function AdminTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    backgroundColor="white"
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Users" style={{ backgroundColor: 'grey', color: 'white' }} {...a11yProps(0)} />
                    <Tab label="School" style={{ backgroundColor: 'grey', color: 'white' }} {...a11yProps(1)} />
                    <Tab label="Role" style={{ backgroundColor: 'grey', color: 'white' }} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <AdminForm1 />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <AdminForm2 />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <AdminForm3 />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

export const Demo1Admin = () => {

    return (<>
        <div className="row">
            <div className="col-lg-7 col-xxl-7">
                <AdvanceTablesWidget2 className="card-stretch card-stretch-half gutter-b" />
                <AdvanceTablesWidget4 className="card-stretch card-stretch-half gutter-b" />
            </div>
            <div className="col-lg-5 col-xxl-5">
                <AdminTabs className="card-stretch gutter-b" />
            </div>
        </div>
    </>);
};
