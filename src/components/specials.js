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

const MenuToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

export const FilenameField = (props) => (
    <FunctionField {...props}
    render={(record) => (
        <img src={`https://api.gill-cote-bistro.fr${record.image.url}`} />
    )}
    />
);

export const SpecialsList = (props) => (
    <Grid container justify="space-around" direction="row" alignItems="center">
        <Grid item xs={12} md={8} lg={9} direction="column">
            <List { ...props }>
                <Datagrid rowClick="edit">
                    <Grid
                    container
                    justify="center"
                    direction="column"
                    alignItems="center">
                        <TextField label="title" source="title"></TextField>
                        <Grid items xs={10} lg={8}>
                            <FilenameField />
                        </Grid>
                        <TextField label="Dexcription" source="description" />
                    </Grid>
                </Datagrid>
            </List>
        </Grid>
    </Grid>
);

export const SpecialsEdit = (props) => (
    <Grid
    container
    justify="space-around"
    direction="row"
    alignItems="center"
    >
        <Grid items xs={12} md={8} lg={7}>
            <Edit title="Modifier" {...props}>
                <SimpleForm toolbar={<MenuToolbar />}>
                    <TextField fullWidth source="title" label="Titre" />
                    <FilenameField />
                    <ImageInput
                    multiple={false}
                    source="image"
                    accept="image/*"
                    />
                </SimpleForm>
            </Edit>
        </Grid>
    </Grid>
)