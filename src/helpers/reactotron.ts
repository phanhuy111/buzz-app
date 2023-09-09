/* eslint-disable no-console */

/* eslint-disable import/no-mutable-exports */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { queryClient } from "./queryClient";

// @ts-ignore
let Reactotron = null;
let reactotronRedux = null;
let sagaPlugin = null;
let QueryClientManager = null;
let reactotronReactQuery = null;

if (__DEV__) {
    require("reactotron-react-native");
    Reactotron = require("reactotron-react-native").default;
    reactotronRedux = require("reactotron-redux").reactotronRedux;
    sagaPlugin = require("reactotron-redux-saga");
    QueryClientManager = require("reactotron-react-query").QueryClientManager;
    reactotronReactQuery = require("reactotron-react-query").reactotronReactQuery;
}

let sagaMonitor;
let enhancers;

if (__DEV__) {
    const queryClientManager = new QueryClientManager({
        queryClient,
    });

    Reactotron.use(reactotronReactQuery(queryClientManager))
        .configure({
            onDisconnect: () => {
                queryClientManager.unsubscribe();
            },
        })
        .use(sagaPlugin({ except: [""] }))
        .use(reactotronRedux())
        .useReactNative()
        .connect();

    sagaMonitor = Reactotron.createSagaMonitor!();
    enhancers = Reactotron.createEnhancer!();

    console.log = (...args) => {
        // @ts-ignore
        Reactotron?.display({
            name: "LOG",
            important: true,
            value: args,
            preview: args.length ? JSON.stringify(args) : args[0],
        });
    };
}

export { sagaMonitor, enhancers };
