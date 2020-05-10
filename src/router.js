import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.js'
export default class ERouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                      <Admin>
                          <Route path="/admin/ui/buttons" component={Buttons}/>
                      </Admin>
                    }/>
                </App>
            </HashRouter>
        );
    }

}