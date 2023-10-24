import HelloReactViewProvider from './src/helloReactViewProvider';

export default function ReactFooPlugin(configuration) {
    return function install(openmct) {
        openmct.types.addType('hello-react', {
            name: 'Hello React',
            key: 'hello-react',
            description: 'Hello, React!',
            creatable: true,
            cssClass: 'icon-object',
            initialize: function (domainObject) {
                // no-op
            },
            form: []
        });

        openmct.objectViews.addProvider(HelloReactViewProvider(openmct));
    };
}
