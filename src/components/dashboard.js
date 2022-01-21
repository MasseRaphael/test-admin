import * as React from "react";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core/CardContent";
import { Title, List, Datagrid, TextField } from "react-admin";
import { Grid } from "@material-ui/core";
import { FilenameField } from "./specials";

const SpecialsList = (props) => (
    <Grid container justify="space-around" direction="row" alignItems="center">
        <Grid item xs={12} md={8} lg={9} direction="column">
            <List { ...props }
            basePath="specials"
            resource="specials"
            pagination={false}
            bulkActionButtons={false}
            exporter={false}
            perPage={2}
            sort={{field: "created_at", order: "Desc"}}
            title=" "
            >
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

export default () => {

    return (
        <>
            <Title title="Dashboard" />
            <Grid container justify="space-around">

            </Grid>
        </>
    )
}