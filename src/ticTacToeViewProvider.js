import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import TicTacToeComponent from './TicTacToe.jsx';

export default function TicTacToeViewProvider(openmct) {
    return {
        key: 'tic-tac-toe-view',
        name: 'Tic Tac Toe View',
        cssClass: 'icon-object',
        canView: function (domainObject) {
            return domainObject.type === 'tic-tac-toe';
        },
        view: function () {
            let root;
            
            return {
                show: function (element) {
                    root = createRoot(element);
                    root.render(createElement(TicTacToeComponent));
                },
                destroy: function (element) {
                    root.unmount();
                }
            };
        },
        priority: function () {
            return 1;
        }
    };
}
