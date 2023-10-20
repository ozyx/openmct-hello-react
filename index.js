import TicTacToeViewProvider from './src/ticTacToeViewProvider';

export default function ReactFooPlugin(configuration) {
    return function install(openmct) {
        openmct.types.addType('tic-tac-toe', {
            name: 'Tic Tac Toe',
            key: 'tic-tac-toe',
            description: 'Let \'em play Tic Tac Toe',
            creatable: true,
            cssClass: 'icon-object',
            initialize: function (domainObject) {
                // no-op
            },
            form: []
        });

        openmct.objectViews.addProvider(TicTacToeViewProvider(openmct));
    };
}
