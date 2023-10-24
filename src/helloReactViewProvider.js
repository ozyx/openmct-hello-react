import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import HelloReact from './HelloReact.jsx';

export default function HelloReactViewProvider(openmct) {
    return {
        key: 'hello-react-view',
        name: 'Hello React View',
        cssClass: 'icon-object',
        canView: function (domainObject) {
            return domainObject.type === 'hello-react';
        },
        view: function () {
            let root;
            
            return {
                show: function (element) {
                    root = createRoot(element);
                    root.render(createElement(HelloReact));
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
