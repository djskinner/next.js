import newrelic from "newrelic";
import React from "react";

export default () => (
    <React.Fragment>
        <Head>
            {newrelic.getBrowserTimingHeader()}
        </Head>
        <div>Hello!</div>
    </React.Fragment>
);
