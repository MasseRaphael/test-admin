import React from "react";
import { Grid } from "@material-ui/core";
import {
    List,
    TextField,
    Datagrid,
    ImageField,
    ImageInput,
    TextInput,
    Edit,
    SimpleForm,
    Toolbar,
    SaveButton,
    FunctionField,
} from "react-admin";

const MenuToolbar = (props) => {
    <Toolbar { ...props }>
        <SaveButton />
    </Toolbar>
};

const FilenameField = (props) => {
    <FunctionField { ...props }
    render={(record) => (
        <img src={`https://api.gill-cote-bistro.fr${record.image.url}`} />
    )}
    />
};

export const SpecialsList = (props) => (
    <Grid container justify="space-around" direction="row" alignItems="center">
        <Grid item xs={12} md={8} lg={9} direction="column">
            <List { ...props }>
                <Datagrid>
                    <TextField label="title" source="title"></TextField>
                </Datagrid>
            </List>
        </Grid>
    </Grid>
)