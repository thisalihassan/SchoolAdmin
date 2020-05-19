import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function eCommercePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect exact={true} from="/admin" to="/admin/users" />
        }
        <ContentRoute path="/admin/users" component={CustomersPage} />
        <ContentRoute path="/admin/schools/new" component={ProductEdit} />
        <ContentRoute path="/admin/schools/:id/edit" component={ProductEdit} />

        <ContentRoute path="/admin/schools" component={ProductsPage} />
      </Switch>
    </Suspense>
  );
}
