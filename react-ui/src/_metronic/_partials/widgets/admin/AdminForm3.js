import React from "react";
import { Dropdown } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    group: {
        margin: theme.spacing(1, 0),
    },
}));

export function AdminForm3({ className }) {
    const classes = useStyles();
    const [value, setValue] = React.useState('role');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className={`card card-custom bg-gray-100 ${className}`}>
            {/* Header */}
            <div className="card-header border-0 bg-light">
                <div className="card-body">
                    <h3 className="card-title font-weight-bolder text-primary">
                        Assign Role
                    </h3>
                    <hr />
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Select Role</FormLabel>
                        <RadioGroup
                            aria-label="Role"
                            name="role"
                            className={classes.group}
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                            <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            {/* <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          /> */}
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel>To assign a role, select user</FormLabel> &nbsp;
                    <Dropdown className="dropdown-inline" drop="down" alignRight>
                            <Dropdown.Toggle
                                id="dropdown-toggle-top2"
                                type="text"
                                variant="transparent"
                                className="btn btn-light-primary btn-sm font-weight-bolder dropdown-toggle">
                                User
              </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-list scroller">
                                <ul className="navi navi-hover">
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon"><i className="flaticon2-drop"></i></span>
                                            <span className="navi-text">User 1</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon"><i className="flaticon2-list-3"></i></span>
                                            <span className="navi-text">User 2</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon"><i className="flaticon2-rocket-1"></i></span>
                                            <span className="navi-text">User 3</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon"><i className="flaticon2-bell-2"></i></span>
                                            <span className="navi-text">User 4</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon"><i className="flaticon2-gear"></i></span>
                                            <span className="navi-text">User 5</span>
                                        </a>
                                    </li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormControl>

                </div>
            </div>
        </div>
    );
}


