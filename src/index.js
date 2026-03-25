import { styleDictionary } from './dictionaries/index.js'

export function applyStyle(element, classString) {
    // element -> HTML DOM node
    // classString -> String of utility classes like "flex m-1"
    if (!classString) return;
    // "flex bg-red-500" => ['flex', 'bg-red-500']
    const utilities = classString.split(' ');
    // loop throught all the elements and give styles
    utilities.forEach(utility => {
        const styles = styleDictionary[utility];
        if (styles) {
            Object.assign(element.style, styles);
        }
    });
}

export function initDOMStyles() {
    // we are looking for the .class . This grab a nodeList of every single HTML element on the page that has this specific attribute. 
    const elements = document.querySelectorAll('[class]');

    elements.forEach(element => {
        const classString = element.getAttribute('class');
        applyStyle(element, classString);
    });

    // create a Mutation Observer to watch newly add elements
    const observer = new MutationObserver((mutations) => {
        // loop through it
        mutations.forEach(mutation => {
            // Check newly add elements
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.hasAttribute('class')) {
                        applyStyle(node, node.getAttribute('class'));
                    }
                    // Check the children of newly added
                    if (node.nodeType === 1) {
                        const childElements = node.querySelectorAll('[class]');
                        childElements.forEach(child => {
                            applyStyle(child, child.getAttribute('class'));
                        });
                    }
                });
            }

            //check if it is modified or not
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                applyStyle(mutation.target, mutation.target.getAttribute('class'));
            }

        });
    });

    // start observing in real time
    observer.observe(document.body, {
        childList: true, // watch for all added elements
        subtree: true,  // watch all nested childern
        attributes: true,   // watch attribute changes
        attributeFilter: ['class'], // triggered if class attribute has change
    });
}

