import {AnimatedSwitch} from "react-router-transition";
import {Redirect, Route, Switch} from "react-router-dom";
import {PublicRoute} from "../component/PublicRoute";
import {Login} from "../pages/Login/Login";
import {App} from "../pages/App/App";
import {Home} from "../pages/Home/Home";
import {About} from "../pages/About/About";
import {Product} from "../pages/Product/Product";
import {Detail} from "../pages/Detail/Detail";
import {Cart} from "../pages/Cart/Cart";
import {Checkout} from "../pages/Checkout/Checkout";

export const AppRoute = () => {
    return <Switch>
        <Route path="/app" exact>
            <Redirect to={'/app/home'} />
        </Route>
        <Route path={"/app/home"}>
            <Home/>
        </Route>
        <Route path={"/app/about"}>
            <About/>
        </Route>
        <Route path={"/app/product"}>
            <Product/>
        </Route>
        <Route path={"/app/detail"}>
            <Detail/>
        </Route>
        <Route path={"/app/cart"}>
            <Cart/>
        </Route>
        <Route path={"/app/checkout"}>
            <Checkout/>
        </Route>

        
        
    </Switch>
    // <About/>
}
