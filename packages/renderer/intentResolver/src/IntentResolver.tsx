import React from 'react';
import {Paper, Box, List, ListItem, ListItemText, ListItemIcon, ListItemButton, ListItemAvatar, Collapse, Avatar} from '@mui/material';
import {TOPICS} from '../../../main/src/constants';
import {FDC3App, IntentInstance} from '../../../main/src/types/FDC3Data';
import {Context} from '@finos/fdc3';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import OpenInBrowser from '@mui/icons-material/OpenInBrowser';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FolderIcon from '@mui/icons-material/Folder';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export class IntentResolver extends React.Component <{}, { results : Array<FDC3App> | Array<IntentInstance>, intent : string | undefined, context: Context | undefined}> {

    constructor(props) {
        super(props);
        this.setState({results: [], intent: '', context: undefined });
        
      }

    componentDidMount() {
        (document as any).addEventListener(TOPICS.RES_LOAD_INTENT_RESULTS, (event : CustomEvent) => {
            //if an intenet is assigned - cast results to FDC3Appp
            if (event.detail.intent){
                const results : Array<FDC3App> = (event.detail.options as Array<FDC3App>);
                this.setState({results:results || [], intent:event.detail.intent || '', context: event.detail.context });
            } else if (event.detail.context && event.detail.context.type){
                const results : Array<IntentInstance> = (event.detail.options as Array<IntentInstance>);
                this.setState({results:results || [], intent:event.detail.intent || '', context: event.detail.context});
            } else {
                this.setState({results:[], intent:event.detail.intent || '', context: event.detail.context});
            }
         });
    }
 



    render() {

       const resultSelected = (result : any, intent? : string) => {
            document.dispatchEvent(new CustomEvent(TOPICS.RES_RESOLVE_INTENT, {detail:{selected:result, selectedIntent:intent}}));
        };


        const getSubTitle = (item) : string => {
                if (item.details.instanceId){
                    return "instance";
                } else {
                    return "new";
                }
        };

        const getAppIcon = (item : FDC3App) => {
            if (item.details.instanceId){
                return (<OpenInBrowser />);
            } else {
                return (<OpenInNewIcon />);
            }
        }
      
   
   const getHeader = () => {
       console.log("state", JSON.stringify(this.state));
       if (this.state && this.state.intent) {
           return (<h1>Resolve Intent '{this.state.intent}'</h1>);
       } 
       else if (this.state && this.state.context) {
            return (<h1>Resolve Context '{this.state.context.type}'</h1>);
       }
       else {
           return (<h1>Resolve</h1>);
       }
   };

   const getList = () => {
       //is it an intent or context resolution
       if (this.state && this.state.intent){
           const results : Array<FDC3App> = (this.state.results as Array<FDC3App>);
           return (results.map((result, i) => 
        
                <ListItem key={`item_${i}`} disablePadding dense 
                sx={
                    {
                        paddingLeft:".6rem",
                        borderRadius:".3rem",
                        transition:".5s ease",
                        ":hover":{background:"#ccc", color:"#222", cursor:"pointer"},
                        
                    }}>
                        <ListItemAvatar key={`item_avatar_${i}`}>
                        <Avatar   key={`avatar_${i}`} sx={{backgroundColor:"#1976d2"}}>
                            {getAppIcon(result)}
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText key={`item_${i}-text`} onClick={() => {resultSelected(result);}}
                primary={result.details.title} secondary={getSubTitle(result) } /></ListItem>
                
                )
           );
        } else if (this.state && this.state.context) {
            const results : Array<IntentInstance> = (this.state.results as Array<IntentInstance>);
            let open = true;
            return (results.map((result, i) => 
                <div  key={`item_container_${i}`}>
                <ListItemButton  key={`item_button_${i}`}>
                    
                    <ListItemIcon  key={`item_icon_${i}`}>
                    <FolderIcon  key={`folder_icon_${i}`} />
                    </ListItemIcon>
                    <ListItemText  key={`item_text_${i}`}>{result.intent.displayName}</ListItemText>
                </ListItemButton>
                <Collapse  key={`item_collaps_${i}`} in={open} timeout="auto" unmountOnExit>
                    <List  key={`item_list_${i}`} component="div" disablePadding>
                       {result.apps.map((app : FDC3App, n) =>
                    <ListItemButton  key={`item_list_button_${i}_${n}`} sx={{ pl: 4 }}>
                    <ListItemAvatar  key={`item_list_button_avatar_${i}_${n}`}>
                         <Avatar  key={`item_avatar_${i}_${n}`} sx={{backgroundColor:"#1976d2"}}>
                             {getAppIcon(app)}
                         </Avatar>
                         </ListItemAvatar>
                         <ListItemText key={`item_text_${i}_${n}`} onClick={() => {resultSelected(app, result.intent.name);}}
                 primary={app.details.title} secondary={getSubTitle(app) } />
                    </ListItemButton>

                    )}
                    </List>
                </Collapse>
               
                        
                 </div>
                 )
            );
        }
        else {
            return;
        }

   };

    return (
        <ThemeProvider theme={darkTheme}>
        <Paper sx={{
            width:'100%',
            minWidth:438,
            height:'100%',
            minHeight:438,
            margin:0
        }}>
            {getHeader()}
            <h2>select an app</h2>
            <Box sx={{ padding:".6rem"}}>
                <List disablePadding>
                   {getList()}
                </List>
            </Box>
        </Paper>
        </ThemeProvider>

    );
                }
};

